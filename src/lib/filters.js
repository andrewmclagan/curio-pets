function propertyFilter(item, key, value) {
  if (!item[key]) {
    return false;
  }
  return item[key].toLowerCase() === value.toLowerCase();
}

export function gender(value) {
  return (item) => propertyFilter(item, "gender", value);
}

export function species(value) {
  return (item) => propertyFilter(item, "type", value);
}

export function hasPets() {
  return (item) => Boolean(item?.pets?.length);
}
