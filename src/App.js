import './App.css';
import {DiGithubBadge } from 'react-icons/di';
import {IoLogoInstagram } from 'react-icons/io';
import {AiFillLinkedin } from 'react-icons/ai';
import { MdExtension } from 'react-icons/md';
import Profile from "./img/IMG_4864.jpg";



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className='profile'> 
          <img src={Profile} alt='profile' title='pf' width={150} />  
        </div>
        <h1 className='title'>Estou presente:</h1>
        <div className='social'>
            <div className='git'>
            <DiGithubBadge size={48} id='git'/>
            </div>
            <div className='lk'>
            <AiFillLinkedin size={40} id='lk'/> 
            </div>
            <div className='st'>
            <MdExtension size={39} id='st'/>
            </div>
        </div>
        <div className='about'>
          <a>Olá! Meu nome é Pablo, tenho 21 anos e sou um jovem desenvolvedor que está em busca do seu espaço.</a>
          <div className='ig'>
          <IoLogoInstagram size={50} id='ig' title='ig'/> 
          </div>
       </div>

      </header>
    </div>
  );
}

export default App;
