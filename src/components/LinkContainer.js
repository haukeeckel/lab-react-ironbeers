import React from 'react';

function LinkContainer({ content }) {
  return (
    <div>
      <img src={content.img} alt="" />
      <h2>{content.heading}</h2>
      <p>{content.description}</p>
    </div>
  );
}

export default LinkContainer;
