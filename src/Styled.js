import styled from '@emotion/styled';



export const Topnavbar = styled.div`
width: 100%;
height:auto;

padding-bottom:1rem;
background: #06152B;
@media (max-width: 1000px) {
   
padding-top:10px;
   }
   @media (min-width: 1000px) {
   
padding-top:30px;
   }
`;
export const MainnavbarDIV = styled.div`
width: 100%;
height:auto;
display:flex;
align-items:center;
justify-content:center;
z-index:2;
padding-top:40px;

`;
export const Mainnavbar = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  border-radius: 16px;
background: #FFF;
box-shadow: 0px 12px 18px 0px rgba(56, 68, 85, 0.10);
width: 1280px;
height: 88px;  
position:fixed;
z-index:100;
margin:0 auto;


 @media (max-width: 1300px) {
   
  max-width:98%;
      }

      @media (max-width: 992px) {
   
   height:55px;
       }
`;


export const Mainnavbarlogo = styled.div`
  display: flex;
margin-left:24px;

img{
    width: 255px;
height: 48.05px;
flex-shrink: 0; 
}
@media (max-width: 1000px) {
   img{
    width: 135px;
height: 26px;
   }
  }
`;


export const Mainnavbarlist = styled.div`
  display: flex;
 gap:24px;
 @media (max-width: 1000px) {
    display:none;
  }
