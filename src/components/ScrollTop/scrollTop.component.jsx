
import React from "react";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";

const MyScrollTop = styled.div`
  position: relative;
  z-index: 1000000;
  bottom: 5.5em;
  display: flex;
  width: 100%;
  justify-content: left;
  background-color: transparent;
  font-weight: 800;
  text-shadow: 1px 1px #45a29e;
  color: #fff;
  animation: MoveUpTop 2s linear infinite;
  .turn {
    cursor: pointer;
    transform: rotate(90deg);
    color:white
    
  }
  @keyframes MoveUpTop {
      0%, 100% {
        bottom: 50;
      }
      50% {
        bottom:  100px;
      }
    }
`;

const handleScrollTop = () =>{

};

const ScrollTop = () => {
  return (
    <MyScrollTop>
      <div  onClick={handleScrollTop}>
        <Nav.Link href="#home" className="turn" > Go Top </Nav.Link>

      </div>
    </MyScrollTop>
  );
};

export default ScrollTop;