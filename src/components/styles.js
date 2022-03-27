import styled from "styled-components"
import 'animate.css';
import { Campeones } from "../App";



export const HR = styled.hr`

    height: 10px;
    width: ${props => props.main ? "70%" : "50%"};
    background-color: #fff;
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

`

export const StyledDiv = styled.div`
    margin: 20px;
    background-color: #1e1e21;
    margin-top: 0px;

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
    color: #fff;
    font-family: 'Noto';
    margin-top: ${props => props.intro ? "200px" : "0"};
    font-style: ${props => props.intro ? "italic" : "normal"};
    font-size:  ${props => props.intro ? "50px" : "big"};
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



    :hover {
        //transition: background-color, color 1.2s linear;
        transition-property:  background-color, color;
          transition-duration: 0.75s, 0.75s;

        background-color: ${props => props.filter ? "white" : ""};
        color: ${props => props.filter ? "black" : "white"};
        cursor: ${props => props.filter ? "pointer" : "auto"};

   
    }`


export const P = styled.p`
    color: white;
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
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
width: 60%;
margin: 50px   auto;
`

export const Rol = styled(H3)`
    padding: 4px;
    border-radius: 5px; 
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
    border-left: 6px solid #fff;
    border-bottom: 5px solid #fff;

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
