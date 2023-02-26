import React,{useState} from "react";


export default function TextForm(props) {

    const handleOnTextChange = (event)=>{
        setText(event.target.value);
    }
    const handleUpClick = ()=>{
        setText(text.toUpperCase());
    }
    const handleDownClick = ()=>{
        setText(text.toLowerCase());
    }

    const handlePreview = ()=>{
        if(previewBool){
            setPreviewText(text.substring(0,10));
        }else{
            setPreviewText(text);
        }
        setPreviewBool(!previewBool)
    }

    const toggleTheme = ()=>{
        if(myStyle.color=='white') setMyStyle({
            color: 'black',
            backgroundColor:'white'
        })
        else setMyStyle({
            color: 'white',
            backgroundColor: 'rgb(32,36,41)'        
        })
    }

    // UseStates
    const [text,setText] = useState('Enter Some Text'); 
    const [previewText,setPreviewText] = useState(text.substring(0,10)); 
    const [previewBool,setPreviewBool] = useState(false); 
    const [myStyle,setMyStyle] = useState({
                                    color: 'white',
                                    backgroundColor: 'rgb(32,36,41)'
                                });


    return (
        <div className="container mt-5 p-3 px-5 rounded" style={myStyle}>

            <div className="d-flex justify-content-end">
                <svg xmlns="http://www.w3.org/2000/svg" onClick={toggleTheme} width="25" height="25" fill="currentColor" class="bi bi-moon-stars" viewBox="0 0 16 16">
                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
                    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
                </svg>
            </div >


                {/* Heading */}
                <h1>{props.heading}</h1>
                
                {/* TextArea */}
                <div className="row">
                    <div className="col-8">
                        <textarea className="form-control" placeholder="Leave a comment here" rows={8} onChange={handleOnTextChange} value={text} id="floatingTextarea">
                            
                        </textarea>
                    </div>
                    <div className="col-4">
                        <div className="container border " style={{width:'100%',height:'100%'}}>
                            <h3>Analysis</h3>
                            <ul>
                                <li>Words : {text.split(' ').length}</li>
                                <li>Letters : {text.length}</li>
                            </ul>
                        </div>
                    </div>
                </div>


                {/* Buttons */}
                <button className="btn btn-success m-3" onClick={handleUpClick}>To Upper Case</button>
                <button className="btn btn-success m-3" onClick={handleDownClick}>To Lower Case</button>


                {/* Preview */}
                <h2>Preview</h2>
                <p>{previewText}
                    <a href="#" className="mx-5" onClick={handlePreview}>{previewBool?'read less':'read more'}</a>
                </p>
        </div>
    );
}

