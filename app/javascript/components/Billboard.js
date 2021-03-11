import React from "react";

const Billboard = ({ billboard }) => {
  const { id, title, created_at } = billboard;
  return (
    <>
      <h1>Billboard {title}</h1>
      <h3>{title}</h3>
      <p>
        created: {created_at}, id: {id}
      </p>
      <a href="/billboards">back</a>
      <br />
      <a href={`/billboards/${id}/artists`}>Artists</a>
    </>
  );
}

export default Billboard;