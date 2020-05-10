import styled from 'styled-components';

const StyledHatesList = styled.div`
  width: 960px;
  max-width: 100%;
  margin: 0 auto;
  padding: 20px 40px;
  box-sizing: border-box;
  u {
    text-transform: uppercase;
  }
  p {
    margin: 0;
    padding: 10px 0;
    background: #f1f1f1;
    &:nth-child(odd) {
      background: #f8f8f8;
    }
  }
  button {
    display: block;
    width: 240px;
    height: 40px;
    margin: 20px auto;
    line-height: 40px;
    text-align: center;
    border: 0;
    color: black;
    background: white;
    cursor: pointer;
    img {
      display: inline-block;
      vertical-align: middle;
      margin: 0 4px;
      height: 20px;
    }
  }
`;

export { StyledHatesList };
