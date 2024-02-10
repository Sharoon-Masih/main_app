import React from 'react'
import "./style.css"

const NavBar = ({ filterItem, NavData }) => {
    //    const [menu,Setmenu]=useState(menuApi)
    return (
        <>
            <header>
                <nav>
                    <div className="barContainer">
                        <div className="bar">
                            <div className="items">
                                {NavData.map((currItem) => {
                                    return (
                                        <>
                                            <div className="item1 item"><button className='btn' onClick={() => { filterItem(currItem) }} >{currItem}</button></div>

                                        </>)
                                })}
                                {/* <div className="item5 item"><button className='btn' onClick={() => { Setmenu(menu) }}>all</button></div> */}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavBar;