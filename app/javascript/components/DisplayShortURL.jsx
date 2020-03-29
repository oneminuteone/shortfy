import React, { useState } from 'react';

export const DisplayShortURL = props => { 
    const [copyShortURlText, setCopyShortURlText] = useState("Copy!");
    
    function copyURL() {
        var copyText = document.getElementById("copyShortURl");
        copyText.select();
        copyText.setSelectionRange(0, 99999); 
        document.execCommand("copy");
        setCopyShortURlText("Copied!")        
    }    

    return props.showURL ?
    (
        <div className="form">
            <input 
                type="url" 
                id="copyShortURl"
                name="copyShortURl"
                value={window.location.href + props.shortName}
                readOnly
            />
            <button onClick={copyURL} >{copyShortURlText}</button>
        </div>
    ) :
    null
};
