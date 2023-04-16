import React, { useState } from "react";
import { nanoid } from "nanoid";

function DateTime(props) {
  return <p className="date">{props.date}</p>;
}

function Video(props) {
  return (
    <div className="video">
      <iframe
        title={props.url}
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <DateTime date={props.date} />
    </div>
  );
}

function VideoList(props) {
  console.log(props);
  return props.list.map((item) => (
    <Video key={nanoid()} url={item.url} date={item.date} />
  ));
}

const VideoListAwesome = ({ Component, props }) => {
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

export default function App() {
  const [list, setList] = useState([
    {
      url: "https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2017-07-31 13:24:00",
    },
    {
      url: "https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-03-03 12:10:00",
    },
    {
      url: "https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-02-03 23:16:00",
    },
    {
      url: "https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-01-03 12:10:00",
    },
    {
      url: "https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-01-01 16:17:00",
    },
    {
      url: "https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2017-12-02 05:24:00",
    },
  ]);
  return <VideoListAwesome Component={<VideoList />} props={list} />;
}
