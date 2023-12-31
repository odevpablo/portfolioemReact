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
                <Effect className="model1" >
                </Effect>
              </DivSpan>

              <DivSpan className="model2" spanContent="Opa" link="">
                <Effect className="seachcep" >
                </Effect>
              </DivSpan>

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
            <p className='descricao'>
            Graduando em Análise e Desenvolvimento de Sistemas com foco em linguagens de programação front-end,
             buscando oportunidades de carreira para aplicar meus conhecimentos em
              Angular, JavaScript , React.js, Spring, PHP, Node.js e SQL.</p>
            <p className='formacao'> 
            <p>Formação:</p>
            <br/>
            Análise e Desenvolvimento de Sistemas - Superior Tecnólogo
            Duração: 5 semestres
            Instituição: Centro Universitário Internacional - UNINTER - Polo Montes Claros
            <br/>Conclusão: 2º Semestre de 2023
            </p>
          </div>
        )}
        {opcao === 'contatos' && (
          <div className='viewcontatos'>
             <div className='git'>
                <a href="https://github.com/odevpablo"><DiGithubBadge  size={48} id='git'/></a>
              </div>
             <div className='lk'>
               <a href='https://www.linkedin.com/in/odevpablo/'><AiFillLinkedin size={40} id='lk'/></a>
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