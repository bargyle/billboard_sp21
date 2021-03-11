import React from "react";

const SongNew = ({ artist, song }) => {
    const { name, errors } = song;
    const defaultName = name ? name : "";
    return (
      <>
        <h1> New Song </h1>
        {errors && errors}
        <form action={`/artists/${artist.id}/songs`} method="post">
          <p>Author</p>
          <input defaultValue={defaultName} name="song[title]" type="text" />
          <br />
          <button type="submit">add</button>
        </form>
      </>
    );
}

export default SongNew;