import React, { Component } from 'react';
import { useState } from "react";
import {AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import {DiGithubBadge } from 'react-icons/di';

import Effect from './mouseenter';



class DivSpan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spanVisible: false,
    };
  }

  handleDivClick = () => {
    this.setState({ spanVisible: !this.state.spanVisible });
  };

  render() {
    const spanContent = this.state.spanVisible ? (
      <a href={this.props.link}>{this.props.spanContent}</a>
    ) : null;

    return (
      <div onClick={this.handleDivClick} className={this.props.className}>
        {spanContent}
        {this.props.children}
      </div>
    );
  }
}

class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quadroVisivel: null,
      spanVisible: false,

    };
    
  } 
   handleDivClick = () => {
    this.setState({ spanVisible: !this.state.spanVisible });
  };


 
  handleMouseEnter = () => {
    this.setState({ mouseHover: true });
  };

  handleMouseLeave = () => {
    this.setState({ mouseHover: false });
  };
  mostrarOpcao = (opcao) => {
    if (this.state.opcao !== null) {
      this.setState({ opcao: null });
    }

    this.setState({ opcao: opcao });
  };
  

  render() {
    
    const divStyle = {
      backgroundColor: this.state.mouseHover ? 'lightblue' : 'white',
      boxShadow: this.state.mouseHover ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none',
    };

    const { opcao } = this.state;

    return (
      <div>
        <button className='projeto' onClick={() => this.mostrarOpcao('projetos')}>Projetos</button>
        <button className='about' onClick={() => this.mostrarOpcao('sobremim')}>Sobre Mim</button>
        <button className='contatos' onClick={() => this.mostrarOpcao('contatos')}>Contatos</button>

        {opcao === 'projetos' && (
          <div className='viewtemplates'>
             <section>
              <DivSpan className='tmp2' spanContent="iDisk" link="https://idisk.netlify.app/">
              <Effect className="idisk">
              </Effect >
              </DivSpan> 

              <DivSpan className='tmp1' spanContent="Template de Contato" link="https://mytemplateodevpablo.netlify.app/">
              <Effect className="advtemplate">
              </Effect>
              </DivSpan>

              <DivSpan className="tmp3" spanContent="The Vibes v.1">
                <Effect className="thevibes">
                </Effect>
              </DivSpan>

              <DivSpan className="tmp4" spanContent="Review (NODE.JS)" link="https://github.com/odevpablo/reviewnodejs">
                <Effect className="model1">
                </Effect>
              </DivSpan>

              <div className="model2">
                <Effect href="" className="">
                </Effect>
              </div>

              <div className="model3">
                <Effect href="" className="">
                </Effect>
              </div>

              <div className="model4">
                <Effect href="" className="">
                </Effect>
              </div>

              <div className="model5">
                <Effect href="" className="">
                </Effect>
              </div>

              <div className="model6">
                <Effect href="" className="">
                </Effect>
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