// import React from 'react'
import { useEffect, useRef, useState } from "react";
import styles from "./DatePicker.module.css";
import PropTypes from "prop-types";
import {
  months,
  days,
  getMonthDays,
  getMonthFirstDay,
  zeroPad,
  stringToDate,
} from "./calenderData";
function DatePicker({ dateFormat, onChange, defaultValue, nonInput }) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(
    defaultValue ? stringToDate(defaultValue, dateFormat) : new Date()
  );
  const [monthYear, setMonthYear] = useState({
    month: date.getMonth(),
    year: date.getFullYear(),
  });
  const [calDays, setCalDays] = useState([]);
  const [inPutval, setInputVal] = useState("");

  const calenderRef = useRef();
  const leftSlide = useRef();
  const rightSlide = useRef();
  const inputRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!calenderRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  useEffect(() => {
    setCalDays(() => {
      let arr = new Array(42).fill("");
      let monthDayCount = getMonthDays(monthYear.month, monthYear.year);
      let firstDay = getMonthFirstDay(monthYear.month, monthYear.year);
      for (let i = 0; i < monthDayCount; i++) {
        arr[i + firstDay] = i + 1;
      }
      return arr;
    });
  }, [monthYear]);

  useEffect(() => {
    setInputVal(getFormatedDate(date, dateFormat));
    onChange(getFormatedDate(date, dateFormat));
  }, [date, dateFormat, onChange]);

  function onClickHandler() {
    setOpen(!open);
  }

  function slideMonthYr(e) {
    if (leftSlide.current.contains(e.target)) {
      setMonthYear((current) => {
        let yearFactor = 0;
        if (current.month - 1 < 0) {
          yearFactor = -1;
        }
        return {
          month: current.month - 1 < 0 ? 11 : current.month - 1,
          year: current.year + yearFactor,
        };
      });
    }
    if (rightSlide.current.contains(e.target)) {
      setMonthYear((current) => {
        let yearFactor = 0;
        if (current.month + 1 > 11) {
          yearFactor = +1;
        }
        return {
          month: current.month + 1 > 11 ? 0 : current.month + 1,
          year: current.year + yearFactor,
        };
      });
    }
  }

  function getFormatedDate(_date, format) {
    if (format === "dd/MM/yyyy") {
      return `${zeroPad(_date.getDate(),2)}/${
        _date.getMonth() + 1
      }/${_date.getFullYear()}`;
    } else if (format === "MM/dd/yyyy") {
      return `${
        _date.getMonth() + 1
      }/${_date.getDate()}/${_date.getFullYear()}`;
    } else if (format === "MMM dd, yyyy") {
      return `${
        months[_date.getMonth()]
      } ${_date.getDate()}, ${_date.getFullYear()}`;
    } else {
      return _date.toDateString();
    }
  }

  function dateSelectHandler(e) {
    setDate(() => {
      // console.log(date,monthYear,calDays,e.target.textContent);
      return new Date(
        `${monthYear.year}-${zeroPad(monthYear.month + 1, 2)}-${
          e.target.textContent
        }`
      );
    });
  }

  return (
    <>
      <div className={styles.container} ref={calenderRef}>
        {!nonInput ? (
          <div
            className={styles.input_element_container}
            onClick={onClickHandler}
          >
            <input
              className={styles.input}
              ref={inputRef}
              type="text"
              style={{ border: "none", padding: 0, margin: "2px 8px" }}
              value={inPutval}
              onChange={(e) => {
                setInputVal(() => e.target.value);
              }}
              placeholder={dateFormat}
            />
          </div>
        ) : (
          <div onClick={onClickHandler}>{inPutval}</div>
        )}

        <div
          className={`${styles.calender} ${
            open ? styles.active : styles.inactive
          }`}
        >
          <div className={styles.selector}>
            <div ref={leftSlide} className={styles.left} onClick={slideMonthYr}>
              &lt;
            </div>
            <div className={styles.month_yr}>
              <div className={styles.month}>{months[monthYear.month]}</div>
              <div className={styles.year}>{monthYear.year}</div>
            </div>
            <div
              ref={rightSlide}
              className={styles.right}
              onClick={slideMonthYr}
            >
              &gt;
            </div>
          </div>
          <div className={styles.daysContainer}>
            {days.map((day, ind) => {
              return (
                <div
                  className={`${styles.day} ${
                    ind === 0 || ind === 6 ? styles.blockDay : null
                  }`}
                  key={day}
                >
                  {day}
                </div>
              );
            })}
          </div>
          <div className={styles.datesContainer}>
            {calDays.map((day, ind) => {
              if (day == "" && ind > 6) return null;
              else {
                return (
                  <div
                    key={ind}
                    className={`${styles.day} ${
                      day !== "" ? styles.selectable : null
                    } ${
                      date.getDate() === day &&
                      date.getMonth() === monthYear.month
                        ? styles.active
                        : null
                    }`}
                    onClick={dateSelectHandler}
                  >
                    {day}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}
DatePicker.propTypes = {
  dateFormat: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  nonInput: PropTypes.bool,
};

export default DatePicker;
