import React from "react";
import SederLogo from '../../assets/sederLogo.png'

const Empty = () => {
    return (
        <React.Fragment>
            <div className="sederEmpty">
                <div className="LogoContainer">
                    <img src={SederLogo} alt="..."  width="15%"/>
                </div>           
            </div>
            
        </React.Fragment>
    )
}

export default Empty