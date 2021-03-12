import React from "react";

const Songs = ({ songs, artist }) => {
    const { id, name } = artist;
    return (
      <>
        <h1>songs Page from {name} billboard</h1>
        <a href={`/`}>back to billboard</a>
        <a href={`/artist/${id}/songs/`}>songs</a>
        {songs.map((song) => (
          <div key={song.id}>
            <h3>{song.name}</h3>
          </div>
        ))}
      </>
    );
}

export default Songs;
