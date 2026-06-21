/** Returns the active Nov–Mar booking window for the given date. */
export function getSeasonDateRange(referenceDate = new Date()): { start: string; end: string } {
  const year = referenceDate.getFullYear();
  const month = referenceDate.getMonth(); // 0 = Jan

  let startYear: number;
  let endYear: number;

  if (month >= 10) {
    // Nov–Dec: season starts this year, ends next March
    startYear = year;
    endYear = year + 1;
  } else if (month <= 2) {
    // Jan–Mar: season started last November
    startYear = year - 1;
    endYear = year;
  } else {
    // Apr–Oct: next season starting upcoming November
    startYear = year;
    endYear = year + 1;
  }

  const start = `${startYear}-11-01`;
  const end = `${endYear}-03-31`;
  return { start, end };
}

export function isDateInSeason(isoDate: string, referenceDate = new Date()): boolean {
  const { start, end } = getSeasonDateRange(referenceDate);
  return isoDate >= start && isoDate <= end;
}

export function formatSeasonDisplayDate(isoDate: string): string {
  const [y, m, d] = isoDate.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
