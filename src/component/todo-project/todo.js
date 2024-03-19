import React, { useEffect, useState } from 'react'
import "./style3.css"
import logo from "./imgs/check-list.png"
import ShowItem from './showItem'

const getLocalData = () => {
    const list = localStorage.getItem("Mytodolist") //jab hum ".getItem" ka method use krenga toh tab hi hum jab page ko refresh krenga toh uska bd be data mil payega warna jab be page reload hoga localstorage be refresh hojayega.
    if (list) {
        return list;
    }
    else {
        return [] //yeh isslia kia bcuz agar list empty hogi toh humara nicha jo "useState" hai usko be ek empty array hi pass hoga.
    }
}
const Todo = () => {
    const [inputData, SetinputData] = useState()
    const [item, Setitem] = useState(JSON.parse(getLocalData())) //yaha JSON.parse iss lia use kia kiu humara jo useState() hai usko hum ek object pass krna chah rahay hain.iss lia jab JSON.parse() krenga toh wo object dega. 
    const [isEdititem,SetisEdititem]=useState()
    const [togglebtn,Settogglebtn]=useState(false)
    function addItem() {
        if (!inputData) {
            alert("Please Fill input field")
        }
        else if(inputData && togglebtn)
        {
              Setitem(
              item.map((curItem)=>{
              if(curItem.id === isEdititem.id)
              {
                 return {...curItem,name:inputData} //yaha par basically "curItem" kiu ka iterate hota humara pss ek object aa raha hai toh yaha par hum ek new object return kr rhay hain jis may hum yeh keh rhay hain ka jisma hum spread operator ka through "...curItem" krka bta rhay hain ka "curItem" ma jo properties hain wo sab hi hongi or uska sth hum jo ek new object bna rahay hain usme ek property "name" ki add kr rhay hain,Ab hoga yeh ka as we know jo spread operator hota hai wo dekhta haka agar same property hon toh wo un dono ma say kisi ek ko lega.Toh jasa yaha par "curItem" mabi name property thi but jo same naam sa "name" property add ki usne uss property ko consider kia.Or jo new object humna return kia usme usne jo "curItem" object ma "id" ki property hai usko same hi rehna diya but jo name property thi uski jaga jo new "name" property add ki usko condsider kia.
              }
              else
               return curItem;
            }))
            Settogglebtn(false); //yaha humna jab ek dafa changing hojaye toh sab state wapis apni initialvalue pa ajye taka togglebtn change hokr waapis sa plus hojaye.
            SetinputData();
            SetisEdititem();
        }
        else {
            //i cannot not use ".indexOf" method with state in react component so thats why i will create an object which has "id" property
            const inputItem = {
                id: new Date().getSeconds().toString(), //now yaha humna ek trick use ki wo yeh ka unique id ka lia humna Date object ka use kia or usma getHour ka through id lali,now as we know time is always changing so thats why id will be unique and basically jo "getHours" ka last ma "seconds" hain wo change hotay rahegay.
                name: inputData
            }

            Setitem([...item, inputItem]); //yaha humna spread operator iss lia use kia hai bcuz hum chahtay hain ka jo already "item" ma element hain wo be rahay or jo new "inputData" hai wo be "item" ma set hojaye.
            SetinputData();//yeh yaha iss lia kia hai taka for e.g:humna bar ma value input ki usko as a todolist add krdia.then again without inputting data again hum add pa click krenga toh wo phr wohi hojayega halaka input kia nhi hoga again.So iss lia yaha "SetinputData" kia hai taka agar ek dafa data input ho then wo jasa hi add ho "item" array may,"inputData" be empty hojaye.
            //    localStorage.setItem("todo",JSON.stringify(item)) //agar hum yaha item add krenga localStorage ma toh msla yeh hoga ka kiu ka initially "item" empty hai.toh first jab hum kuch add krenga toh uss time pa "item" empty hi hoga so its mean ka "0" index pa kuch be nahi hoga or then "1" index pa current todo nahi store hogi balka jo last humna todo "item" array ma pass ki thi wo add hogi.so iss lia agar hum chatay hain ka jab jab "Item"  add hon sth hi sth wo local storage mabi add hota jaye thats why we are using "useEffect".  

        }
    }
    const Remove = (id) => {
        const updateditem = item.filter((curritem) => curritem.id !== id); //yaha humna yeh condition lgyi haka jis element ki id match nahi krega srf wohi updatedItem ma ayenga, or phr ussi updateitem ko return krdia.so its obvious ka jis ko hum delete krenga usko chorka baki sb updateditem ajayega or phr wohi element return hojayega.
        return Setitem(updateditem);
    }
    const RemoveAll = () => {
        if (item.length === 0) {
            alert("Empty Todo List")
        }
        else {
            const Notodo = []
            Setitem(Notodo)
        }
    }
    // now to add list to localstorage we use "useEffect" hook bcuz it will work like jab jab humara todolist ma add hoga tab tab wo item add krega.
    useEffect(() => {
        localStorage.setItem("Mytodolist", JSON.stringify(item)) //localStorage ma jo "setItem" method hai wo srf string hi lega iss lia huma usko JSON.stringify ka through string ma change krna hoga.agar hum "toString" use krenga toh wo nahi krega convert bcuz "toString" hum JS ki file ma changes krna ka lia use krtay hai but jab data local storage ko jayega toh wo JSON format ma hi jayega toh iss lia humna usko .stringify ka through kia or agar dekha jaye toh data "key:value" pair ma jaa raha hai.
    }, [item])

    //edit the item
    const editItem = (id) => {
        const editedItem= item.find((currItem)=>{
            return currItem.id === id;
        })
        SetisEdititem(editedItem);
        SetinputData(editedItem.name); //yaha "inputData" ko iss lia yeh "name" assign kr rhay hai taka jasa hi edit btn pa click ho toh jo humara "bar" hai usme yeh "name" appear hojaye.Wo iss tarah sa hoga ka basically "bar" ma hum jo be type krtay hai wo "inputData" ma jata hai, toh ab zahir hai yaha jo be hum "inputData" may set krenga wohi "bar" mabi appear hoga 
        Settogglebtn(true);//or yaha yeh iss lia set kia hai taka jab be "edit" pa click hoga tab hi "bar" mabi plus button ki jaga edit btn show hoga.

    }
    return (
        <>
            <div className='main_div'>
                <div className="todologo">
                    <figure>
                        <img src={logo} alt="todologo" className='logo' />
                        <figcaption className='caption'>Your Todo List</figcaption>
                    </figure>
                </div>
                <div className="search">
                    <input type="text" placeholder="📝Add item" className='bar' value={inputData} onChange={(event) => {
                        SetinputData(event.target.value)
                    }} />
                    {
                        togglebtn ? <i className="fas fa-edit plus" onClick={addItem}></i>:<i className="fas fa-plus plus" onClick={addItem}></i>
                    }
                    
                </div>
                <ShowItem itemData={item} toRemove={Remove} editItem={editItem}/>
                <div>
                    <div className="check btnEffect">
                        <button type='button' className='btn' onClick={RemoveAll} >Check List <i className="fas fa-check-circle"></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;