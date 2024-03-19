import React,{useState} from 'react'
import "./style2.css"

const UseState = () => {
const initialValue=10;
const [value,setValue]=useState(initialValue)
  return (
    <>
    <div className="data"><p>{value}</p></div>
   <div className="centerDiv">
    <div className="bord"></div>
    <div className="button1 btn" onClick={()=>{setValue(value+1)}}>INCRE</div> {/*idr hum "value+1" iss lia kr rhay hai kiu ka wo variable hai jo hum usestate hook ka array ko destructure krnay ka bd mila hai and secondly that is the maintain state of func agar hum "initialValue" ma 1 plus krtay toh wo jab click krtay toh usme 1 plus hojyega but wo just 1 plus hoga agr hum chahtay hain ka infinite increment ho like 10 hai toh plus kia toh 11 hogya and then plus kia toh 12 hogya.wo iss lia nahi hoga initialValue ma kiu ka wo toh backend ma same hi rahegi na i mean to say that it is not changing its state uski agr initial value 10 hai toh wo jab hum 1 ka increment krenga toh wo srf waha pa huma show hogi otherwise wo backend ma "10" hi rahegi so jb ek dafa 1 plus kia toh wo "11" hogya phr jab hum uspa click krenga toh wo already backend ma 10 hai toh jab click hoga toh wo phr 11 hi hoja ga iss lia huma kuch response nhi milega*/}
    
    <div className="bord"></div>
    <div className="button2 btn" onClick={()=> value === 0 ? setValue(value):setValue(value-1)}>DECRE</div>
    
    </div>
    </>
  )
}

export default UseState;