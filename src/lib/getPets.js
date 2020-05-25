import * as filters from "./filters";

export default function getPets(owners) {
  if (!owners) {
    return [];
  }
  return owners
    .filter(filters.hasPets())
    .map((owner) => owner.pets)
    .flat();
}
