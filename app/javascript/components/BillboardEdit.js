import React from "react";

const BillboardEdit = ({ billboard }) => {
    const { title, id } = billboard;
    const defaultTitle = title ? title : "";
    return (
      <>
        <h1>BillboardNew Component Here</h1>
        <form action={`/billboards/${id}`} method="post">
          
          <input type="hidden" title="_method" value="patch" /> // need this for edit!
          <input
            placeholder="Title"
            required
            type="text"
            defaultValue={defaultTitle}
            title="billboard[title]"
          />
          <button type="submit">Edit</button>
        </form>
      </>
    );
}

export default BillboardEdit;