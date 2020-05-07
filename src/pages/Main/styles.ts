import styled from 'styled-components';

export const Left = styled.div`
  width: 35%;
  float: left;
`;
export const Right = styled.div`
  width: 35%;
  float: left;
`;

export const Title = styled.h1`
  font-family: sans-serif;
  font-size: 26px;
  display: block;
  margin-bottom: 40px;
  margin-left: 70px;
  color: #ffffff;
  font-weight: bold;
`;

export const FormCRUD = styled.form`
  width: 100%;
  button {
    cursor: pointer;
    background-color: #3498db;
    border: 2px solid #3498db;
    border-radius: 4px;
    color: #ffffff;
    font-size: 16px;
    padding: 10px;
    margin: 10px 20px 20px 20px;
    width: 36%;
    float: center;
  }
  button#remove {
    color: #ffffff;
    background-color: #ff0000;
    border: 2px solid #ff6961;
  }
  h3 {
    font-family: sans-serif;
    font-size: 17px;
    color: #ffffff;
    margin-bottom: 5px;
    margin-left: 20px;
    font-weight: bold;
  }
  input {
    border: 2px solid #f0f0f0;
    border-radius: 4px;
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 14px;
    margin: 10px 20px 10px 20px;
    margin-bottom: 10px;
  }
  input:focus {
    outline: 0;
    border-color: #777;
  }
`;

export const ListCourses = styled.html`
  width: 100%;
  margin-left: 35%;
  margin-top: 0;
  button {
    cursor: pointer;
    background-color: #3498db;
    border: 2px solid #3498db;
    border-radius: 4px;
    color: #ffffff;
    display: block;
    font-size: 16px;
    padding: 10px;
    margin: 20px 20px 20px 20px;
    width: 100%;
  }
  h3 {
    font-family: sans-serif;
    font-size: 30px;
    color: #ffffff;
    margin-bottom: 5px;
    margin-left: 80px;
    font-weight: bold;
  }
  ul {
    list-style: none;
  }
  li + li {
    margin-top: 5px;
    list-style: none;
  }
  li button {
    background: #ff0000;
    border: 2px solid #ff6961;
    list-style-type: none;
  }
  div#name {
    font-family: sans-serif;
    font-size: 17px;
    color: #ffffff;
    margin-bottom: 2px;
    margin-left: 20px;
    font-weight: bold;
  }
  div#id {
    font-family: sans-serif;
    font-size: 14px;
    color: #777;
    margin-bottom: 2px;
    margin-left: 20px;
    font-weight: bold;
  }
  div#university {
    font-family: sans-serif;
    font-size: 14px;
    color: #777;
    margin-bottom: 2px;
    margin-left: 20px;
    font-weight: bold;
  }
`;
