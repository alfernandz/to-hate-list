import styled from 'styled-components';

const StyledHomePage = styled.div`
  form {
    position: relative;
    top: 120px;
    width: 360px;
    max-width: 100%;
    margin: auto;
    transform: translateY(-50%);
    h1 {
      margin: auto;
      line-height: 40px;
      text-align: center;
    }
    input {
      display: inline-block;
      vertical-align: middle;
      height: 30px;
      margin: 10px 1px;
      line-height: 30px;
      text-indent: 4px;
      border: none;
      outline: 0;
    }
    button {
      display: inline-block;
      vertical-align: middle;
      width: 60px;
      height: 30px;
      line-height: 30px;
      background: black;
      color: white;
      border: none;
      outline: 0;
    }
  }
  .error {
    color: red;
  }
`;

export { StyledHomePage };
