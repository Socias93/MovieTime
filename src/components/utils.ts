export function range(startNumber: number, endNumber: number): number[] {
  let pages: number[] = [];

  for (let x = startNumber; x <= endNumber; x++) {
    pages.push(x);
  }
  return pages;
}
