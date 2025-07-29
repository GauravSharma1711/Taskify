import { create } from 'zustand';
import toast from 'react-hot-toast';
import noteService from '../api/noteService';

const useNoteStore = create((set, get) => ({
  note: null,
  noteId: null, // <-- added noteId
  allNotes: [],
  fetchingAllNotes: false,
  creatingNote: false,
  updatingNote: false,
  deletingNote: false,

  // Get all notes for a specific project
  getAllNotes: async (projectId) => {
    try {
      set({ fetchingAllNotes: true });
      const res = await noteService.getAllNotes(projectId);
      set({ allNotes: res.allNotes });
      toast.success(res.message || 'All notes fetched successfully');
    } catch (error) {
      console.error('Error while fetching all notes:', error);
      toast.error(error.response?.data?.message || 'Fetching all notes failed');
    } finally {
      set({ fetchingAllNotes: false });
    }
  },

  // Get a specific note by ID
  getNotesById: async (projectId) => {
    try {
      const res = await noteService.getNoteById(projectId);
      set({ note: res.note, noteId: res.note._id }); // <-- update noteId
      toast.success(res.message || 'Note fetched successfully');
    } catch (error) {
      console.error('Error while fetching note by ID:', error);
      toast.error(error.response?.data?.message || 'Fetching note failed');
    }
  },

  // Create a new note
  createNote: async (noteData, projectId) => {
    try {
      set({ creatingNote: true });
      const res = await noteService.createNote(noteData, projectId);
      set((state) => ({
        allNotes: [...state.allNotes, res.note],
        noteId: res.note._id // <-- set created noteId
      }));
      toast.success(res.message || 'Note created successfully');
    } catch (error) {
      console.error('Error while creating note:', error);
      toast.error(error.response?.data?.message || 'Error while creating note');
    } finally {
      set({ creatingNote: false });
    }
  },

  // Update an existing note
  updateNote: async (projectId, noteId, noteData) => {
    try {
      set({ updatingNote: true });
      const res = await noteService.updateNote(projectId, noteId, noteData);
      set({ note: res.note, noteId: res.note._id }); // <-- update noteId again

      // Refresh all notes after update
      await get().getAllNotes(projectId);

      toast.success(res.message || 'Note updated successfully');
    } catch (error) {
      console.error('Error while updating note:', error);
      toast.error(error.response?.data?.message || 'Error while updating note');
    } finally {
      set({ updatingNote: false });
    }
  },

  // Delete a note
  deleteNote: async (noteId) => {
    try {
      set({ deletingNote: true });
      const res = await noteService.deleteNote(noteId);
      toast.success(res.message || 'Note deleted successfully');

      set((state) => ({
        allNotes: state.allNotes.filter(note => note._id !== noteId),
        noteId: state.noteId === noteId ? null : state.noteId // clear noteId if deleted
      }));
    } catch (error) {
      console.error('Error while deleting note:', error);
      toast.error(error.response?.data?.message || 'Error while deleting note');
    } finally {
      set({ deletingNote: false });
    }
  }
}));

export default useNoteStore;
