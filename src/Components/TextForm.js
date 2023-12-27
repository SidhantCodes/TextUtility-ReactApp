import React, {useState} from 'react'

export default function TextForm(props) {
  const UpperCase = () => {
    console.log("Upper case was clicked.");
    setText(text.toUpperCase());
  }
  const LowerCase = () => {
    console.log("Lower case was clicked.");
    setText(text.toLowerCase());
  }
  const Clear = () => {
    setText("");
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
          <textarea className="form-control" id="myBox" value={text} onChange={HandleOnChange} rows={8}></textarea>
        </div>
        <button type='button' className="btn btn-outline-danger" onClick={UpperCase}>Convert to upper case</button>
        <button type='button' className="btn btn-outline-danger mx-2" onClick={LowerCase}>Convert to Lower case</button>
        <button type='button' className="btn btn-outline-danger mx-2" onClick={Clear}>Clear Text</button>
      </form>
    </div>
    <div className="container my-3">
      <h4>Your text summary: </h4>
      <p>word count: {text.split(" ").length - 1}</p>
      <p>Character count: {text.length}</p>
      <p>Time to read: {0.008 * (text.split(" ").length-1)}</p>
      <h4>Text preview: </h4>
      <p>{text}</p>
    </div>
    </>
  )
}

