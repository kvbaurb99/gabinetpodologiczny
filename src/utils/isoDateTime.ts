// "2026-10-25" → "2026-10-25T08:00:00+01:00" (strefa Europe/Warsaw, z uwzględnieniem czasu letniego)
export const toIsoDateTime = (date: string) => {
  const offset = new Date(`${date}T12:00:00Z`)
    .toLocaleString("en-US", {
      timeZone: "Europe/Warsaw",
      timeZoneName: "shortOffset",
    })
    .split("GMT")[1];
  const hours = Number(offset || 0);
  const sign = hours < 0 ? "-" : "+";
  return `${date}T08:00:00${sign}${String(Math.abs(hours)).padStart(2, "0")}:00`;
};
