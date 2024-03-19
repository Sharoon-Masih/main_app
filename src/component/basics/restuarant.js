
import React, { useState } from 'react'
import "./style.css"; 
import "./responsive.css";
// import images from "./imgs/kaushal-premlani-778v4yb3G8s-unsplash.jpg"
import menuApi from "./menuApi"
import NavBar from './navBar';
import MenuCard from "./MenuCard"


const updateCategory=()=>{
  const updated=[...new Set (menuApi.map((currCate)=> //yaha "new Set" ka structure es2019 ma intoduce hai joka huma jo same data hota hai array ma usko filter krka return krta hai or basically yeh ek object ki form ma return krega values toh usko pure array element bnanay ka lia "new Set" ko humna array ma store kia and then uska sath "..." spread operator lgadia toh usne object ko iterate krka array ma as a pure element store krdia.
  currCate.category)),"all"]
  return updated;
}

const Restuarant = () => {
  const [menu,Setmenu]=useState(menuApi)
  const [item,SetItem]=useState(updateCategory)
  
  const filterItem=(category)=>{
    if(category === "all")
    {
      return Setmenu(menuApi)
     
    }
    const updatedArr=menuApi.filter((currItem)=> {
      
      return currItem.category === category;
    })
    
    Setmenu(updatedArr)
  }
  
  // const load=()=>{
  //   return <div className="progressBar"></div>
  // }
  // console.log(updateCategory());
  return (
    <>
   <div className="progressBar"></div>
   
    <NavBar filterItem={filterItem} NavData={item} NewNavData={SetItem}/>
    <MenuCard menuData={menu}/> {/*Now remember yaha jasa humna "menuData" prop ma "menu" variable ko assign kia hai jo hum na uper array destructuring krtay huwa bnaya tha but agar hum ab jasa uper jahan button ma agar user click kray "all" pa toh pura menu nazar ayy toh agar hum yeh krnay ka lia "onClick" ma "Menucard" wala func pass krwday like: MenuCard(menu) toh error ayega bcuz as we know that jo "usestate* hook first value deti hai wo initial hoti hai toh first time toh wo render krdega but bd ma error ayega bcuz once render honay ka bd server down hojata hai. */}

    </>
  )
}
//now for adding i will make a folder inside parent folder then paste in image in it and then import that image in JS file,this tells webpack that this image will be use in this JS file.
export default Restuarant;