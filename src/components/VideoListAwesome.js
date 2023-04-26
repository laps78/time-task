import React from "react";

export default function VideoListAwesome({ Component, props }) {
  props.list.map((item) => {
    const dateNow = new Date();
    const dateNative = new Date(item.date);
    const timeLast = dateNow - dateNative;
    if (timeLast < 1000 * 60 * 60) {
      item.date = `${Math.floor(timeLast / (1000 * 60))} минут назад`;
      return item;
    }
    if (timeLast > 1000 * 60 * 60 && timeLast < 24 * 1000 * 60 * 60) {
      item.date = `${Math.floor(timeLast / (1000 * 60 * 60))} часов назад`;
      return item;
    }
    if (timeLast > 24 * 1000 * 60 * 60) {
      item.date = `${Math.floor(timeLast / (24 * 1000 * 60 * 60))} дней назад`;
      return item;
    }
  });

  return <Component props={{ ...props }} />;
}
