import React from "react";

const Billboard = ({ billboard }) => {
  const { id, title, created_at } = billboard;
  return (
    <>
      <h1>Billboard Component Here</h1>
      <h3>{title}</h3>
      <p>
        created: {created_at}, id: {id}
      </p>
      <a href="/">back</a>
      <br />
      <a href={`/subs/${id}/topics`}>topics</a>
    </>
  );
}

export default Billboard;