import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to UpperCase", "success");
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted to LowerCase", "success");
  }

  const handleClClick = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Cleared", "success");
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    navigator.clipboard.writeText(text.value);
    newCopy('Copied');
    props.showAlert("Text Copied", "success");
    setTimeout(() => {
      newCopy('Copy text');
    }, 1000); 
  }

  const [text, setText] = useState('');
  const [copy, newCopy] = useState('Copy text');

  return (
    <>
    <div style={{color: props.mode==='dark' ? 'white' : 'black'}} className="container">
        <h1 className="my-4">{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light' ? 'white' : 'grey' , color: props.mode==='light' ? 'black' : 'white'}} id="myBox" rows="4"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClClick}>Clear text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>{copy}</button>
    </div>
    <div style={{color: props.mode==='dark' ? 'white' : 'black'}} className="container my-4">
      <h1>Your text summary:</h1>
      <p><b>{(text.split(" ").filter((element) => {return element.length!==0})).length}</b> words and <b>{text.length}</b> characters</p>
      <p>It'll take on an average <b>{0.008*text.split(" ").length}</b> minutes to read the above passage.</p>
      <h2>Preview:</h2>
      <p>{text.length>0?text:"Enter something to preview it"}</p>
    </div>
    </>
  )
}
