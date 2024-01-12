import React from 'react'
import {Sectiontwomain,Sectiontwoleft,Sectiontworight,Sectiononemainleftbuttondivtwo } from './Styled';
export default function Sectiontwo() {
    const scrollToDivcards = () => {
        const element = document.getElementById('specificDivcards');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
    return (
        <div>
            <Sectiontwomain id="specificDivabout">
                <Sectiontwoleft>
                    <img alt=' ' src="./media/3.png" />
                </Sectiontwoleft>
                <Sectiontworight>
                    <h1>
                        Meet Frank
                    </h1>
                    <h2>
                        From coding prodigy at 11 to conversion architect, tech has always been my compass.
                        My passion bloomed early, guiding me to launch my first venture in consumer tech.<br/><br/>

                        Today, Pareto Process isn't just mine. We're a team, empowering hundreds of real estate investors
                        and online businesses to flip leads into deals with custom software that optimizes client acquisition.
                        But our canvas is expanding. We're crafting solutions across industries – real estate, solar,
                        healthcare – building a portfolio that not only fuels business growth,
                        but also shapes a brighter future, one optimized conversion at a time.
                    </h2>
                    <Sectiononemainleftbuttondivtwo  onClick={scrollToDivcards}>
                    <img alt=' ' src="./media/3.svg" />
                    <h3>
                        View Projects
                    </h3>
                </Sectiononemainleftbuttondivtwo>
                </Sectiontworight>
               
            </Sectiontwomain>
        </div>
    )
}
