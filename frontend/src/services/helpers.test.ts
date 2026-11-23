import { describe, expect, it } from "vitest";
import { getAvatarUrl } from "./api";
import { conferenceImageUrl } from "./conferences";

describe("getAvatarUrl", () => {
  it("returns null when no avatar URL is provided", () => {
    expect(getAvatarUrl()).toBeNull();
  });

  it("returns null for an empty avatar URL", () => {
    expect(getAvatarUrl("")).toBeNull();
  });

  it("adds the API origin to a relative avatar path", () => {
    expect(getAvatarUrl("/uploads/avatar.png")).toBe("http://localhost:3001/uploads/avatar.png");
  });

  it("preserves an absolute HTTP avatar URL", () => {
    expect(getAvatarUrl("http://cdn.example.com/avatar.png")).toBe("http://cdn.example.com/avatar.png");
  });

  it("preserves an absolute HTTPS avatar URL", () => {
    expect(getAvatarUrl("https://cdn.example.com/avatar.png")).toBe("https://cdn.example.com/avatar.png");
  });
});

describe("conferenceImageUrl", () => {
  it("returns null when there is no conference image", () => {
    expect(conferenceImageUrl(null)).toBeNull();
  });

  it("builds a full URL for a conference upload path", () => {
    expect(conferenceImageUrl("/uploads/conferences/banner.webp")).toBe("http://localhost:3001/uploads/conferences/banner.webp");
  });

  it("rejects image paths outside the conference upload directory", () => {
    expect(conferenceImageUrl("/uploads/avatar.png")).toBeNull();
  });

  it("rejects a path that only begins with the directory name", () => {
    expect(conferenceImageUrl("/uploads/conferences-old/banner.webp")).toBeNull();
  });
});
