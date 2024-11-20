export const convertTimestampToDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString(); // Output: "MM/DD/YYYY" sesuai lokal
}
