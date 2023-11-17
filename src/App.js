import React from 'react';
import './App.css';
import Options from './components/options.js';
import { IoLogoInstagram } from 'react-icons/io';
import { MdExtension } from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.min.css';
import Elements from './components/elements';
import Profile from "./img/IMG_4864.jpg";
import Text from './components/text.js';
import { useState } from 'react';

function App() {
 

  return (
    <div className="App">
      <header className="App-header">
        <div className='profile'>
          <div>
            <span>Pablo Oliveira</span>
          </div>
          <div>
            <span className='stacks'>
            Desenvolvedor Front-end <br/>
            </span>
          </div>
        </div>
        <img src={Profile} alt='profile' title='pf' width={200} />
            <div className='divskills'>
              Skills Dev:
              <div className='front'>
                    Front-end
                    <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-success" style={{ width: '80%' }}>80%</div>
                    </div>
                  </div>
                  <div className='back'>
                    Back-end
                    <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-success" style={{ width: '43%' }}>43%</div>
                    </div>
                  </div>
                  </div>
        <Elements />
        <Text />

        <div className='view'>
          <Options/>
        </div>
      </header>
      
    </div>
  );
}

export default App;
