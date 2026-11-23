import { describe, expect, it } from "vitest";
import { buildSeatNumbers, isValidTimeRange } from "../src/lib/scheduling.js";

describe("buildSeatNumbers", () => {
  it("returns no seats for zero capacity", () => {
    expect(buildSeatNumbers(0)).toEqual([]);
  });

  it("returns no seats for negative capacity", () => {
    expect(buildSeatNumbers(-3)).toEqual([]);
  });

  it("starts the first row at A1", () => {
    expect(buildSeatNumbers(1)).toEqual(["A1"]);
  });

  it("numbers all ten seats in the first row", () => {
    expect(buildSeatNumbers(10)).toEqual([
      "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10",
    ]);
  });

  it("continues at B1 after the first row", () => {
    expect(buildSeatNumbers(11).at(-1)).toBe("B1");
  });

  it("uses two-letter row labels after row Z", () => {
    expect(buildSeatNumbers(261).at(-1)).toBe("AA1");
  });
});

describe("isValidTimeRange", () => {
  it("accepts a range with start before end", () => {
    expect(isValidTimeRange(new Date("2026-01-01T10:00:00Z"), new Date("2026-01-01T11:00:00Z"))).toBe(true);
  });

  it("accepts a range that crosses midnight", () => {
    expect(isValidTimeRange(new Date("2026-01-01T23:30:00Z"), new Date("2026-01-02T00:30:00Z"))).toBe(true);
  });

  it("rejects equal start and end times", () => {
    const time = new Date("2026-01-01T10:00:00Z");
    expect(isValidTimeRange(time, time)).toBe(false);
  });

  it("rejects an end time earlier than the start", () => {
    expect(isValidTimeRange(new Date("2026-01-01T11:00:00Z"), new Date("2026-01-01T10:00:00Z"))).toBe(false);
  });

  it("rejects an invalid start date", () => {
    expect(isValidTimeRange(new Date("invalid"), new Date("2026-01-01T11:00:00Z"))).toBe(false);
  });

  it("rejects an invalid end date", () => {
    expect(isValidTimeRange(new Date("2026-01-01T10:00:00Z"), new Date("invalid"))).toBe(false);
  });
});
