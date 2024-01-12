import React, { useRef } from 'react';
import { Topnavbar, MainnavbarDIV, Mainnavbar, Mainnavbarlist, Mainnavbarbutton,Mainnavbarbuttononee, Mainnavbarlogo, Mainnavbarlogosm } from './Styled';
export default function Navbar() {


    const scrollToDiv = () => {
        const element = document.getElementById('specificDiv');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };



      const scrollToDivhome = () => {
        const element = document.getElementById('specificDivhome');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
  


      const scrollToDivproject = () => {
        const element = document.getElementById('specificDivproject');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

      const scrollToDivabout = () => {
        const element = document.getElementById('specificDivabout');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
  
  
    return (
        <div>
            <MainnavbarDIV>
                <Mainnavbar>
                    <Mainnavbarlogo>
                        <img alt=' ' src="./media/1.png" />
                    </Mainnavbarlogo>

                    <Mainnavbarlist>
                        <h1  onClick={scrollToDivhome}>Home</h1>
                        <h1  onClick={scrollToDivproject}>Project</h1>
                        <h1  onClick={scrollToDivabout}>About</h1>
                    </Mainnavbarlist>
                    <Mainnavbarbuttononee onClick={scrollToDiv}>
                        <img alt=' ' src="./media/1.svg" />
                        <h2>Subscribe</h2>
                    </Mainnavbarbuttononee>


                    <Mainnavbarlogosm>
                        <img alt=' ' src="./media/2.svg" />
                    </Mainnavbarlogosm>
                </Mainnavbar>

            </MainnavbarDIV>
        </div>
    )
}
