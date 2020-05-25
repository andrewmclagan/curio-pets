export function alpha(key) {
  return (a, b) => {
    const nameA = a[key].toUpperCase();
    const nameB = b[key].toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;    
  };
}
