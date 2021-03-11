import React from "react";

const ArtistNew = ({ artist, billboard }) => {
    const { id } = billboard;
    const { name, } = artist;
    const defaultName = name ? name : "";
    return (
      <>
        <h1>Topic New</h1>
        {errors && errors}
        <form action={`/billboards/${id}/artists`} method="post">
          <p>Name</p>
          <input defaultValue={defaultName} name="artist[name]" type="text" />
          <p>Body</p>
          <textarea defaultValue={defaultname} name="artist[name]" />
          <br />
          <button type="submit">add</button>
        </form>
      </>
    );
}

export default ArtistNew;