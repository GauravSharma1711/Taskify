import useNoteStore from "../store/noteStore.js";

const useNoteActions = () => {
  const { deleteNote, getAllNotes } = useNoteStore();

  const handleDeleteNote= async (noteId, projectId) => {
    try {
      await deleteNote(noteId);
      await getAllNotes(projectId); // refresh notes
    } catch (error) {
      console.error("Failed to delete subtask:", error.message);
    }
  };

  return { handleDeleteNote };
};

export default useNoteActions;
