import { DiCss3,DiJavascript,DiSymfonyBadge  } from 'react-icons/di';
import  {AiOutlineHtml5 } from 'react-icons/ai';
import{BiLogoSpringBoot,BiLogoReact} from 'react-icons/bi'

function Elements(){
    return(
        <div>
            <section className='elementshab'>
                <div className='elementhtml'>
                    <a>
                    <AiOutlineHtml5 id='htmlbox'/>
                    HTML   
                    </a>                    
                </div>
                <div className='elementcss'>
                  <a>
                  <DiCss3 id='cssbox'/>
                  CSS
                  </a>
                </div>
                <div className='elementjs'>
                  <a>
                  <DiJavascript id='jsbox'/>
                  JAVASCRIPT
                  </a>           
                </div>
                <div className='elementreact'>
                  <a>
                  <BiLogoReact id='reactbox'/>
                  REACT
                  </a>
                </div>
                <div className='elementspring'>
                  <a>
                  <BiLogoSpringBoot id='springbox'/>
                  SPRINGBOOT
                  </a>
                </div>
                <div className='elementsf'>
                  <a>
                  <DiSymfonyBadge id='sfbox'/>
                  SYMFONY
                  </a>
                </div>
            </section><div/>  
        </div>
    )
}
export default Elements;