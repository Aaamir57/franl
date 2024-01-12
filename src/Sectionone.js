import React from 'react'
import { Sectiononemain,Sectiononemainleftlineimage, Sectiononemainright, Sectiononemainleft, Sectiononemainleftbuttondiv, Sectiononemainleftbuttondivone,Sectiononemainleftbuttondivtwo } from './Styled';
export default function Sectionone() {

   
    const scrollToDiv = () => {
        const element = document.getElementById('specificDiv');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };


       
    const scrollToDivcards = () => {
        const element = document.getElementById('specificDivcards');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
    return (
        <div>
            <Sectiononemain  id="specificDivhome">
                <Sectiononemainleft>
                    <h1>
                        Hey, I am 👋<br />
                        Frank Miller<br />
                        Entrepreneur
                    </h1>
                    <Sectiononemainleftlineimage >
                    <img alt=' ' src="./media/5.svg" />
                    </Sectiononemainleftlineimage>
                    <h2>
                        Empowering 100+ businesses in various industries such as Real Estate, Solar,
                        Insurance, Healthcare, Merchant Services, and more with innovative technologies
                        and strategies which help them achieve goals and build success in todays competitive marketplace.
                    </h2>
                    <Sectiononemainleftbuttondiv>
                        <Sectiononemainleftbuttondivone  onClick={scrollToDiv}>
                            <img alt=' ' src="./media/1.svg" />
                            <h5>Subscribe</h5>
                        </Sectiononemainleftbuttondivone>
                        <Sectiononemainleftbuttondivtwo onClick={scrollToDivcards}>
                        <img alt=' ' src="./media/3.svg" />
                            <h3>
                            View Projects
                            </h3>
                        </Sectiononemainleftbuttondivtwo>
                    </Sectiononemainleftbuttondiv>
                </Sectiononemainleft>

                <Sectiononemainright>
                <img alt=' ' src="./media/2.png" />
                </Sectiononemainright>
            </Sectiononemain>
        </div>
    )
}
