import React from 'react';

export default function Score(props) {
    const { name, score} = props;
    return (
      <span className="text-light">
          <strong>{ name }</strong>: { score }
      </span>
    )
}