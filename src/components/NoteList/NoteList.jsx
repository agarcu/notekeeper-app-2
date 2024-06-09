import { useState } from "react";
import { CreateNoteForm } from "../CreateNoteForm/CreateNoteForm";
import { Note } from "../Note/Note";
import { UpdateNoteForm } from "../UpdateNoteForm/UpdateNoteForm";
import Card from "antd/es/card/Card";

export const NoteList = ({
  loading,
  notes,
  handleAddNewNote,
  handleUpdateNote,
  handleDeleteNote,
}) => {
  const [currentNote, setCurrentNote] = useState(null);
  const handlerNewNote = async (newNoteValue) => {
    try {
      const data = await handleAddNewNote(newNoteValue);
      return data;
    } catch (error) {
      console.error("Error submiting the new note: ", error);
    }
  };
  const handlerUpdateNote = async (updatedNoteValues) => {
    try {
      const data = await handleUpdateNote(currentNote.id, updatedNoteValues);
      return data;
    } catch (error) {
      console.error("Error updating the note: ", error);
    } finally {
      setCurrentNote(null);
    }
  };
  const handlerDeleteNote = async (id) => {
    try {
      const data = await handleDeleteNote(id);
      return data;
    } catch (error) {
      console.error("Error Deleting the note: ", error);
    } finally {
      setCurrentNote(null);
    }
  };
  return (
    <>
      {currentNote === null ? (
        <CreateNoteForm handleCreateSubmit={handlerNewNote} />
      ) : (
        <UpdateNoteForm
          setCurrentNote={setCurrentNote}
          note={currentNote}
          handleUpdateSubmit={handlerUpdateNote}
        />
      )}
      <Card>
        <div className="noteLista">
          {loading ? (
            <p>charging notes...</p>
          ) : (
            notes.map((note) => (
              <div>
                <Note
                  setCurrentNote={setCurrentNote}
                  key={note.id}
                  note={note}
                  handlerDeleteNote={handlerDeleteNote}
                ></Note>
              </div>
            ))
          )}
        </div>
      </Card>
    </>
  );
};
