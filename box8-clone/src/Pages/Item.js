import styled from "styled-components";

export default styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  height: 200px;
  transition: transform 0.2s;
  width: 98%;
 border-radius:25px;
  border:0.1px solid gray;
 /* :hover{
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
 } */
 :hover{
    transform:scale(1.1);
    
  // transition-timing-function: ease-out;
   // transition: .3s var(--_s,0s) linear,background-size .3s calc(.3s - var(--_s,0s));
 }
  color:black;
  margin: 0 15px;
  font-size: 1em;
`;
