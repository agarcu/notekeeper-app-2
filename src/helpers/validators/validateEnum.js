const validStatuses = ["pending", "in-progress", "completed"];

export const validateEnum = (status) => {
  return validStatuses.includes(status);
};
