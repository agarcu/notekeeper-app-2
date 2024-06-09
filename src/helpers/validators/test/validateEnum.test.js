import { test, expect } from "vitest";
import { validateEnum } from "../validateEnum";

test("validates status enum values correctly", () => {
  const validStatuses = ["pending", "in-progress", "completed"];
  const invalidStatus = "archived";

  validStatuses.forEach((status) => {
    expect(validateEnum(status)).toBe(true);
  });

  expect(validateEnum(invalidStatus)).toBe(false);
});
