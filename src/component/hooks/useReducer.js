import React,{useReducer} from 'react'
import "./style2.css";

const reducer=(state,action)=>{
if (action.type === "incre")
{
   return state+=1; //remember agr hum return krenga toh action display hoga warna kuch be nahi ayega bcuz zahir hai jab function kuch return hi nhi krega toh display kya hoga.
}
else if(action.type === "decre")
{
   return state-=1;
}
return state;  //yeh return iss lia kia taka ka agr uper ki dono conditioin false ho toh state ki current value return hojaye.
}
const UseReducer = () => {
    const initialValue=10;
    const [state,dispatch]=useReducer(reducer,initialValue)
      return (
        <>
        <div className="data"><p>{state}</p></div>
       <div className="centerDiv">
        <div className="bord"></div>
        <div className="button1 btn" onClick={()=>{dispatch({type:"incre"})}}>INCRE</div> 
        
        <div className="bord"></div>
        <div className="button2 btn" onClick={()=> state > 0 ? dispatch({type:"decre"}):state}>DECRE</div>
        
        </div>
        </>
      )
}

export default UseReducer;