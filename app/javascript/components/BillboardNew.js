import React from 'react';

const BillboardNew = ({ billboard }) => {
 
  const { title, details } = billboard
  const defaultTitle = title ? title : ""
  
  return(
    <>
      <h1>New Billboard</h1>
      <form action="/billboards" method="post">
        <input 
          placeholder="Title"
          type="text"
          defaultValue={defaultTitle}
          name="billboard[title]"
        />
         
        <button type="submit">Add</button>
      </form>
    </>
  )
}
export default BillboardNew;