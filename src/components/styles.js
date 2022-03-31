import styled from "styled-components"
import 'animate.css';

export const ImgFondo = styled.img`
    width: 50%;
    margin-left: 25%;
    border: 5px solid #fff;
    padding: 7px;
    margin-bottom: 1vh;
`
export const HR = styled.hr`

    height: 10px;
    width: ${props => props.main ? "70%" : "50%"};
    background-color: #000;
    margin: auto;
    border-radius: 25px;
    margin-top: 40px;
    margin-bottom: ${props => props.main ? "0" : "150px"};


`

export const DivFilter = styled.div`
    display: ${props => props.mostrar ? "flex" : "none"};
     position: fixed;
    z-index: 4;
    flex-direction: column;
    color: white;
    left: 92%;
    top: 60px;
    background-color: #000;
    padding: 10px;
    border: 2px solid #fff;
    border-top: none;
     @media only screen and (max-width: 450px) {
		top: 40px;
        border-right: none;
        border-left: none;

	}
    @media only screen and (max-width: 1500px) {
		left: 0;
        right: 0;
	}

`

export const StyledDiv = styled.div`
height: 100%;
    margin: 20px;
    background-color: #434347;
    margin-top: 0px;
    @media only screen and (max-width: 700px) {
		margin: 4px;
        height: auto;
	}
   
    :hover {
            transition: background-color .2s linear;

            background-color: #000000;
            cursor: pointer;

        H3 {
           transition: transform .2s linear;
            transform: translate(10%);

            }
            Img {
                
            transition: transform .2s linear;
            transform:scale(1.04);

            }
    
        
    }
`

export const StyledHeader = styled.header`
    background-color: #000000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    position: fixed;
    top: 0px;
    z-index: 3;
    border-bottom: 2px solid #fff;
     




`

export const H1 = styled.h1`
padding: 7px;
    margin-bottom: 0;
    margin-top: 0;
    text-align: center;
    color: ${props => props.intro ? "black" : "white"};
    font-family: 'Noto';
    margin-top: ${props => props.intro ? "200px" : "0"};
    font-style: ${props => props.intro ? "italic" : "normal"};
    font-size:  ${props => props.intro ? "50px" : "150%"};
    @media only screen and (max-width: 450px) {
        font-size:  ${props => props.intro ? "30px" : "15px"};

	}
`

export const H3 = styled.h3`
    margin-bottom: 10px;
    text-align:  ${props => props.cabecera ? "center" : "start"};
    color: #fff;
    margin-top: ${props => props.cabecera ? "15px" : "20px"};
    margin-left: ${props => props.cabecera ? "0" : "20px"};
    font-family: ${props => props.cabecera ? "Calibri" : "Noto"};
    font-style: ${props => props.cabecera ? "normal" : "italic"};
    font-size: ${props => props.cabecera ? "big" : "medium"};
    border:  ${props => props.filter ? "2px solid #fff" : "none"};
    border-radius: 20px;
    padding: 4px;

@media only screen and (max-width: 450px) {
		font-size: 8px;
        margin-left: 0;
        
  
    }


    :hover {
        //transition: background-color, color 1.2s linear;
        transition-property:  background-color, color;
          transition-duration: 0.75s, 0.75s;

        background-color: ${props => props.filter ? "white" : ""};
        color: ${props => props.filter ? "black" : "white"};
        cursor: ${props => props.filter ? "pointer" : "auto"};

   
    }`


export const P = styled.p`
    color: #000;
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    
`

export const P2 = styled(P)`
    margin-right: 25%;
    margin-left: 26%;
    margin-bottom: 10vh;
    text-align: justify;



`
/* imagen de campeones que aumentan con hover*/

export const Img = styled.img`
width: 100%;
margin-bottom: -4px;
position: relative;





`

export const DivPrueba = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 70%;
margin: 50px   auto;
@media only screen and (max-width: 800px) {
		width: 100%;
	}
   
`

export const Rol = styled(H3)`
    padding: 4px;
    border-radius: 5px; 
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
    border-left: 6px solid #fff;
    border-bottom: 5px solid #fff;
    @media only screen and (max-width: 1500px) {
		margin: 2%;
	}

    :hover {
    cursor: pointer;
    transition: transform .2s linear;
    transform: translate(10%, -15%);
    
    
    }
`


export const StyledCampeones = styled.div`
    display: flex;
    flex-direction: column;
`

