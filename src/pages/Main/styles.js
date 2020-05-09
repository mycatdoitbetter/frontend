import styled from "styled-components";
import { FiGithub, FiPlus } from "react-icons/fi";

export const Container = styled.div`
  max-width: 700px;
  width: 700px;
  background: #f1f7ee;
  border-radius: 5px;
  box-shadow: 0 0px 80px rgba(0, 0, 0, 0.1);
  margin: 120px auto;
  padding: 20px 30px;

  h1 {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 15px;
  }
`;

export const SubmitButton = styled.button`
  background: #4169e1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    opacity: 0.7;
  }
`;

export const IconGithub = styled(FiGithub).attrs({
  size: 50,
})`
  align-self: center;
`;

export const IconPlus = styled(FiPlus).attrs({ size: 17, color: "#F1F7EE" })``;
