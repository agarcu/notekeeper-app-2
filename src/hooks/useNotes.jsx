import { useEffect, useState } from "react";
import notesService from "../services/notes/notesService";

export const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const handlerSetNotes = (newNotes) => {
    setNotes(newNotes);
  };

  const handleGetAllNotes = async () => {
    notesService
      .getAllNotes()
      .then((data) => {
        handlerSetNotes(data.notes);
      })
      .catch((error) => {
        console.log("Error obtaining the notes: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    handleGetAllNotes();
  }, []);

  const handleCreateNotes = async (newNote) => {
    setLoading(true);
    try {
      await notesService.addNewNote(newNote);
      const data = await notesService.getAllNotes();
      handlerSetNotes(data.notes);
    } catch (error) {
      console.log("Error creating new note: ", error);
    } finally {
      console.log("Note created");
      setLoading(false);
    }
  };

  const handleUpdateNotes = async (id, updatedNote) => {
    setLoading(true);
    try {
      await notesService.updateNote(id, updatedNote);
      const data = await notesService.getAllNotes();
      handlerSetNotes(data.notes);
    } catch (error) {
      console.log("Error updating the note: ", error);
    } finally {
      console.log("Note Updated");
      setLoading(false);
    }
  };

  const handleDeleteNotes = async (id) => {
    setLoading(true);
    try {
      await notesService.deleteNote(id);
      const data = await notesService.getAllNotes();
      handlerSetNotes(data.notes);
    } catch (error) {
      console.log("Error deleting the note: ", error);
    } finally {
      console.log("Note Deleted");
      setLoading(false);
    }
  };
  return {
    notes,
    loading,
    handleCreateNotes,
    handleUpdateNotes,
    handleDeleteNotes,
  };
};
