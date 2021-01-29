import React, { ChangeEvent, FormEvent, useState, useContext } from "react";
import { Link } from "react-router-dom";
import api from '../../../../services/api';

import "../../../../styles/global.css";
import "../../../../styles/pages/adminAcess.css";

import icon from "../../../../images/icon.svg";
import { FiArrowLeft } from "react-icons/fi";

import AuthContext from "../../../../context/AuthContext";

function AdminAcess() {
  const [getFormData, setFormData] = useState({
    UserName: '',
    Password: ''
  })

  const auth = useContext(AuthContext);
  console.log(auth);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value} = event.target;

    setFormData({
      ...getFormData,
      [ name ]: value,
    })
  }

  function handleSubmit(event: FormEvent){
    event.preventDefault();
    const { UserName, Password } = getFormData;

    let formData = new FormData();
    formData.append('UserName', UserName);
    formData.append('Password', Password);
    formData.append('city_id', "ba635d07-fe28-4789-92a7-5bfcc1c3759a");
    
    console.log(formData);

    api.post(process.env.REACT_APP_API_URL + 'sessions', formData)
    .then(response => {
      
    })
    
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
                <input type="text" name="UserName" id="UserName" placeholder="Nome de usuário"/>
                <input type="password" name="Password" id="Password" placeholder="Senha"/>
                <button className="sendButtonAdminAcess" type="submit" name="send" >Entrar</ button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminAcess;
