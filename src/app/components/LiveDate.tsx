"use client";

import { useEffect, useState } from "react";

export default function LiveDate() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      setDate(
        new Intl.DateTimeFormat("bn-BD", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
          timeZone: "Asia/Dhaka",
        }).format(new Date())
      );
    };

    updateDate();

    const timer = setInterval(updateDate, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
   <p className="bg-green-100 text-green-900 font-bold rounded-3xl w-42 p-2 whitespace-nowrap text-xs">
  {date}
</p>
  );
}