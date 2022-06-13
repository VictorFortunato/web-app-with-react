import SpeakersToolbar from "./SpeakersToolbar";
import SpeakersList from "./SpeakersList";
import { useState } from "react";

function Speakers({ theme, setTheme }) {
  const [showSessions, setShowSessions] = useState(true);
  const [showFavorites, setShowFavorites] = useState(true);


  return (
    <>
      <SpeakersToolbar
        theme={theme}
        setTheme={setTheme}
        showSessions={showSessions}
        setShowSessions={setShowSessions}
        showFavorites = {showFavorites}
        setShowFavorites = {setShowFavorites}
      />
      <SpeakersList showSessions={showSessions} showFavorites ={showFavorites}/>
    </>
  );
}

export default Speakers;