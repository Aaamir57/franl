import React from 'react'
import { Mainfooter, Mainfootericonsmainone, Mainfootercontent, Mainfooterbottommain, Mainfootericonsmain, Mainfootersubmitmain, Mainfooterbottom } from './Styled';
export default function Footer() {
    const handleImageClick = () => {
       
        window.open('https://www.facebook.com/', '_blank');
      };


      const handleImageClick1 = () => {
        
        window.open('https://pk.linkedin.com/', '_blank');
      };


      const handleImageClick2 = () => {
       
        window.open('https://www.instagram.com/', '_blank');
      };
     
    return (
        <div>
            <Mainfooter id="specificDiv">
                <Mainfootercontent>
                    <h1>Want to follow my learnings?</h1>
                    <Mainfootersubmitmain>
                        <input type='text' placeholder='example@gmail.com'>

                        </input>
                        <button>
                            Submit
                        </button>
                    </Mainfootersubmitmain>
                    <Mainfooterbottommain>
                        <Mainfooterbottom>
                            <h4>
                                ©2023. Frank Miller. All Rights Reserved.
                            </h4>
                        </Mainfooterbottom>
                        <Mainfootericonsmain>
                            <Mainfootericonsmainone  onClick={handleImageClick}>
                            <img alt=' ' src="./media/100.svg" />
                           
                            </Mainfootericonsmainone>
                            <Mainfootericonsmainone onClick={handleImageClick1} >
                            <img alt=' ' src="./media/101.svg"  />
                            </Mainfootericonsmainone>
                            <Mainfootericonsmainone  onClick={handleImageClick2}>
                            <img alt=' ' src="./media/102.svg"  />
                            </Mainfootericonsmainone>

                        </Mainfootericonsmain>
                    </Mainfooterbottommain>


                </Mainfootercontent>
            </Mainfooter>
        </div>
    )
}
