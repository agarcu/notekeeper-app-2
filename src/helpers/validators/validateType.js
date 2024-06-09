export const validateType = (note) => {
  return (
    typeof note.name === "string" &&
    typeof note.description === "string" &&
    typeof note.status === "string" &&
    typeof note.important === "boolean" &&
    typeof note.dueDate === "string"
  );
};
