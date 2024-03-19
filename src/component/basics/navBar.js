import React from 'react'
import "./style.css";
import "./responsive.css";


const NavBar = ({ filterItem, NavData }) => {
    //    const [menu,Setmenu]=useState(menuApi)
    return (
        <>
            <header>
                <nav>
                    <div className="barContainer">
                        <div className="bar">

                                {NavData.map((currItem) => {
                                    return (
                                        <>
                                            <div className="item1 item"><button className='btn' onClick={() => { filterItem(currItem) }} >{currItem}</button></div>

                                        </>)
                                })}
                                {/* <div className="item5 item"><button className='btn' onClick={() => { Setmenu(menu) }}>all</button></div> */}
                            </div>
                        </div>
                </nav>
            </header>
        </>
    )
}

export default NavBar;