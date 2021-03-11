import React from "react";

const ArtistEdit = ({ artist, billboard }) => {
    const { id } = artst;
    const { name, errors } = artist;
    return (
      <>
        <h1>Artist Edit</h1>
        {errors && errors}
        <form action={`/billboards/${billboard.id}/artists/${id}`} method="post">
          <input type="hidden" name="_method" value="patch" />
          <p>Name</p>
          <input defaultValue={name} name="artist[name]" type="text" />
          <br />
          <button type="submit">update</button>
        </form>
      </>
    );
}

export default ArtistEdit;