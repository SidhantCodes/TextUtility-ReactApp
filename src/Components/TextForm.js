import React, {useState} from 'react'

export default function TextForm(props) {
  // const wordCheck = (word) => {
  //   if(word.split(" ").length===0){
  //     return false
  //   }else{
  //     return true
  //   }
  // }
  const UpperCase = () => {
    console.log("Upper case was clicked.");
    setText(text.toUpperCase());
    props.showAlert("Converted to UPPER case", "success");
  }
  const LowerCase = () => {
    console.log("Lower case was clicked.");
    setText(text.toLowerCase());
    props.showAlert("Converted to lower case", "success");
  }
  const Clear = () => {
    setText("");
    props.showAlert("Cleared the text area", "success");
  }
  const CopyClip = () => {
    navigator.clipboard.writeText(text)
    props.showAlert("Copied to clipboard", "success");
  }
  const HandleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  }
  const [text, setText] = useState("");
  return (
    <>
    <div className='container'>
      <form>
        <h3>{props.title}</h3>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" value={text} onChange={HandleOnChange} rows={8} style={{backgroundColor: props.Mode==='dark'?'black':'white', color: props.Mode==='dark'?'white':'black' }}></textarea>
        </div>
        <button disabled={text.length===0} type='button' className="btn btn-outline-danger mx-2 my-1" onClick={UpperCase}>Convert to upper case</button>
        <button disabled={text.length===0} type='button' className="btn btn-outline-danger mx-2 my-1" onClick={LowerCase}>Convert to Lower case</button>
        <button disabled={text.length===0} type='button' className="btn btn-outline-danger mx-2 my-1" onClick={Clear}>Clear Text</button>
        <button disabled={text.length===0} type='button' className="btn btn-outline-danger mx-2 my-1" onClick={CopyClip}>Copy to Clipboard</button>
      </form>
    </div>
    <div className="container my-3">
      <h4>Your text summary: </h4>
      <p>word count: {text.split(" ").filter((element)=>{return element.length!==0}).length}</p>
      <p>Character count: {text.length}</p>
      <p>Time to read: {0.008 * (text.split(" ").length-1)}</p>
      <h4>Text preview: </h4>
      <p>{text.length>0?text:"Enter text to preview."}</p>
    </div>
    </>
  )
}

