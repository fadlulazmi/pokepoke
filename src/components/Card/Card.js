import React from 'react';
import './styles.scoped.css'

export default function Card(props) {
  const { counter, name } = props;
  return (
    <div className="card">
      <p>{name}</p>
      <p>Owned: {counter}</p>
    </div>
  );
}
