import React from 'react'

function About(props) {
  return (
    <>
        <div className={`my-5 container text-${props.mode=='light'?'dark':'light'} `} style={{textAlign: 'justify'}}>
            <h1>About Text Utils</h1>
            <p>Section headers are an important element of any document or webpage, as they help to organize information and make it easier for readers to navigate. There are many different types of section headers, each with its own purpose and style.
<br />
One common type of section header is the "Introduction," which is typically used at the beginning of a document to provide an overview of the topic and set the tone for the rest of the content. Other common section headers include "Methodology," "Results," and "Conclusion," which are often used in academic research papers to structure the presentation of data and analysis.</p>
        </div>
    </>
  )
}

export default About