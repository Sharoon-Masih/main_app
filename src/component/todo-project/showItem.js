import React from 'react'

const ShowItem = ({itemData,toRemove,editItem}) => {
    return(
        <>
    {itemData.map((currItem,index)=>{
        return (
            <>
        
            <div className="showItems">
            <div className="eachItem" key={index}> {/*yaha "key" prop iss lia diya hai taka har item ko ek uska index as a key assign hojaye. */}
               {currItem.name}
            </div>
            <div className="btn1">
                <i className="fas fa-edit logo1" onClick={()=>{editItem(currItem.id)}}></i>
                <i className="fas fa-trash logo2" onClick={()=>{toRemove(currItem.id)}}></i>
            </div>
            </div>
            </>
          )
    })}
    </>
    )
}

export default ShowItem;