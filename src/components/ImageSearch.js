import React, { useState } from 'react';


const ImageSearch = ({ searchText }) => {

    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    }


  return (
    <div className="form-container">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text"
                placeholder='Search an Image Term...'
                value={text}
                onChange={(e) => setText(e.target.value)} />
                <button type="submit">search</button>
            </div>
        </form>
    </div>
  )
}

export default ImageSearch;