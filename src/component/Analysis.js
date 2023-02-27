import React from 'react'

function Analysis(props) {
  return (
    <div className="container border " style={{width:'100%',height:'100%'}}>
            <h3>Analysis</h3>
            <ul>
                <li>Words : {props.text.trim().replace(/\s+/g, " ").split(' ').length}</li>
                <li>Letters : {props.text.length}</li>
            </ul>
    </div>
  )
}

export default Analysis