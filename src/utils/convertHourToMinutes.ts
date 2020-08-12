export default function convertHourToMinutes(time: string) {
  const [hour, minutes] = time.split(':').map(Number);
  const timeInMinures = hour * 60 + minutes;
  return timeInMinures;
}
