import { useState, useEffect } from 'react';

const TimerBar = () => {
  const [progress, setProgress] = useState(100);
  const duration = 15000;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress - (100 / (duration / 10));
        return newProgress >= 0 ? newProgress : 0;
      });
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-4/5 h-5 bg-white rounded-full overflow-hidden mt-5 border-2 border-black">
      <div
        className="w-full h-full bg-green-500 rounded-full transition"
        style={{ width: `${progress}%`, marginLeft: `${(100 - progress) / 2}%`, backgroundColor: `${progress < 30 ? '#F26B76' : '#00695c'}` }}
      ></div>
    </div>
  );
};

export default TimerBar;