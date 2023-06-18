import React, { useState, useEffect } from "react";

export default function Lesson10Fn() {
  const [time, setTime] = useState(new Date());

  const changeTime = () => {
    setTime(new Date());
  };

  useEffect(() => {
    // Mounting and Updating
    const tick = setInterval(() => {
      changeTime();
    }, 1000);

    // Unmounting
    return () => {
      clearInterval(tick);
    };
  }, []);

  return (
    <div>
      <p>Hello! This is a class component clock.</p>
      <h2>It is {time.toLocaleTimeString()}.</h2>
    </div>
  );
}
