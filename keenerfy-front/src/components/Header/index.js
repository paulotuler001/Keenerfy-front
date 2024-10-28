import React from 'react';
import { useLocation } from 'react-router-dom'
import ButtonHeader from "../ButtonHeader";
import "./Header.css";
import { useContext } from 'react';
import { Context } from '../../Context/AuthContext';

function Header(props) {
    
    const location = useLocation() 
    const { handleLogout, userName } = useContext(Context)

  return (
    <div className="container-header">
      <header>
        <div id="img-container">
          <img src="/images/keener.fy.svg" alt="icon from header of the page" />
        </div>
        <div id="options-container">
          <ButtonHeader
            name="HOME"
            path="/home"
            isActive={location.pathname === "/home"}
          />

          <ButtonHeader
            name="MY PURCHASES"
            path="/my-purchases"
            isActive={location.pathname === "/my-purchases"}
          />

          <ButtonHeader
            name="NEW PRODUCT"
            path="/new-product"
            isActive={location.pathname === "/new-product"}
          />

          <ButtonHeader
            name="SALES"
            path="/sales"
            isActive={location.pathname === "/sales"}
          />
          <ButtonHeader
            name="PURCHASE ORDER"
            path="/purchase-order"
            isActive={location.pathname === "/purchase-order"}
          />

          <ButtonHeader
            name="STOCK"
            path="/stock"
            isActive={location.pathname === "/stock"}
          />

        </div>
        <div id="user-container">
          <div>
            <i className="fas fa-user"></i>
            <p>{userName ?? "disconnected"}</p>
          </div>
            <button id="sign-out-btn" onClick={handleLogout}><i className="fas fa-sign-out"></i></button>
        </div>
      </header>
    </div>
  );
}

export default Header;
