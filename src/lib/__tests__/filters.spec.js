import { gender, species, hasPets } from "../filters";

describe("gender() filter", () => {
  it("only returns items with correct gender", () => {
    const result = [
      { gender: "male" },
      { gender: "female" },
      { gender: "neutral" },
      { gender: "female" },
    ].filter(gender("female"));

    expect(result).toEqual([{ gender: "female" }, { gender: "female" }]);
  });

  it("is not case sensitive", () => {
    const result = [
      { gender: "male" },
      { gender: "MALE" },
      { gender: "Male" },
      { gender: "male" },
      { gender: "maLe" },
    ].filter(gender("MAlE"));

    expect(result.length).toBe(5);
  });
});

describe("species() filter", () => {
  it("only returns items of correct species", () => {
    const result = [
      { type: "fish" },
      { type: "cat" },
      { type: "dog" },
      { type: "cat" },
    ].filter(species("cat"));

    expect(result).toEqual([{ type: "cat" }, { type: "cat" }]);
  });

  it("is not case sensitive", () => {
    const result = [
      { type: "cat" },
      { type: "CAT" },
      { type: "Cat" },
      { type: "caT" },
      { type: "CaT" },
    ].filter(species("cAT"));

    expect(result.length).toBe(5);
  });
});

describe("hasPets() filter", () => {
  it("does not return for falsy values", () => {
    const result = [
      { pets: null },
      { pets: false },
      { pets: undefined },
      { pets: "" },
    ].filter(hasPets());

    expect(result.length).toBe(0);
  });

  it("does not return for empty", () => {
    const result = [{ pets: [] }, { pets: [] }].filter(hasPets());

    expect(result.length).toBe(0);
  });

  it("returns items with pets", () => {
    const result = [
      { pets: [] },
      { pets: [] },
      { pets: [{ name: "puppy-the-cat" }, { name: "kitty" }] },
      { pets: [{ name: "chubbs" }, { name: "brutas" }] },
    ].filter(hasPets());

    expect(result).toEqual([
      { pets: [{ name: "puppy-the-cat" }, { name: "kitty" }] },
      { pets: [{ name: "chubbs" }, { name: "brutas" }] },
    ]);
  });
});
