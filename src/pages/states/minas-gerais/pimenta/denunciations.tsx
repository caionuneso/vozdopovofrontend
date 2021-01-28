import React from "react";
import { Link } from "react-router-dom";

import "../../../../styles/global.css";
import "../../../../styles/pages/denunciations.css";

import icon from "../../../../images/icon.svg";

import { FiArrowLeft } from "react-icons/fi";


function denunciations() {
  return (
    <div id="page-denunciations">
      <div className="spaceLogo">
        <div className="logo">
          <img src={icon} alt="icon" />
          <h2>Voz do povo</h2>
        </div>
      </div>
      <div className="content-wrapper">
        <header>
          <div className="tolbarDenunciations">
            <h1>Efetuar denúncias</h1>
            <Link to="/mg/pimenta/">
              <FiArrowLeft size={15} /> clique para voltar
            </Link>
          </div>
        </header>
        <main>
          <div className="buttonChoice">
            <Link to="/mg/pimenta/report">Anonimato</Link>
            <Link className="buttonGenerate" to="/mg/pimenta/generateProtocol">Sujeito Identificado</Link>
          </div>
          <div className="alert">
            <p>
            As manifestações registradas de maneira anônima são consideradas “Comunicações” e não é possível o seu acompanhamento. Caso deseje acompanhar o andamento da sua manifestação e receber uma resposta do órgão ou entidade, por favor identifique-se.{" "}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default denunciations;
