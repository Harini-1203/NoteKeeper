import { useState } from 'react';

import Header from './Header';
import Footer from './Footer';
import InputArea from './InputArea';
import Note from './NotesSection/Note';

import NoteSec from './NotesSection/NoteSec';


function App(){

    const [info,setInfo]=useState(["",""]);
    const [infoArr,setInfoArr]=useState([]);


    function handleInfo(event,index){
        var text=event.target.value;
        setInfo((prev)=>{
            
            if(index===0){
                return [text,prev[1]];
            }
            else{
                return [prev[0],text];
            } 
            
        });
        
    }
    
    function addToInfoArr(event){
        
        setInfoArr((prev)=>{
            
            return (
                [...prev,info]
            );
        });
        setInfo(["",""]);
        
    }

    function deleteNote(index){
        console.log(index);
        setInfoArr((prev)=>{
            return prev.filter((item,i)=>{
                return index!==i;
            })
        })
    }

    return <div>
        <Header></Header>
        <InputArea handleInfo={handleInfo} addToInfoArr={addToInfoArr} info={info}></InputArea>
        <NoteSec infoArr={infoArr} deleteNote={deleteNote}/>
        
        <Footer />
    </div>
}

export default App;