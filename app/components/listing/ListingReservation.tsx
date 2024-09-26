"use client";

import { Range } from "react-date-range";
import Calendar from "../inputs/Calendar";
import Button from "../Button";

interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabledDates?: Date[];
  disabled?: boolean;
}

function ListingReservation({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabledDates,
  disabled,
}: ListingReservationProps) {
  return (
    <div className="bg-white  border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4 border rounded-xl overflow-hidden">
        <div className="text-2xl font-semibold">$ {price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        onChange={(value) => onChangeDate(value.selection)}
        disabledDates={disabledDates}
      />
      <hr />
      <div>
        <Button label="Reserve" disabled={disabled} onClick={onSubmit} />
      </div>
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
    </div>
  );
}

export default ListingReservation;
