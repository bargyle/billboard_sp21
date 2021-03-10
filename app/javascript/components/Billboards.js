import React from "react";

const url = "http://localhost:3000/billboards/";

const Billboards = ({ billboards }) => {
  return (
    <>
      <h1>Billboards Component Here</h1>
      <a href={ url + "new" }>add billboard</a>
      { subs.map((sub) => (
        <div>
          <h3>{sub.name}</h3>
          <a href={ url + billboard.id }>show</a>
          <a href={ url + billboard.id + '/edit' }>edit</a>
          <a
            href={ url + billboard.id }
            data-method="delete"
          >
            delete
          </a>
        </div>
      ))}
    </>
  )
}

export default Billboards;