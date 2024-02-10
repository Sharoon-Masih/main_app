// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <h1>Hello Sharoon To ReactJs!</h1> 
//     </div>
//   )
// }

// export default App

// the above code which we write, So if in that code if we remove the "import React from 'react'" so it still work bcuz in react version 17.0 it is not mandotary to import 'react' package.

// How react actually works
// import React from 'react'

// const App=()=>{ //same name ka components nahi bnasktay like agar uper hum "App" ka name sa component bnaya hai or yeh be "App" ka name sa hai toh uncomment krenga toh it will give error.
  
//  return React.createElement("h1",{},"Hello World") //Now basically in backend react is working like this, its mean ka isme hum direct "JSX" return nahi krsktay.And secondly agar huma iss tarah sa react ma work krna hai toh phr "import React from 'react'" krna must hai chahay hum react version below 17.0 ma hon ya version 17.0 ya usse above version ma hon. Syntax:"createElement(html ELement name,property, value to display)"
// }

// export default App; 

// So in above code just we write one "h1" tag and for that we have to write a complex code if we want that "h1" tag into "div" so how it will be :
// import React from 'react'

// const App=()=>{ 
  
//  return React.createElement("div",{},React.createElement("h1",{},"Hello World")) //now we can see just for returning one div containing "h1", we have to write this complex code so thats why we will not recommend this way we use the way which we use in our first component "App" where we are returning "JSX".


// }

// export default App; 

// Rules for JSX

//1-return only single element
// function App(){
//   return (
//     <div><h1>Hello World</h1></div>
//     <p></p> //as "p" tag is 2nd element thats why it is giving error bcuz it only return single element,So to remove error we have to put "p" tag also inside "div"
//   )
// }

//2-use Div or React.Fragments to wrap all JSX code:

//wrapping JSX code using Div
// function App(){
//   return(
//     <div>
//       <h1>Hello Div</h1>
//       <p>I am Div1</p>
//     </div>
    
//     )
//   }
//   export default App;

//wrapping JSX code using React fragments
// import React from "react";

// function App(){ 
//   return(
//     <React.Fragment> 
//       <h1>Hello Fragments</h1>
//       <h2>Hello Fragments</h2>
//       <h3>Hello Fragments</h3>
//     </React.Fragment> //React Fragments is also working to wrap multiple elements or we can say whole "JSX" code inside single element that is "React Fragment" and then return it,But for this we have to must import "react" package.
//   )
// }
// export default App;

//wrapping JSX code using React fragments syntactic sugar.
// const App=()=>{
//   return(
//    <> 
//    <h1>Hello React Fragment syntactic sugar</h1>
//    </> //just writing these empty tag we can wrap all JSX code this is known as React Fragment syntactic sugar.And in this syntax we dont need "react" package to import.
//   )
  
// }
// export default App;

//3-use "className" instead of "class"
// const App=()=> {
//   return (              //remember agar hum "className" ki jaga "class" be use kreinga toh wo error nahi dega but good way is to write "className" keyword in place of "class".
//     <div className="box1"> 
//       <h1>I am Box1</h1>
//     </div>
//   )
// }
// export default App;

//4-close all non-closing tags in JSX
// const App= ()=> <img src="" alt="" ></img> //as we know "img" is self-closing tag in html,But in JSX we have put closing tag for "self-closing" element also.

// export default App;

//5-use "camelCase" format for writing attribute in html element.
// const App=()=> {
//   return(
//     <input type="" placeHolder=""></input> //use camelcase for the attribute which are combination of two words.like here we have "placeHolder".
//   )
// }

//what is nested components?

//Now here we have made two component in one file "App" and "MyNAme",so now i can handle these nested component simply,The component which is main component (main component wo hota hai jisko hum export default krtay hain kiu ka basically wohi component "index.js" ma import hota hai.or React ma it is not neccessary ka component ko export default hi krna hota hai we can do by named export also but then use named import for importing.),So jo dusra component bnayega unko simply call krdeinga ka main component may. 

// const App=()=>{       //now you can see below that simply i have call the "MyName" func component in "App".And when we call func component wobi tag ma hi call kreinga.And iss "MyName" component ko hum multiple time call krka use krsktay hain isi waja say hum kehta hain ka it follows the concept of "DRY" kay ek dafa ek content bnaya ab isko bar bar bnanay ki zarorat nahi.we can just simply call it. 
//   return (
//     <>
//     <h1>What is your name?</h1>
//      <MyName/> 
//     </>
//   )
// }

// export default App;

// const MyName=()=>{  
//   return (
//     <p>Sharoon</p>
//   )
// }

//Now creating first Restuarant project using React

import Restuarant from "./component/basics/restuarant";

import React from 'react'

const App = () => {
  return (
    <Restuarant/> 
  )
}

export default App;

