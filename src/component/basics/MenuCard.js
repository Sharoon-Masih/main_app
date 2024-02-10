import React from 'react'
import "./style.css"

const MenuCard = ({ menuData }) => { //Now mena simply jo prop bnaya tha jab MenuCard ko call kia tha "restuarant.js" ussi ko hi yaha mena jis name sa prop bnaya tha ussi name sa as a argument pass krdia. 

    return (
        <>
            <div className='Card-Container'>
                {menuData.map((element) => {
                    const {id,category,name,description,image,price}=element; //now yaha humna jo humna object mil rha hai after iterating "menuData" usko destructure krdia or property ka against ek variable bnadia or then phr simply un variables ko nicha code ma humna use krdia isse humara code neat and clean hogya.
                    return (
                          <>
                        <div className="card" key={id}>
                            <div className="cardBody">
                                <div className="card-Num title card-circle"><p>{id}</p></div>
                                <div className="card-author"><p>{category}</p></div>
                                <div className="card-Food"><h1>{name}</h1></div>
                                <div className="card-des">{description}</div>
                                <div className="card-lineBreak"><hr /></div>
                                <div className="card-read"><p>Read</p></div>
                                <div className="card-img"><img src={image} alt={element.name} title={element.name} /></div> 
                                <div className="card-price"><p>Price:{price}</p></div>
                                <div className="card-tag"><button type='button'>Order Now</button></div>


                            </div>

                        </div>
                        </>)

                })}

            </div>
            <footer>
                <div className="foot">
                    <div className="footbar"></div>
                </div>
            </footer>
        </>
    )
}

export default MenuCard