import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
    const [text, setText] = useState('');

    const handleTextChange = ({target}) => {
        setText(target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        if(text === ''){return};
        
        const thought = {
            id: generateId(),
            text,
            expiresAt: getNewExpirationTime()
        };
        props.addThought(thought);
        setText('');

    }
  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={handleTextChange}
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add" />
    </form>
  );
}
