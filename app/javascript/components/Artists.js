import React from "react";


const Artists = ({ artists, billboard, }) => {
    const { title, id } = billboard;
    return (
      <>
        <h1>Artists Page from {title} billboard</h1>
        { artists.map((billboard) => (
        <div>
          <h3>{artist.name}</h3>
          <a href={ url + artist.id }> Show</a>
          <a href={ url + artist.id + "/edit" }> Edit </a>
          <a
            href={ url + artist.id }
            data-method="delete"
          >
            Delete
          </a>
        </div>
      ))}
        <a href={`/billboards/${id}`}>back to billboard show</a>
        <br />
        <a href={`/`}>back to billboards</a>
        <br />
        <a href={`/billboards/${id}/artists/new`}> artist new </a>
        <a href={`/artists/${id}/songs`}> songs</a>
        <br />
        {artists.map((artist) => (
          <div key={artist.id} className="artist-card">
            <h3>{artist.name}</h3>
            <p>{artist.body}</p>
            <a href={`/billboards/${billboard.id}/artists/${artist.id}`}>artist show</a>
            <a href={`/billboards/${billboard.id}/artists/${artist.id}/edit`}>artist edit</a>
            <a href={`/billboards/${billbaord.id}/artists/${artist.id}`} data-method="delete">
              artist delete
            </a>
          </div>
        ))}
      </>
    );
}

export default Artists;