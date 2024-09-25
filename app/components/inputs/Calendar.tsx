"use-client";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import {
  DateRange,
  DateRangePicker,
  Range,
  RangeKeyDict,
} from "react-date-range";

interface CalendarProps {
  value: Range;
  onChange: (value: RangeKeyDict) => void;
  disabledDates?: Date[];
}

function Calendar({ value, onChange, disabledDates }: CalendarProps) {
  return (
    <DateRange
      ranges={[value]}
      rangeColors={["#262626"]}
      date={new Date()}
      onChange={onChange}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disabledDates}
    />
  );
}

export default Calendar;
