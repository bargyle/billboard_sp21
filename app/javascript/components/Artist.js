import React from "react";

const Artist = ({ artist, billboard }) => {
    const { name} = artist
    return (
      <>
        <div className="artist-card">
          <h1>Artist: {name}</h1>
          <a href={`/billboards`}>billboards</a>
          <br />
          <a href={`/`}>also billboards</a>
          <br />
          <a href={`/billboards/${billboard.id}`}>billboard show</a>
          <a href={`/artists/${artist.id}/songs`}>Show Songs</a>
        </div>
      </>
    );
}

export default Artist;