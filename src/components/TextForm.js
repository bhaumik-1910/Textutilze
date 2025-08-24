// use mens--hooks
import React, { useState } from 'react'


export default function TextForm(props) {

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    //convert to uppercase
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Convert to uppercase!", "success");
    }

    //convert to lowercase
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Convert to lowercase!", "success");
    }

    //clear to the contain
    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Clear to contain!", "success");
    }

    //copy to the contain
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Copy to contain!", "success");
    }

    //remove extra spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove extra spaces!", "success");
    }

    // ----------------------------------------
    //speak to the contain
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Spack to contain!" , "success");
    }
    // ----------------------------------------

    const [text, setText] = useState('');

    return (
        //isko bolte he fragment -> <></>
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 className='mb-2'>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'rgb(65 70 75)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p> <b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
                <p><b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Minutes read </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to Preview!"}</p>
            </div>

            {/* ------------------------------ */}
            <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
            {/* ------------------------------ */}

        </>
    )
}