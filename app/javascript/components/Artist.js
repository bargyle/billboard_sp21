import React from "react";

const Artist = ({ artist, billboard }) => {
    const { name, body } = artist
    return (
      <>
        <div className="artist-card">
          <h1>Artist: {name}</h1>
          <h6>Billboard: {billboard.name}</h6>
          <p>{body}</p>
          <a href={`/billboards`}>billboards</a>
          <br />
          <a href={`/`}>also billboards</a>
          <br />
          <a href={`/billboards/${billboard.id}`}>billboard show</a>
        </div>
      </>
    );
}

export default Artist;