"use client";
import styles from "./timer.module.css";
import React, { useEffect, useState } from "react";

const Timer = ({ initialHours = 1 }) => {
  const totalSeconds = initialHours * 60 * 60;

  const [secondsRemaining, setSecondsRemaining] = useState(totalSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSeconds) => {
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(secondsRemaining);

  const padTime = (time) => String(time).padStart(2, "0");

  return (
    <section>
      {secondsRemaining > 0 ? (
        <div className={styles.timerContainer}>
          {days > 0 && (
            <div className={styles.timerInfoContainer}>
              <span className={styles.time}>{padTime(days)}</span>
              <span className={styles.text}>Days</span>
            </div>
          )}
          <div className={styles.timerInfoContainer}>
            <span className={styles.time}>{padTime(hours)}</span>
            <span className={styles.text}>hours</span>
          </div>
          <div className={styles.timerInfoContainer}>
            <span className={styles.time}>{padTime(minutes)}</span>
            <span className={styles.text}>mins</span>
          </div>
          <div className={styles.timerInfoContainer}>
            <span className={styles.time}>{padTime(seconds)}</span>
            <span className={styles.text}>secs</span>
          </div>
        </div>
      ) : (
        <h1 className={styles.timeIsUp}>time is up</h1>
      )}
    </section>
  );
};

export default Timer;
