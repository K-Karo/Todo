import styled from "styled-components"

export const MainMenuBtn = styled.button`
 position: absolute;
 top: 2px;
 height: 46px;
 right: 2%;
 width: 10%;
 border: none;
 border-radius: 10px;
 color: aliceblue;
 background-color: DarkSlateBlue;
 &:hover {
  background: white;
  border: 3px solid DarkSlateBlue;
  color: DarkSlateBlue;
}
&:active {     
  background: white;
  border: 3px solid LightSteelBlue;
  color: LightSteelBlue;    
}
@media screen and (max-width: 499px) {
  right: 1%;
  width: 15%;
}
`
export const InputTodo = styled.input`
    background-color: white;
    position: absolute;
    left: 20%;
    top: 150px;
    width: 45%;
    height: 32px;
    border: 2px solid DarkSlateBlue;
    text-align: center;
    border-radius: 10px 0px 0px 10px;
    font-size: 14px;
    outline : none;
    color: MidnightBlue;
    @media screen and (max-width: 1000px) {
      left: 10%;
      width: 50%;
    }
    @media screen and (max-width: 500px) {
      left: 5%;
      width: 70%;
    }  
`
export const Button = styled.button`
    position: absolute;
    size: 2em;
    left: 65%;
    border: 2px solid DarkSlateBlue;
    border-radius: 0px 10px 10px 0px;
    outline : none;
    margin-left: 7px;
    top: 150px;
    width: 5%;
    height: 38px;
    color: aliceblue;
    background-color: DarkOrange;
    &:hover {
      background: white;
      border: 2px solid DarkOrange;
      color: DarkOrange;
    }
    &:active {     
      background: white;
      border: 2px solid LightSteelBlue;
      color: LightSteelBlue;    
    }
    @media screen and (max-width: 1000px) {
      left: 60%;
      width: 10%;
    }
    @media screen and (max-width: 500px) {
      left: 75%;
      width: 15%;
    }
`
export const Select = styled.select`
    border:solid 2px DarkSlateBlue;
    background-color: white;
    position: absolute;
    left: 72%;
    width: 8%;
    height: 35px;
    border-radius: 10px 10px 10px 10px;
    top: 150px;
    font-size: 16px;
    text-align: center;
    color: DarkSlateBlue;
    &:focus {
      outline: none;
    }
    @media screen and (max-width: 1000px) {
      left: 75%;
      width: 15%;
    }
    @media screen and (max-width: 500px) {
      top: 70px;
      left: 38%;
      width: 24%;
    }
`
export const BoxTodo = styled.div`
    position: relative;
    background-color: white;
    top: 250px;
    left: 10%;
    margin-bottom: 10px;
    width: 80%;
    height: 30px;
    border: 1px solid DarkSlateBlue;
    text-align: center;
    line-height: 20px;
    border-radius: 10px 10px 10px 10px;
    font-size: 14px;
    outline : none;
    @media screen and (max-width: 900px) {
      height: 60px;
      line-height: 32px;
    } 
    @media screen and (max-width: 500px) {
      left: 5%;
      width: 90%;
    } 
    @media screen and (max-width: 399px) {
      left: 5%;
      width: 90%;
      font-size: 10px;
      line-height: 37px;
    }   
`
export const DeleteButton = styled.button`
    position: absolute;
    background-color: DarkOrange;
    color: white;
    right: 0%;
    width: 5%;
    height: 30px;
    border-radius: 0px 10px 10px 0px;
    border: 1px solid gray;
    outline : none;
    &:hover {
      background: white;
      border: 1px solid DarkOrange;
      color: DarkOrange;
    }
    &:active {     
      background: white;
      border: 1px solid LightSteelBlue;
      color: red;    
    }
    @media screen and (max-width: 900px) {
      height: 60px;
    } 
    @media screen and (max-width: 700px) {
      height: 60px;
      right: 0%;
      width: 10%;
    }
`
export const CheckButton = styled.button`
    position: absolute;
    background-color: MediumSeaGreen;
    color: white;
    right: 5%;
    width: 5%;
    height: 30px;
    border-radius: 0px 0px 0px 0px;
    border: 1px solid gray;
    outline : none;
    &:hover {
      background: white;
      border: 1px solid MediumSeaGreen;
      color: MediumSeaGreen;
    }
    &:active {     
      background: white;
      border: 1px solid LightSteelBlue;
      color: green;    
    }
    @media screen and (max-width: 900px) {
      height: 60px;
      line-height: 32px;
    } 
    @media screen and (max-width: 700px) {
      height: 60px;
      right: 10%;
      width: 10%;
    }
`
export const P = styled.p`
    position: absolute;
    text-align: center;
    color: DarkSlateBlue;
    top: -30%;
    left: 0%;
    width: 80%;
`
export const N = styled.p`
    position: absolute;
    text-align: center;
    text-decoration: line-through;
    color: gray;
    top: -30%;
    left: 0%;
    width: 80%;
`