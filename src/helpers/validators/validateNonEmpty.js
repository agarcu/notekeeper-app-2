export const validateNonEmpty = (note) => {
  return note.name.trim() !== "" && note.description.trim() !== "";
};
