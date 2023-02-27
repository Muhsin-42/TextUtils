import React,{useState} from "react";
import Analysis from "./Analysis";

export default function TextForm(props) {

    const handleOnTextChange = (event)=>{
        setText(event.target.value);
    }
    const handleUpClick = ()=>{
        setText(text.toUpperCase());
        props.showAlert('converted to upper case','success')
    }
    const handleDownClick = ()=>{
        setText(text.toLowerCase());
        props.showAlert('converted to Lower case','success')
    }

    const handlePreview = ()=>{
        if(previewBool){
            setPreviewText(text.substring(0,10));
        }else{
            setPreviewText(text);
        }
        setPreviewBool(!previewBool)
    }


    // UseStates
    const [text,setText] = useState('Enter Some Text'); 
    const [previewText,setPreviewText] = useState(text.substring(0,10)); 
    const [previewBool,setPreviewBool] = useState(false); 
    // const [myStyle,setMyStyle] = useState({
    //                                 color: 'white',
    //                                 backgroundColor: 'rgb(32,36,41)'
    //                             });


    return (

        <div className={`container shadow-lg mt-5 p-3 px-5 bg-${props.mode} text-${props.mode=='light'?'dark':'light'} rounded`} >

                {/* Heading */}
                <h1>{props.heading}</h1>
                
                {/* TextArea */}
                <div className="row">
                    <div className="col-8">
                        <textarea onChange={handleOnTextChange} className="form-control" placeholder="Leave a comment here" rows={8}  value={text} id="floatingTextarea"></textarea>
                    </div>
                    <div className="col-4">
                        <Analysis text = {text}></Analysis>
                        {/* <div className="container border " style={{width:'100%',height:'100%'}}>
                            <h3>Analysis</h3>
                            <ul>
                                <li>Words : {text.split(' ').length}</li>
                                <li>Letters : {text.length}</li>
                            </ul>
                        </div> */}
                    </div>
                </div>


                {/* Buttons */}
                <button onClick={handleUpClick} className="btn btn-success m-3" >To Upper Case</button>
                <button onClick={handleDownClick} className="btn btn-success m-3" >To Lower Case</button>


                {/* Preview */}
                <h2>Preview</h2>
                <p>{previewText}
                    <a href="#" className="mx-5" onClick={handlePreview}>{previewBool?'read less':'read more'}</a>
                </p>
        </div>
    );
}

