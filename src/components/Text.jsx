import React, {useState} from 'react';

const Text = () => {

    const [text, setText] = useState('Default text');


    return (
        <div>
            <h1>{text}</h1>
            <textarea value={text}
                      onChange={event => setText(event.target.value)}/>

        </div>
    );
};

export default Text;