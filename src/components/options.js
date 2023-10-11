import React, { Component } from 'react';
import { useState } from "react";
import {AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import {DiGithubBadge } from 'react-icons/di';

class Options extends Component {
  constructor() {
    super();
    this.state = {
      quadroVisivel: null,
    };
  }

  mostrarOpcao = (opcao) => {
    // Esconda o quadro atualmente visível (se houver um)
    if (this.state.opcao !== null) {
      this.setState({ opcao: null });
    }

    // Mostre o novo quadro
    this.setState({ opcao: opcao });
  };

  render() {
    const { opcao } = this.state;

    return (
      <div>
        <button className='projeto' onClick={() => this.mostrarOpcao('projetos')}>Projetos</button>
        <button className='about' onClick={() => this.mostrarOpcao('sobremim')}>Sobre Mim</button>
        <button className='contatos' onClick={() => this.mostrarOpcao('contatos')}>Contatos</button>

        {opcao === 'projetos' && (
          <div className='viewtemplates'>
             <section>
              <div className='tmp2'>
              <a href="https://idisk.netlify.app/" className="idisk">
              </a> 
              <div className='tmp1'>
              <a href="https://mytemplateodevpablo.netlify.app/" className="advtemplate">
              </a>
              </div>
              <div className="tmp3">
                <a href="" className="thevibes">
                </a>
              </div>
              <div className="model1">
                <a href="" className="">
                </a>
              </div>
              <div className="model2">
                <a href="" className="">
                </a>
              </div>
              <div className="model3">
                <a href="" className="">
                </a>
              </div>
              <div className="model4">
                <a href="" className="">
                </a>
              </div>
              <div className="model5">
                <a href="" className="">
                </a>
              </div>
              <div className="model6">
                <a href="" className="">
                </a>
              </div>
              </div>
            </section>
          </div>
        )}
        {opcao === 'sobremim' && (
          <div className='viewabout'>
            <a className='descricao'>
              Estou quase terminando minha graduação em Análise e Desenvolvimento de Sistemas, com foco principal nas linguagens de programação front-end. 
              Tenho experiência no uso do React.js e Spring, incluindo a criação de rotas com o Symfony. 
              Além disso, possuo um bom conhecimento em SQL e Spring Boot.</a>
            <a className='formacao'> 
            <a>Formação:</a>
            <br/>
            Análise e Desenvolvimento de Sistemas - Superior Tecnólogo
            Duração: 5 semestres
            Instituição: Centro Universitário Internacional - UNINTER - Polo Montes Claros
            <br/>Conclusão: 2º Semestre de 2023
            </a>
          </div>
        )}
        {opcao === 'contatos' && (
          <div className='viewcontatos'>
             <div className='git'>
                <a href="https://github.com/odevpablo"><DiGithubBadge  size={48} id='git'/></a>
              </div>
             <div className='lk'>
               <a href='https://www.linkedin.com/in/pablo-oliveira-7a32591b5/'><AiFillLinkedin size={40} id='lk'/></a>
              </div>
              <div className='st'>
                <a href='https://www.instagram.com/odevpablo/'><AiFillInstagram size={39} id='st'/></a>
             </div>           
          </div>
        )}
      </div>
    );
  }
}

export default Options;