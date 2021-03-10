import React from "react";

const BillboardNew = ({ billboard }) => {
    // doing this here in case creating failed we can still get back
    // the values that where in the form so it doesn't clear out the form
    const { title } = billboard;
    const defaultTitle = title ? title : "";
    return (
      <>
        <h1>BillboardNew Component Here</h1>
        <form action="/billboards" method="post">
          <input
            placeholder="Title"
            type="text"
            defaultValue={defaultTitle}
            title="billboard[title]"
          />
          <button type="submit">add</button>
        </form>
      </>
    );
}

export default BillboardNew;