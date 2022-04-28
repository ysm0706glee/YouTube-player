import { slicetext } from "./utils";

describe("slicetext", () => {
  test("slicetext returns 12345678910111213141…", () => {
    expect(slicetext("123456789101112131415161718192021")).toBe(
      "12345678910111213141…"
    );
  });

  test("slicetext returns 12345678910111213141", () => {
    expect(slicetext("12345678910111213141")).toBe("12345678910111213141");
  });
});
