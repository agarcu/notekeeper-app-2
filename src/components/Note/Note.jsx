import "../../assets/css/style.css";
import Card from "antd/es/card/Card";

export const Note = ({ note, setCurrentNote, handlerDeleteNote }) => {
  return (
    <Card className="note">
      <h2>{note.name}</h2>
      <p>Description: {note.description}</p>
      <p>Important: {note.important ? "Sí" : "No"}</p>
      <p>State: {note.status}</p>
      <p>Due Date: {note.dueDate}</p>
      <div className="note-buttons">
        <button className="update-btn" onClick={() => setCurrentNote(note)}>
          Update
        </button>
        <button
          className="delete-btn"
          onClick={() => handlerDeleteNote(note.id)}
        >
          Delete
        </button>
      </div>
    </Card>
  );
};
