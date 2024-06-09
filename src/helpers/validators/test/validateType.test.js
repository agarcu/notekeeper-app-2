import { expect, test } from "vitest";
import { validateType } from "../validateType";

test("validateType should return true if the given value is equal to the given type", () => {
  const value = 6;
  const type = "number";

  expect(validateType(type, value)).toBe(true);
});

test("validateType should return false if the given value isn't equal to the given type", () => {
  const value = "hello";
  const type = "number";

  expect(validateType(type, value)).toBe(false);
});
