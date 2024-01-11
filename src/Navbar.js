import React from 'react'
import { Topnavbar, MainnavbarDIV, Mainnavbar, Mainnavbarlist, Mainnavbarbutton,Mainnavbarbuttononee, Mainnavbarlogo, Mainnavbarlogosm } from './Styled';
export default function Navbar() {
    return (
        <div>
            <MainnavbarDIV>
                <Mainnavbar>
                    <Mainnavbarlogo>
                        <img alt=' ' src="./media/1.png" />
                    </Mainnavbarlogo>

                    <Mainnavbarlist>
                        <h1>Home</h1>
                        <h1>Project</h1>
                        <h1>Blog</h1>
                    </Mainnavbarlist>
                    <Mainnavbarbuttononee>
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
