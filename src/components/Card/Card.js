import React from 'react';
import './styles.scoped.css'

export default function Card(props) {
  const { counter, name } = props;
  return (
    <div className="card">
      <p>{name}</p>
      <div className={counter === 0 ? 'zero' : 'active'}>Owned: <p>{counter}</p></div>
    </div>
  );
}
