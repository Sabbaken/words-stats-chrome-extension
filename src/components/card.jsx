import React from 'react';

const Card = ({ children, title }) => (
  <div className="card">
    {title && <p className="card__header">{title}</p>}
    {children}
  </div>
);

export default Card;
