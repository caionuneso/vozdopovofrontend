import React from "react";
import { Link } from "react-router-dom";

import "../../../../styles/global.css";
import "../../../../styles/pages/adminAcess.css";

import icon from "../../../../images/icon.svg";
import { FiArrowLeft } from "react-icons/fi";

const adminAcess: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }
  return (
    <div id="page-AdminAcess">
      <div className="spaceLogo">
        <div className="logo">
          <img src={icon} alt="icon" />
          <h2>Voz do povo</h2>
        </div>
      </div>
      <div className="content-wrapper">
        <header>
          <div className="tolbarLogin">
            <h1>Admin Acess</h1>
            <Link to="/mg/pimenta/">
              <FiArrowLeft size={15} /> clique para voltar
            </Link>
          </div>
        </header>
        <main>
          <div className="content">
            <div className="formGroup-Credentials">
              <form name="loginForm" id="login" onSubmit={handleSubmit}>
                <input type="text" name="UserName" placeholder="E-mail"/>
                <input type="password" name="Password" placeholder="Senha"/>
                <button className="sendButtonAdminAcess" type="submit" name="send" >Entrar</ button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default adminAcess;
