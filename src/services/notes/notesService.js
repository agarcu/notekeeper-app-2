const apiUrl = import.meta.env.VITE_URL_NOTES;

const obtainData = async (apiUrl, method = "GET", body = null) => {
  try {
    const options = {
      method,
      headers: { "Content-Type": "application/json" },
    };

    if (body !== null) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(apiUrl, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error obtaining data:", error);
    throw error;
  }
};

export const getAllNotes = async () => {
  return await obtainData(apiUrl);
};

export const addNewNote = async (body) => {
  return await obtainData(apiUrl, "POST", body);
};

export const updateNote = async (id, body) => {
  const urlWithId = `${apiUrl}/${id}`;
  return await obtainData(urlWithId, "PUT", body);
};

export const deleteNote = async (id) => {
  const urlWithId = `${apiUrl}/${id}`;
  await obtainData(urlWithId, "DELETE");
  return id;
};

export default {
  getAllNotes,
  addNewNote,
  updateNote,
  deleteNote,
};
