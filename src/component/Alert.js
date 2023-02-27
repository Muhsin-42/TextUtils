import React from 'react'

function Alert(props) {
  return (
    props.alert && // if only the props.alert exist then only the next will work 
    <div className={`m-2 alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.msg}</strong>
    </div>
  )
}

export default Alert