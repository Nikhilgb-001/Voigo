import React, { useEffect, useState } from "react";

const TimeCard = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Check if the target time is already stored in localStorage
    let targetTime = localStorage.getItem("targetTime");

    if (!targetTime) {
      // If not, set target time to 7 days from now and store it in localStorage
      targetTime = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
      localStorage.setItem("targetTime", targetTime);
    } else if (targetTime) {
      targetTime = parseInt(targetTime, 10); // Convert to integer
    } else {
      targetTime = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
    }

    const countdown = setInterval(() => {
      const currentTime = new Date().getTime();
      const difference = targetTime - currentTime;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(countdown);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="flex items-center h-1/2 justify-center p-4 bg-gray-100 px-4">
      <div className="text-center">
        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4 relative">
          Your voice is all it takes – say what you want, and Voigo delivers!
          We're launching soon, get ready!
        </h2>
        <div className="flex gap-2 flex-wrap justify-center items-center lg:gap-4">
          <TimeBlock label="Days" value={timeLeft.days} />
          <span className="text-2xl md:text-3xl font-bold">:</span>
          <TimeBlock label="Hours" value={timeLeft.hours} />
          <span className="text-2xl md:text-3xl font-bold">:</span>
          <TimeBlock label="Minutes" value={timeLeft.minutes} />
          <span className="text-2xl md:text-3xl font-bold">:</span>
          <TimeBlock label="Seconds" value={timeLeft.seconds} />
        </div>
      </div>
    </div>
  );
};

const TimeBlock = ({ label, value }) => (
  <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-3 md:p-4 w-16 md:w-20">
    <span className="text-xl md:text-4xl font-bold text-gray-800">
      {value.toString().padStart(2, "0")}
    </span>
    <span className="text-xs md:text-base text-gray-500">{label}</span>
  </div>
);

export default TimeCard;
