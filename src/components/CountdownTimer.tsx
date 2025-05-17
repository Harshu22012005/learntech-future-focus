
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="flex space-x-3 text-center">
      {timeBlocks.map((block, index) => (
        <div key={index} className="flex flex-col">
          <div className="bg-gradient-to-b from-learntech-blue to-learntech-blue-dark text-white font-bold rounded-lg w-16 h-16 flex items-center justify-center text-2xl">
            {String(block.value).padStart(2, '0')}
          </div>
          <span className="text-xs font-medium text-gray-600 mt-1">{block.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
