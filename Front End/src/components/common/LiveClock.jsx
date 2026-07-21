import { useEffect, useState } from "react";

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-right">
      <h4 className="font-semibold text-gray-800">
        {time.toLocaleTimeString()}
      </h4>

      <p className="text-xs text-gray-500">
        {time.toDateString()}
      </p>
    </div>
  );
}

export default LiveClock;