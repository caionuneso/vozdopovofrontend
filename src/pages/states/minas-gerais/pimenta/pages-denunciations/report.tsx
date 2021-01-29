import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from 'axios';
import FormData from 'form-data'
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../../../../services/api";

import swal from 'sweetalert';

import "../../../../../styles/pages/pages-denunciations/report.css";
import icon from "../../../../../images/icon.svg";

function Report() {
  const [files, setFile] = useState();
  const [getFormData, setFormData] = useState({
    description: ''
  })

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) =>{
    // console.log(event.target.name, event.target.value)
    const { name, value } = event.target;

    setFormData({
      ...getFormData,
      [ name ] : value,
    })
  }

  const handleInputFileChange = (e: any) =>{
      setFile(e.target.files)
  } 

  async function handleSubmit(event: FormEvent){
      event.preventDefault()
      console.log('Arquivo selecionado')
      const { description } = getFormData

      let formData = new FormData()
      const filesData:FileList = files as unknown as FileList;

      formData.append('description', description)
      for(var i = 0; i < filesData.length; i++){
        formData.append('file', filesData[i])
      }
      formData.append('city_id', "ba635d07-fe28-4789-92a7-5bfcc1c3759a")

      console.log(filesData);
      axios({
        url: process.env.REACT_APP_API_URL + 'denunciations',
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
        data: formData
      })
      .then(response =>{
        console.log(response.data)
        swal({
          title: "Bom trabalho!",
          text: "Você enviou sua denúncia!",
          icon: "success",
        });
      })
      .catch(error =>{
        console.error('Erro capturado: ' + error)
      })
  }


  return (
    <div id="page-report">
      <header className="page-header">
        <img src={icon} alt="icon" />
        <h2>Voz do povo</h2>
      </header>
      <main>
        <form id="formReport" onSubmit={handleSubmit}>
          <h1>Descreva aqui</h1>
          <Link to="/mg/pimenta/denunciations">
            <FiArrowLeft size={15} /> clique para voltar
          </Link>
          <p>
            Descreva abaixo o conteúdo de sua manifestação. Seja claro e
            objetivo. Informações pessoais, inclusive identificação, não devem
            ser inseridas a não ser que sejam essenciais para a caracterização
            da manifestação.
          </p>
          <textarea id="description" name="description" onChange={handleInputChange} />
          <input multiple type="file" id="files" name="files" onChange={handleInputFileChange} />
          <button id="buttonReport" type="submit" value="Enviar Memória">
            Enviar
          </button>
        </form>
      </main>
    </div>
  );
};

export default Report;
