import { test, expect } from "vitest";
import { validateType } from "../validateType";

test("validates note object types correctly", () => {
  const validNote = {
    name: "Sample Note",
    description: "This is a sample note",
    status: "pending",
    important: true,
    dueDate: "2023-06-10",
  };

  const invalidNote = {
    name: "Sample Note",
    description: "This is a sample note",
    status: "pending",
    important: "true", // incorrect type
    dueDate: "2023-06-10",
  };

  expect(validateType(validNote)).toBe(true);
  expect(validateType(invalidNote)).toBe(false);
});
{
}
