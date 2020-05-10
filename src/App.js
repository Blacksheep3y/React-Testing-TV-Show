// Dependencies (already Imported)
import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import parse from "html-react-parser";

// File Imports
import { fetchShow } from "./api/fetchShow";

import { formatSeasons } from "./utils/formatSeasons";

import Episodes from "./components/Episodes";
import "./styles.css";

// Default Export
export default function App() {
  const [show, setShow] = useState(null);
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("");
  const episodes = seasons[selectedSeason] || [];

  // --- *** Moving the async call *** --- \\

  // useEffect(() => {
  //   const fetchShow = () => {
  //     axios
  //       .get(
  //         "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
  //       )
  //       .then(res => {
  //         setShow(res.data);
  //         setSeasons(formatSeasons(res.data._embedded.episodes));
  //       });
  //   };
  //   fetchShow();
  // }, []);

  // *** Recreate the UseEffect
  useEffect(() => {
    fetchShow()
    .then((res) => {
      console.log("res: ", res);
      setShow(res.data);
      setSeasons(formatSeasons(res.data._embedded.episodes));
    })
    .catch((err) => {
      console.log("err ", err);
    });
}, []);

  const handleSelect = e => {
    setSelectedSeason(e.value);
  };

  if (!show) {
    return <h2>Fetching data...</h2>;
  }

  return (
    <div className="App">
      <img className="poster-img" src={show.image.original} alt={show.name} />
      <h1>{show.name}</h1>
      {parse(show.summary)}
      <Dropdown
        options={Object.keys(seasons)}
        onChange={handleSelect}
        value={selectedSeason || "Select a season"}
        placeholder="Select an option"
      />
      <Episodes episodes={episodes} />
    </div>
  );
}
