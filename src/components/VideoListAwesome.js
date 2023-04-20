import React from 'react';

function VideoListAwesome({ Component, props }) {
  const modifiedProps = props.map((item) => {
    const dateNow = new Date();
    const dateNative = new Date(item.date);
    const timeLast = dateNow - dateNative;
    if (timeLast < 1000 * 60 * 60) {
      return (item.date = `${Math.floor(timeLast / (1000 * 60))} минут назад`);
    }
    if (timeLast > 1000 * 60 * 60 && timeLast < 24 * 1000 * 60 * 60) {
      return (item.date = `${Math.floor(
        timeLast / (1000 * 60 * 60)
      )} часов назад`);
    }
    if (timeLast > 24 * 1000 * 60 * 60) {
      return (item.date = `${Math.floor(
        timeLast / (24 * 1000 * 60 * 60)
      )} дней назад`);
    }
  });
  return class extends React.Component {
    render() {
      return <Component props={modifiedProps} />;
    }
  };
};

export default VideoListAwesome;
