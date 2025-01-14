import styled, { keyframes } from 'styled-components';

const spinnerAnimation = keyframes`
  0%{transform: rotate(0deg);}
  100%{transform: rotate(360deg);}
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  z-index: 3;
`;

export const Spinner = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  /* background-color: #0097a7; */
  border-radius: 50%;
  animation: ${spinnerAnimation} 1s linear infinite;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(to top, transparent, #07bed6);
    border-top-left-radius: 1000px;
    border-bottom-left-radius: 1000px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 45%;
    width: 20px;
    height: 20px;
    background-color: #b2ebf2;
    border-radius: 50%;
    box-shadow: 0 0 10px #b2ebf2, 0 0 20px #b2ebf2, 0 0 30px #b2ebf2,
      0 0 40px #b2ebf2, 0 0 50px #b2ebf2;
  }

  & span {
    position: absolute;
    top: 20px;
    right: 20px;
    bottom: 20px;
    left: 20px;
    background-color: #ffffff;
    border-radius: 50%;
  }
`;
