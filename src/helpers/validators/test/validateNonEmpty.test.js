import { test, expect } from "vitest";
import { validateNonEmpty } from "../validateNonEmpty";

test("validates non-empty properties correctly", () => {
  const validNote = {
    name: "Sample Note",
    description: "This is a sample note",
  };

  const invalidNote = {
    name: "",
    description: "This is a sample note",
  };

  expect(validateNonEmpty(validNote)).toBe(true);
  expect(validateNonEmpty(invalidNote)).toBe(false);
});
