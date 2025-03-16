
import { useState } from 'react';

import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';

function InputArea(props){

    const [isExpanded,setisExpanded]=useState(false);
    
    function expand(){
        setisExpanded(true);
    }

    return <div className="form">

        {isExpanded && <input type="text" className="text-input" placeholder="Title" value={props.info[0]}
        onChange={(event)=>{
            props.handleInfo(event,0);
            
        }}
        ></input>}

        <textarea type="text" className="content-input" placeholder="Take a Note..." rows="1" onClick={expand} value={props.info[1]}
        onChange={(event)=>{
            props.handleInfo(event,1);
            
        }}
        ></textarea>
        <Zoom in={isExpanded}>        
        <Fab size="small" onClick={()=>{
            props.addToInfoArr();
        }}>ADD</Fab>
        </Zoom>

    </div>
}



export default InputArea;