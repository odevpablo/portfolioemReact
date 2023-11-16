import './App.css';

import Options from './components/options.js';

import {IoLogoInstagram } from 'react-icons/io';
import { MdExtension } from 'react-icons/md';


import Elements from './components/elements';


import Profile from "./img/IMG_4864.jpg";
import {useState} from 'react'

function App() {
  return (
      <div className="App"> 
        <header className="App-header">      
            <div className='profile'> 
            <Elements/>
            <div>
              <span>Pablo Oliveira</span>
            </div>
            <div>
              <span>Desenvolvedor Front-end</span>
            </div>
              </div>
              <img src={Profile} alt='profile' title='pf' width={500} />  
              <div className='view'>
              <Options/>
              </div> 
                         
            </header>
          </div>
  );
}

export default App;
