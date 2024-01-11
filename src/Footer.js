import React from 'react'
import { Mainfooter, Mainfootericonsmainone, Mainfootercontent, Mainfooterbottommain, Mainfootericonsmain, Mainfootersubmitmain, Mainfooterbottom } from './Styled';
export default function Footer() {
    return (
        <div>
            <Mainfooter>
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
                            <Mainfootericonsmainone>

                            </Mainfootericonsmainone>
                            <Mainfootericonsmainone>

                            </Mainfootericonsmainone>
                            <Mainfootericonsmainone>

                            </Mainfootericonsmainone>

                        </Mainfootericonsmain>
                    </Mainfooterbottommain>


                </Mainfootercontent>
            </Mainfooter>
        </div>
    )
}
