import Button from "./ui/Button";
import PersonDropdown from "./PersonDropdown";
import DateDropdown from "./DateDropdown";
import TimeDropdown from "./TimeDropdown";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";
import { useState } from "react";

const ReservationWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [personCount, setPersonCount] = useState(2);
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState(new Date());


  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Book a table</Button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">Book a table</DialogTitle>
            <p>This is where you'll add the details of your booking</p>

            <PersonDropdown count={personCount} setCount={setPersonCount} />
            <DateDropdown date={startDate} setDate={setStartDate} />
            <TimeDropdown time={time} setTime={setTime} />

            <div className="flex gap-4">
              <Button onClick={() => setIsOpen(false)}>Book now</Button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default ReservationWidget;