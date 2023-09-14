import React, { Component } from 'react';
import { useState } from "react";
import {AiFillLinkedin, AiFillInstagram, AiOutlineHtml5 } from 'react-icons/ai';
import {DiGithubBadge,DiCss3,DiJavascript,DiSymfonyBadge  } from 'react-icons/di';
import{BiLogoSpringBoot,BiLogoReact} from 'react-icons/bi'

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
              <a href="https://odevpablo.github.io/iDisk-Portfolio/" className="idisk">
              </a> 
              <a className='versionid'>v.1</a>
              <div className='tmp1'>
              <a href="https://mytemplateodevpablo.netlify.app/" className="advtemplate">
              </a>
              <a className='versionad'>v.3</a>
              </div>
              <div className="tmp3">
                <a href="" className="thevibes">
                </a>
                <a className="versiontb">Em Produção</a>
              </div>
              </div>
            </section>
          </div>
        )}
        {opcao === 'sobremim' && (
          <div className='viewabout'>
            <a className='habilidades'>Habilidades:
            <section className='elementshab'>
            <AiOutlineHtml5/>
            <DiCss3/>
            <DiJavascript/>
            <BiLogoReact/>
            <BiLogoSpringBoot/>
            <DiSymfonyBadge/>
            </section>
            </a>
            <a className='formacao'>
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