import './App.css';
import {DiGithubBadge } from 'react-icons/di';
import {IoLogoInstagram } from 'react-icons/io';
import {AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { MdExtension } from 'react-icons/md';
import Profile from "./img/IMG_4864.jpg";



function App() {
  return (
    <div className="App"> 
      <header className="App-header">      
          <div className='profile'> 
            </div>
            <img src={Profile} alt='profile' title='pf' width={200} />  
                    <div className='social'>
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

                        <div className='view'>
                          <div className='projeto'>
                            <nav>Projetos</nav>
                            </div>
                          <div className='sobremim'>
                            <nav>Sobre Mim</nav>
                          </div>
                          <div className='contatos'>
                            <nav>Contatos</nav>
                          </div>
                          </div>               
          </header>
        </div>
      );
}

export default App;
