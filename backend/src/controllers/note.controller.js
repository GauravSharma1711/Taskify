import {Note} from '../models/note.model.js'
import {User} from '../models/user.model.js'
import {Project} from '../models/project.model.js'
import { response } from 'express';

const getNotes = async (req, res) => {
 
  try {
    const userId = req.user.id

  const user = await User.findById(userId);
  if(!user){
    return res.status(404).json({error:"No user found"});
  }

  const projectId = req.params.projectId;

  const allNotes = await Note.find({
      project:projectId,
      createdBy:userId
  })

  if(!allNotes){
    return res.status(404).json({error:"No note found"});
  }

  return res.status(200).json({message:"all notes found",allNotes});

  } catch (error) {
    console.log("Error in getAllNotes controller",error);
    return res.status(500).json({error:"Internal server error"});
    
  }
};

const getNoteById = async (req, res) => {
  
  try {
    const noteId = req.params.noteId;
    const note = await Note.findById(noteId);
  console.log("note",noteId);
  
      if(!note){
        return res.status(404).json({error:"Note with this id not found"});
      }

      if (note.createdBy.toString() !== req.user.id.toString()) {
      return res.status(403).json({ error: "You are not authorized to view this note" });
    }
      return res.status(200).json({note});
  
  } catch (error) {
    console.log("Error in getnote by id controller",error);
     return res.status(500).json({error:"Internal server error"});
  }

};

const createNote = async (req, res) => {
  
  try {
    const {content} =  req.body;
    const projectId = req.params.projectId;
    
    
  const curLoggedInUser = req.user.id;

    const project = await Project.findById(projectId);
    if(!project){
      return res.status(404).json({error:"Project not found"});
    }

    if(project.createdBy.toString()!==curLoggedInUser.toString()){
      return res.status(403).json({error:"Unauthorized to create Note"});
    }

    const note = new Note({
      project:projectId,
      content,
      createdBy:curLoggedInUser,
    })

    
    
    
    await note.save();

    return res.status(200).json({message:"note created successfully",note})

  } catch (error) {
     console.log("Error in createNote controller",error);
     return res.status(500).json({error:"Internal server error"});
  }

};

const updateNote = async (req, res) => {
  
  try {
    
    const {content} = req.body;

    const { projectId, noteId } = req.params;


    const currentLoggedInUser = req.user.id;

     const note = await Note.findById(noteId);


    if(!note || note.project.toString() !== projectId.toString()){
      return res.status(404).json({erorr:"Note not found"});
    }

    if(note.createdBy.toString()!==currentLoggedInUser.toString()){
      return res.status(403).json({error:"unauthorized to updateNote"});
    }

     note.content = content;
     await note.save();

    
     

      return res.status(200).json({message:"note updated successfully",note})

  } catch (error) {
    console.log("Error in updateNote controller",error);
     return res.status(500).json({error:"Internal server error"});
  }
};

const deleteNote = async (req, res) => {
  try {
    const noteId = req.params.id;
    const currentLoggedInUser = req.user.id;

    const note = await Note.findById(noteId);
    if(!note){
      return res.status(404).json({error:"Note not found"});
    }
     
     if(note.createdBy.toString()!==currentLoggedInUser.toString()){
        return res.status(403).json({error:"unauthorized to updateNote"});
      }
  
      await Note.deleteOne({_id:note._id});
  
      return res.status(200).json({message:"Note deleted successfully"});
  
  } catch (error) {
      console.log("Error in deleteNote controller",error);
     return res.status(500).json({error:"Internal server error"});
  }
};

export { createNote, deleteNote, getNoteById, getNotes, updateNote };