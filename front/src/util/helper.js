import dayjs from "dayjs";
import jalaliday from "jalaliday";
import "dayjs/locale/fa";

dayjs.locale("fa");
dayjs.extend(jalaliday);

export const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
};
export const numberFormat = (number) => {
  return new Intl.NumberFormat("fa-IR").format(number);
};
export const tourDays = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  return (endDate - startDate) / (1000 * 60 * 60 * 24);
};
export const faDate = (isoDate) => {
  const date = new Date(isoDate);

  const formattedDate = new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  return formattedDate;
};
export const miladToShamas = (shamsiStr) => {
  if (!shamsiStr) return "";
  return dayjs(shamsiStr, "jYYYY-jMM-jDD").format("YYYY-MM-DD");
};
export const shmasToMilad = (miladiStr) => {
  if (!miladiStr) return "";
  return dayjs(miladiStr).calendar("jalali").locale("fa").format("YYYY-MM-DD");
};

export const queryFilterHandler = (tours, searchParams) => {
  if (!tours) return;
  const result = tours?.filter((tour) => {
    const originId = searchParams.get("origin");
    const destinationId = searchParams.get("destination");
    const startDate = searchParams.get("startDate");
    const matchOrigin = !originId || tour.origin.id === originId;

    const matchDestination =
      !destinationId || tour.destination.id === destinationId;

    const matchDate = !startDate || tour.startDate.slice(0, 10) >= startDate;

    return matchOrigin && matchDestination && matchDate;
  });
  return result;
};
export function formatToPersianDate(dateStr) {
  const date = dayjs(new Date(dateStr));
  const jDate = date.calendar("jalali");

  const weekdays = [
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنج‌شنبه",
    "جمعه",
    "شنبه",
  ];

  const weekdayName = weekdays[date.day()];
  const dayNum = jDate.date();
  const monthNum = jDate.month() + 1;
  const yearNum = jDate.year();

  const persianMonths = [
    "",
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  return `${weekdayName} ${dayNum} ${persianMonths[monthNum]} ${yearNum}`;
}
export function checkDateStatus(startDateStr, endDateStr) {
  const now = new Date();
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  if (now < startDate)
    return { class: "bg-red-500/30 text-red-500", message: "برگزار نشده" };
  if (now >= startDate && now <= endDate)
    return {
      class: " bg-yellow-500/30 text-yellow-500",
      message: "در حال برگزاری",
    };
  if (now > endDate)
    return { class: "bg-primary/30 text-primary ", message: "به اتمام رسید" };
}
export function formatFullJalali(datetimeStr) {
  const date = dayjs(new Date(datetimeStr)).calendar("jalali");

  const y = date.year();
  const m = String(date.month() + 1).padStart(2, "0");
  const d = String(date.date()).padStart(2, "0");

  const hour = String(date.hour()).padStart(2, "0");
  const minute = String(date.minute()).padStart(2, "0");

  return `${y}/${m}/${d} - ${hour}:${minute}`;
}
