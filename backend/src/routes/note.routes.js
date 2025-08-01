import express from 'express'
import { createNote, deleteNote, getNoteById, getNotes, updateNote } from '../controllers/note.controller.js';
import {protectRoute} from '../middlewares/auth.middleware.js'

const router = express.Router();


router.get('/:projectId',protectRoute,getNotes);
router.get('/n/:noteId',protectRoute,getNoteById);

router.post('/:projectId',protectRoute,createNote);
router.put('/:projectId/n/:noteId',protectRoute,updateNote);
router.delete('/:id',protectRoute,deleteNote);



export default router