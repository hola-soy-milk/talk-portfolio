import { h } from "preact";
import { useState } from "preact/hooks";
import "./RandomTalk.css";

export default function RandomTalk({ talks }) {
  const randomTalk = () => talks[Math.floor(Math.random() * talks.length)];

  const [talk, setTalk] = useState(talks[0]);

  const {
    slug,
    data: { title, event, year, videoId },
  } = talk;

  return (
    <div class="container">
      <h3>{title}!</h3>
      <a href={`/talks/${slug}`}>
        <img
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt={`Thumbnail for my talk "${title}"`}
        />
      </a>
      <button onClick={() => setTalk(randomTalk())}>Show Another Talk!</button>
    </div>
  );
}
