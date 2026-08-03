export function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

export function getFirstDayOfMonth(year: number, month: number) {
  let day = new Date(year, month, 1).getDay();

  // Lundi = 0
  return day === 0 ? 6 : day - 1;
}