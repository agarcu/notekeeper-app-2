export const UpdateNoteForm = ({ note, handleUpdateSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const newNoteValue = {
      name: event.target.name.value,
      description: event.target.description.value,
      status: event.target.status.value,
      important: event.target.important.checked,
      dueDate: event.target.dueDate.value,
    };
    handleUpdateSubmit(newNoteValue);
  };
  return (
    <form onSubmit={handleSubmit} className="note-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          defaultValue={note.name}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description"
          defaultValue={note.description}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="status">Status:</label>
        <select
          name="status"
          id="status"
          defaultValue={note.status}
          className="form-control"
          required
        >
          <option value="">Select an option</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="important"
            defaultChecked={note.important}
            className="checkbox-input"
          />
          Important
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="dueDate">Due date:</label>
        <input
          type="date"
          name="dueDate"
          id="dueDate"
          defaultValue={note.dueDate}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn-submit">
        Update
      </button>
    </form>
  );
};
