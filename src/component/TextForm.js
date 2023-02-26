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


    const [text,setText] = useState('Enter Some Text'); 
    const [previewText,setPreviewText] = useState(text.substring(0,10)); 
    const [previewBool,setPreviewBool] = useState(false); 
    return (
        <div className="container mt-5">
                <h1>{props.heading}</h1>
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
                {/* <label htmlFor="floatingTextarea">Comments</label> */}
                <button className="btn btn-success m-3" onClick={handleUpClick}>To Upper Case</button>
                <button className="btn btn-success m-3" onClick={handleDownClick}>To Lower Case</button>


                <h2>Preview</h2>
                <p>{previewText}
                    <a href="#" className="mx-5" onClick={handlePreview}>{previewBool?'read less':'read more'}</a>
                </p>
        </div>
    );
}