h1{
    color: #06152B;
text-align: center;
font-family: Poppins;
font-size: 14px;
cursor:pointer;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 114.286% */
}
`;

export const Mainnavbarbuttononee = styled.div`
  display: inline-flex;
  width: 160px;
  height: 60px;
  margin-right: 24px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: linear-gradient(90deg, #0090FF 0%, #36DAE9 100%);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
  gap: 10px;

  &:hover {
    opacity: 0.8; /* Adjust the opacity as needed */
    transition: opacity 300ms ease-in-out;
  }

  @media (max-width: 1000px) {
    display: none;
  }

  h2 {
    color: #FFF;
    text-align: center;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px; /* 122.222% */
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export const Mainnavbarbutton = styled.div`
 display: inline-flex;
width:160px;
height:60px;
margin-right:24px;
cursor: pointer;
justify-content: center;
align-items: center;
border-radius: 16px;
background: linear-gradient(90deg, #0090FF 0%, #36DAE9 100%);
box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
gap: 10px;
@media (max-width: 1000px) {
    display:none;
  }
h2{
    color: #FFF;
text-align: center;
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 22px; /* 122.222% */
}
img{
    width: 24px;
height: 24px;
}
`;



export const Mainnavbarlogosm = styled.div`
  display: flex;
  margin-right:24px;
  @media (min-width: 1000px) {
    display:none;
  }

img{
    width: 24px;
height: 24px;
}


`;




















export const Sectiononemain = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
 
  width:100%;
 
  gap:154px;
  @media (max-width: 1300px) {
   
  gap:2rem;
       }
`;


export const Sectiononemainleft = styled.div`
  display: flex;
  flex-direction:column;
  tex-align:center;

 
h1{
    color: #FFF;
font-family: Poppins;
font-size: 56px;
font-style: normal;
font-weight: 700;
line-height: 60px;
z-index:1;


}
h2{
    color: rgba(255, 255, 255, 0.80);
font-family: Poppins;
font-size: 16px;
font-style: normal;
tex-align:center;
opacity: 0.9;
font-weight: 400;
line-height: 24px; /* 150% */
letter-spacing: 0.5px;
width:523px;

}


@media (max-width: 1160px) {
  display:flex;
  align-items:center;
  padding-top:90px;
  padding-bottom:30px;
  h1{
    font-size:40px;
    line-height:52px;
  }
   h2 {
    width: 378px;
    tex-align:center;
   }
  }



  @media (max-width: 660px) {
  display:flex;
  
  justify-content:center;
  flex-wrap:wrap;
  padding-top:90px;
  padding-bottom:30px;
  padding-left:16px;
  padding-right:16px;
  h1{
    font-size:40px;
    line-height:52px;
  }
   h2 {
    width:358px;
   }
  }


  @media (max-width: 400px) {
  display:flex;
  
  justify-content:center;
  flex-wrap:wrap;
  padding-top:90px;
  padding-bottom:30px;
  padding-left:16px;
  padding-right:16px;
  h1{
    font-size:40px;
    line-height:52px;
  }
   h2 {
    width:308px;
   }
  }

`;


export const Sectiononemainleftlineimage = styled.div`



 @media (min-width: 1160px) {
  position:relative;
left:-20px;
bottom:20px;
z-index:0;

img{
    width: 380px;
height: 45.385px;
flex-shrink: 0;
 }

  }




  @media (max-width: 1160px) {
  position:relative;

bottom:30px;

img{
    width: 240px;
height: 45.385px;
flex-shrink: 0;
 }

  }

`;


export const Sectiononemainleftbuttondiv = styled.div`
  display: flex;
  flex-wrap:wrap;
gap:20px;
margin-top:32px;



@media (max-width: 400px) {
width:300px;

  }

`;


export const Sectiononemainleftbuttondivone = styled.div`
display: flex;
width:170px;
height:60px;
justify-content: center;
align-items: center;
cursor:pointer;
gap: 10px;
border-radius: 16px;
background: linear-gradient(90deg, #0090FF 0%, #36DAE9 100%);
box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);

&:hover {
    opacity: 0.8; 
    transition: opacity 300ms ease-in-out;
  }
h5{
    color: #FFF;
text-align: center;
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 22px; 
}
img{
    width: 24px;
height: 24px;
}
`;


export const Sectiononemainleftbuttondivtwo = styled.div`
border-radius: 16px;
border: 1px solid #0090FF;
box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
display: inline-flex;
width:170px;
cursor:pointer;
height:60px;
justify-content: center;
align-items: center;
gap: 10px;

h3{
    text-align: center;
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 22px;
background: var(--Gradient, linear-gradient(90deg, #0090FF 0%, #36DAE9 100%));
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
transition: opacity 300ms ease-in-out; 
}
img{
    width: 24px;
height: 24px;
transition: opacity 300ms ease-in-out; 
}


&:hover {
  
      opacity: 0.4; /* Adjust the opacity as needed */
    
  }
`;












export const Sectiononemainright = styled.div`
  display: flex;
img{
  width: 546px;
height: 624px;
flex-shrink: 0;

}


@media (max-width: 1160px) {
   
 display:none;
        }

`;



























export const Sectiontwomain = styled.div`
  display: flex;
align-item:center;
justify-content:center;
gap:77px;
padding-top:80px;
padding-bottom:80px;
@media (max-width: 1300px) {
   
   gap:2rem;
        }
        @media (max-width: 1200px) {
   
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
           }
`;



export const Sectiontwoleft = styled.div`
  display: flex;
img{
    ${'' /* width: 490px;
height: 490px; */}

width: 600px;
height: 600px;
flex-shrink: 0;
border-radius: 15px;
background: url(<path-to-image>), lightgray -328px 0px / 154.667% 100% no-repeat;
}

@media (max-width: 1160px) {
   
   display:flex;
  align-items:center;
   justify-content:center;
   padding-left:16px;
padding-right:16px;
   img{
    width: 550px;
height: 550px;

max-width:100%;

   }
              }

              @media (max-width: 660px) {
   
   display:flex;
  align-items:center;
   justify-content:center;
   padding-left:16px;
padding-right:16px;
   img{
    width: 358px;
height: 358px;
flex-shrink: 0;;

max-width:100%;

   }
              }




`;



export const Sectiontworight = styled.div`
  display: flex;
flex-direction:column;
justify-content:center;
width: 523px;
h1{
    color: #06152B;
font-family: Poppins;
font-size: 44px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom:24px;
}

h2{
    color: rgba(6, 21, 43, 0.80);
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 28px; /* 155.556% */
letter-spacing: 0.5px;
opacity: 0.6;
width: 523px;
margin-bottom:24px;
}



@media (max-width: 660px) {
width:358px;
  h2{
    width:358px;
  }
              }

              @media (max-width: 380px) {
width:330px;
  h2{
    width:320px;
  }
              }

`;



export const SectionTHREETOP = styled.div`

background: linear-gradient(128deg, rgba(234, 208, 247, 0.16) 0%, rgba(214, 230, 244, 0.16) 99.98%);
width:100%;
height:auto;
padding-top:74px;
padding-bottom:74px;

`;




























export const Sectionthreemain = styled.div`

width: 100%;
gap:116px;


h1{
    color: #06152B;
font-family: Poppins;
font-size: 44px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-align:left;



}
h2{
    color: rgba(6, 21, 43, 0.80);
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 25px; /* 155.556% */
letter-spacing: 0.5px;
margin-top:10px;
opacity: 0.6;


}


@media (min-width: 1201px) and (max-width: 1300px) {
   
   gap:80px;
        }



@media (min-width: 1200px) {
  display: flex;
 flex-direction: row;
justify-content: center;
align-items: left;
h1{
  width:565px;
}
h2{
  width:519px;
  margin-top:15px;
}
              }











              
        @media (max-width: 1200px) {
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding-left:16px;
padding-right:16px;
gap:20px;
h1{
  width:550px;
}
h2{
  width:550px;
}
        }


        @media (max-width: 660px) {
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding-left:16px;
padding-right:16px;
gap:20px;

h1{
  width:358px;
  font-size:28px;
}
h2{
  width:358px;
}
        }




        @media (max-width: 390px) {
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding-left:16px;
padding-right:16px;
gap:20px;

h1{
 
  width:338px;
}
h2{
  width:338px;
}
        }
`;










export const Sectionfourmain = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  gap:24px;
  margin-top:60px;

  @media (max-width: 1300px) {
   
   gap:16px;
        }
        @media (max-width: 1200px) {
          display: flex;
          flex-direction:column;
  align-items:center;
  justify-content:center;
        }

        @media (max-width: 460px) {
         padding-left:16px;
         padding-right:16px;
        }

`;




export const Sectionfourmainone = styled.div`
width: 384px; 
height: auto;
padding-top:30px;
padding-bottom:40px;
padding-left:20px;
padding-right:30px;
flex-shrink: 0;
border-radius: 16px;
border: 1px solid rgba(128, 159, 184, 0.20);
background: #FFF;
box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.04);
display:flex;
flex-direction:column;

@media (max-width: 460px) {
        max-width:100%;
        }

h1{
    color: #06152B;
font-family: Poppins;
font-size: 30px;
font-style: normal;
font-weight: 600;
line-height: 40px; /* 133.333% */
text-transform: capitalize;
margin-bottom:15px;
margin-top:30px;
}
h2{
    color: rgba(6, 21, 43, 0.80);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
letter-spacing: 0.5px;
opacity: 0.6;
margin-bottom:40px;

flex-shrink: 0;
}


@media (min-width: 1200px) {
      h2{
        width: 320px;
height: 138px;
flex-shrink: 0;
      }
        }

`;


export const Sectionfouronelogo = styled.div`
display: inline-flex;
width:106px;
padding: 16px;
align-items: flex-start;
gap: 10px;
border-radius: 16px;
background: #FFF;
box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.04);
img{
    width: 80px;
height: 43.279px;
}
`;

export const Sectionfouronelogotwo = styled.div`
display: inline-flex;
width:240px;
padding: 16px;
align-items: flex-start;
gap: 10px;
border-radius: 16px;
background: #FFF;
box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.04);
img{
    width: 218.48px;
height: 31.67px;
}
`;

export const Sectionfouronelearn = styled.div`
  display: flex;
 gap:10px;

 h3{
    color: var(--Primary-blue, #51B2FE);
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 133.333% */
 }
 img{
    width: 14px;
height: 14px;
flex-shrink: 0;
position:relative;
top:5px;

 }


`;















export const Mainfooter = styled.div`

background: #06152B;
padding-top:80px;


@media (max-width: 1200px) {
        width:100%;
        }

`;


export const Mainfootercontent = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
h1{
  color: #FFF;
font-family: Poppins;
font-size: 44px;
font-style: normal;
font-weight: 700;
line-height: normal;

}

@media (min-width: 1200px) {
  h1{
 
margin-right:570px;
}
        }
        @media (max-width: 1200px) {
          padding-left:16px;
padding-right:16px;
          h1{
 width:100%;color: #FFF;
font-family: Poppins;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: normal;
 margin-bottom:20px;
 display:flex;
text-align:left;
 }

        }


`;


export const Mainfootercontentline = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
h1{
  color: #FFF;
font-family: Poppins;
font-size: 44px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`;





export const Mainfootersubmitmain = styled.div`


border-bottom: 1px solid rgb(74, 74, 74);

align-items: center;
  padding: 0.76875rem 0rem 0.5625rem;
  border-radius: 0rem 0rem 0.0625rem;




        


input{
  background: none;
  padding: 0px;
  margin: 0px 0px 0px 0.75rem;
  font-family: Roboto;
  font-size: 1.4375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: rgb(122, 122, 122);
  border: medium;
  outline: none;
  
}

button{
 background:none;
  cursor: pointer;
  color:white;
  border:none;
  font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 20px;
}
@media (max-width: 1200px) {
    display:flex;
width:100%;
justify-content:space-between;

input{
  width:80%;

}

        }


@media (min-width: 1200px) {
    display:flex;
gap:147px;
justify-content:center;

align-items: center;


input{
  background: none;
  padding: 0px;
  margin: 0px 0px 0px 0.75rem;
  font-family: Roboto;
  font-size: 1.4375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: rgb(122, 122, 122);
  border: medium;
  outline: none;
  width:900px;

  ;
}
        }


`;








export const Mainfooterbottommain = styled.div`

display:flex;
justify-content:center;
gap:720px;
margin-top:86px;
margin-bottom:20px;


@media (min-width: 1200px) {
  display:flex;
justify-content:center;
  gap:720px;
        }

        @media (max-width: 1200px) {
  display:flex;
  width:100%;
  gap:0px;
justify-content:space-between;

        }


`;




export const Mainfooterbottom = styled.div`

display:flex;

h4{
  color: #FFF;
font-family: Poppins;
font-size: 15.5px;
font-style: normal;
font-weight: 400;
line-height: 28.8px; /* 185.806% */
}

@media (max-width: 1200px) {
width:100%;
 
        }
`;




export const Mainfootericonsmain = styled.div`

display:flex;
gap:10px;
@media (max-width: 1200px) {
  justify-content:end;
width:100%;

        }

`;



export const Mainfootericonsmainone = styled.div`

border-radius: 20px;
border: 1px solid #5E6D7E;
display: flex;
width: 40px;
height: 40px;
padding: 12.3px 0px 13.7px 0px;
justify-content: center;
align-items: center;
flex-shrink: 0;


`;


