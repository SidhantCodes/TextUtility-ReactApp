import React from 'react'

export default function Alert(props) {
  const caps = (word) => {
    const w = word.toLowerCase();
    return w.charAt(0).toUpperCase() + w.slice(1);
  }
  return (
    <div style={{height: '50px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong> {caps(props.alert.type)}: </strong>{props.alert.msg}
      </div>}
    </div>
    
  )
}
