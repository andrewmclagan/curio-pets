import { alpha } from "../sorters";

describe("alpha() sorter", () => {
  it("sorts alphabetically", () => {
    const result = [
      { name: "Rowan" },
      { name: "Sammy" },
      { name: "Andrew" },
      { name: "Laura" },
    ].sort(alpha("name"));

    expect(result).toEqual([
      { name: "Andrew" },
      { name: "Laura" },
      { name: "Rowan" },
      { name: "Sammy" },
    ]);
  });
});
