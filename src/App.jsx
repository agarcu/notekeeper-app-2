import { useNotes } from "./hooks/useNotes";
import { NoteList } from "./components/NoteList/NoteList";

function App() {
  const {
    notes,
    loading,
    handleCreateNotes,
    handleUpdateNotes,
    handleDeleteNotes,
  } = useNotes();

  return (
    <>
      <NoteList
        notes={notes}
        loading={loading}
        handleAddNewNote={handleCreateNotes}
        handleUpdateNote={handleUpdateNotes}
        handleDeleteNote={handleDeleteNotes}
      />
    </>
  );
}

export default App;
