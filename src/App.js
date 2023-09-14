import './App.css';

import Options from './components/options';

import {IoLogoInstagram } from 'react-icons/io';
import { MdExtension } from 'react-icons/md';
import Profile from "./img/IMG_4864.jpg";
import {useState} from 'react'

function App() {
  return (
      <div className="App"> 
        <header className="App-header">      
            <div className='profile'> 
            <a>Nome: Pablo Oliveira</a>
            <a>Atuação: Desenvolvedor Front-end </a>
            <a>21 anos</a>
              </div>
              <img src={Profile} alt='profile' title='pf' width={200} />  
              <div className='view'>
              <Options/>
              </div> 
                         
            </header>
          </div>
  );
}

export default App;
