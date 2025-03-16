import Note from "./Note";

function NoteSec(props){
   


    return <div className="note-sec">
        {props.infoArr.map((info,index)=>{
            return <Note title={info[0]} content={info[1]} key={index} deleteNote={props.deleteNote} 
                toDeleteKey={index}
            />
        })}
        
    </div>
}

export default NoteSec;