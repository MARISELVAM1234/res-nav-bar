import styled from "styled-components";


export const Section = styled.section`
background-color: black;
text-align: center;

.tele {
    background-color: antiquewhite;
    display: flex;
    flex-wrap: wrap;
    row-gap:20px ;
    margin: auto;
    justify-content: space-around;
    padding: 50px 30px;
}
.tele-head{
    padding-top: 20px;
    margin-top: 0px;
     color: white;
 }
 .tele-episode{
     width: 250px;
     height: 230px;
     border:2px solid saddlebrown;
     background-color: white;
 }
`;

export const Button = styled.button `
  background-color:black;
  color:white ;
  padding:10px 20px
`