import React from "react";
const ArtistNew = ({ billboard, artist }) => {
    const { id } = billboard;
    const { name, errors} = artist;
    const defaultName = name ? name : "";
    return (
      <>
        <h1>Artist New</h1>
        {errors && errors}
        <form action={`/billboards/${id}/artists`} method="post">
            <input 
            type="text"
            name="artist[name]"
            defaultValue={defaultName}
            name="billboard[name]"
            />
          <button type="submit">add</button>
        </form>
      </>
    );
}
export default ArtistNew;