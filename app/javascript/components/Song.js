import React from "react";

const Song = ({ Song, Artist }) => {
    const { name} = Song
    return (
      <>
        <div className="song-card">
          <h1>Song: {name}</h1>
          <a href={`/artists`}>billboards</a>
          <br />
          <a href={`/`}>also billboards</a>
          <br />
          <a href={`/artists/${artist.id}`}>billboard show</a>
          <a href={`/songs/${song.id}/ artists`}>Show Songs</a>
        </div>
      </>
    );
}

export default Song;