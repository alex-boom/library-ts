import React, { useEffect, useState } from 'react';
import { Localize } from 'components/service';

interface ILocalizeProps {
  children: string;
}

const DateTime: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  const tick = () => {
    setDate(new Date());
  };

  return (
    <div className='date-time'>
      {date.toLocaleTimeString(Localize({ children: "DATE.Time_Zone" } as ILocalizeProps).props.children, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
      })}
    </div>
  );
};

export default DateTime;
