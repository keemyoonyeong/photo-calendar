import * as dayjs from "dayjs";
import * as isTodayPlugin from "dayjs/plugin/isToday";
import * as objectPlugin from "dayjs/plugin/toObject";
import * as weekdayPlugin from "dayjs/plugin/weekday";
// import * as locale from "dayjs/locale/cs";

dayjs.extend(objectPlugin);
dayjs.extend(isTodayPlugin);
dayjs.extend(weekdayPlugin);

type DateType = string | number | dayjs.Dayjs | Date;

export function dataFormat() {
  return true;
}
export function monthFormat(date: DateType) {
  return dayjs(date).format("YYYYMM");
}

export const now = dayjs();
// .locale({ ...locale });
