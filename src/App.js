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
            <a href="https://github.com/odevpablo"><DiGithubBadge  size={48} id='git'/></a>
            </div>
            <div className='lk'>
            <a href='https://www.linkedin.com/in/pablo-oliveira-7a32591b5/'><AiFillLinkedin size={40} id='lk'/></a>
            </div>
            <div className='st'>
            <a href='https://odevpablo.github.io/iDisk-Portfolio/'><MdExtension size={39} id='st'/></a>
            </div>
        </div>
        <div className='adaptation'>
        <div className='about'>
          <a>Olá! Meu nome é Pablo, tenho 21 anos e sou um jovem
             desenvolvedor que está em busca<br></br> do seu espaço.</a>
          <div className='ig'>
          <a href='https://www.instagram.com/odevpablo/'><IoLogoInstagram size={50} id='ig' title='ig'/> </a>
          </div>
       </div>
       <div className='view'>
            
            </div>
            </div>
      </header>
    </div>
  );
}

export default App;
