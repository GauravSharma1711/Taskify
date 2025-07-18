import express from 'express'
import { createNote, getNoteById, getNotes, updateNote } from '../controllers/note.controller';
import {protectRoute} from '../middlewares/auth.middleware.js'

const router = express.Router();


router.get('/:projectId',protectRoute,getNotes);
router.get('/:id',getNoteById);

router.post('/:projectId',protectRoute,createNote);
router.put('/:projectId/:noteId',protectRoute,updateNote);
router.delete('/:id',protectRoute,deleteNode);



export default router