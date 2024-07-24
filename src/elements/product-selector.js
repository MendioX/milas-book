import Styles from '../styles/product-selector.module.css'
import React from "react"

const Selector = () => {

    return(
        <section className={Styles.mainSection}>

            <div className={Styles.mainContainer}>

                <div className={Styles.gridContainer}>
                    <div className={Styles.item} > Milanesa </div>
                    <div className={Styles.item} > Pizza </div>  
               </div>
            </div>

        </section>
    )
}

export default Selector