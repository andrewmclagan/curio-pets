import getPets from "../getPets";

describe("getPets() mapper", () => {
  // basic smoke test, needs extending to edge cases
  it("returns owners pets", () => {
    const result = getPets([
      { name: "Rowan", pets: [{ name: "frosty" }, { name: "ridgey" }] },
      { name: "Sammy", pets: [{ name: "birdy-num-num" }] },
      { name: "Andrew", pets: [{ name: "puppy" }, { name: "brit" }] },
      { name: "Laura", pets: [{ name: "LeeLee" }] },
    ]);

    expect(result).toEqual([
      { name: "frosty" },
      { name: "ridgey" },
      { name: "birdy-num-num" },
      { name: "puppy" },
      { name: "brit" },
      { name: "LeeLee" },
    ]);
  });
});
