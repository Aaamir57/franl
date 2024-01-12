import React from 'react'
import { Sectionimageone, Sectionimageonetop,Sectionimagtwo } from './Styled';

export default function Sectionimage() {
    return (
        <div>
            <Sectionimageonetop>
                <Sectionimageone>
                    <img alt=' ' src="./media/100.png" />
                </Sectionimageone>

                <Sectionimagtwo>
                    <div>
                        <img alt=' ' src="./media/1012.png" />
                        <img alt=' ' src="./media/1011.png"  style={{ position: 'relative', top: '10px' }}/>
                    </div>
                    <div>
                        <img alt=' ' src="./media/1010.png" />
                        <img alt=' ' src="./media/1000.png" style={{ position: 'relative', bottom: '35px' }}/>
                    </div>
                </Sectionimagtwo>
            </Sectionimageonetop>

        </div>
    )
}
