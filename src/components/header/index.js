import React from "react";
import './styles.scss';
import logo from '../../assets/graphics/logo.png'

const Header = (props) => {
    return (
        <header  data-test="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <img src={logo} alt="logo" data-test="logoImg"/>
                </div>
            </div>
        </header>
    )
}
export default Header