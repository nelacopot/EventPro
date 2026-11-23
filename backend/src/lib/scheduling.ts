const SEATS_PER_ROW = 10;

export function buildSeatNumbers(capacity: number): string[] {
  const result: string[] = [];
  for (let i = 0; i < capacity; i += 1) {
    const rowIndex = Math.floor(i / SEATS_PER_ROW);
    let index = rowIndex;
    let row = "";
    do {
      row = String.fromCharCode(65 + (index % 26)) + row;
      index = Math.floor(index / 26) - 1;
    } while (index >= 0);
    result.push(`${row}${(i % SEATS_PER_ROW) + 1}`);
  }
  return result;
}

export function isValidTimeRange(start: Date, end: Date): boolean {
  return !Number.isNaN(start.getTime()) && !Number.isNaN(end.getTime()) && start < end;
}
