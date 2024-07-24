import Style from '../styles/header.module.css'
import React from "react"

const Header = () => {

    return(
        <header className={Style.headerMain}>
            <h2 className={Style.title}> Titulo default  </h2> 
       </header>
    )
}

export default Header