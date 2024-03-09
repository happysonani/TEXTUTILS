import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick = () =>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase! ", " success ");
    }

    const handleLoClick = () =>{
        //console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase! ", " success ");
}
    const handleClearClick = () =>{
        //console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared! ", " success ");
    }
    
    const handelOnChange = (event) =>{
        console.log("On Change");
        setText(event.target.value)
        props.showAlert("Text Changed! ", " success ");
    }

    const handleCopy = () =>{
        console.log("I am copy");
         var text = document.getElementById("myBox");
         text.select();
         navigator.clipboard.writeText(text.value);
         props.showAlert("Copied to Clipboard ", " success ");
    }
    
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces! ", " success ");
    }
    const [text, setText] = useState("");
    //text ="new text" // wrong way to change state
    //setText("new text"); //correct way to change the state
  return (
    <>
    <div className='container' style={{color: props.mode ==='dark' ? 'white' : '#042743'}}>
        <h1 className="mb-2">{props.heading} </h1>
        <div className="mb-3">
        <textarea className='form-control' value={text} onChange={handelOnChange} style={{backgroundColor: props.mode ==='dark' ? '#13466e' : 'white', color:props.mode ==='dark' ? 'white' : '#042743'}} id='myBox' rows="8">
        </textarea>
        </div>
    <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to upper case</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lower case</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}> ClearText</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}> Copy Text</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3"  style={{color: props.mode ==='dark' ? 'white' : '#042743'}}> 
        <h2> Your text summary</h2>
        <p>{text.split(" ").filter((element) =>{return element.length!==0}).length} words and {text.length} character  </p>
        <p>{0.008 * text.split(" ").filter((element) =>{return element.length!==0}).length } Minutes read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Enter something in the textabove to preview it here"}</p>
    </div>
    </>
  )
}
