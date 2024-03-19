//basically useEffect hooks are the hook which allow you to perform any functionality after you render your webpage on browser.

import React,{useEffect,useState} from 'react'
import "./style2.css"

const UseEffect = () => {
    const initialValue=10;
    const [value,setValue]=useState(initialValue)
    useEffect(()=>{
        document.title=`chat(${value})` //this change the title of document to "chat(no of chats)" it is like jasa hum whatsapp pa dekhtay hain jab hum msg seen nahi krtay toh uper humara pss number of chats show hotay hain ka kitnay msgs agye hain.toh yaha par be useEffect hook iss tarah work kr rhay hai ka page ka render honay ka bd usme jo be update ayegi usko show krta rahega.
    },[value])//now this useEffect is depended on "value",bcuz jab jab value change hogi "useEffect" render hoga agr ma yaha dependency na be lgao toh phr be proper work krega bcuz apna code ma nicha humna yeh define kia haka jab be "incre" ho tab 1 add ho.
      return (
        <>
        <div className="data"><p>{value}</p></div>
        <div className="centerDiv">
        <div className="bord"></div>
        <div className="button1 btn" onClick={()=>{setValue(value+1)}}>INCRE</div> 
        </div>
        </>
      )
}

export default UseEffect