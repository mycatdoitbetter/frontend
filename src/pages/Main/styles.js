import styled, { keyframes } from "styled-components";
import { FiGithub, FiPlus, FiLoader, FiTrash } from "react-icons/fi";
import Switch from "react-switch";
export const Container = styled.div`
  max-width: 700px;
  width: 700px;
  background: ${({ theme }) => theme.colors.brightest};
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
    background-color: ${({ theme }) => theme.colors.brightest};
    border: 1px solid ${({ theme }) => theme.colors.container};
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 15px;
  }
`;
export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;

    & + li {
      border-top: 1.5px solid ${({ theme }) => theme.colors.brightest};
    }
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    float: right;
    font-weight: 600;
    :hover {
      opacity: 0.6;
    }
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: "submit",
  disable: props.loading,
}))`
  background: ${({ theme }) => theme.colors.primary};
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
  color: ${({ theme }) => theme.colors.icons};
`;

export const IconPlus = styled(FiPlus).attrs({
  size: 17,
})`
  color: ${({ theme }) => theme.colors.brightest};
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

export const IconLoader = styled(FiLoader).attrs({
  size: 17,
})`
  animation: ${rotate} 2s linear infinite;
  color: ${({ theme }) => theme.colors.brightest};
`;

export const IconTrash = styled(FiTrash).attrs({})`
  :hover {
    color: red;
  }
  float: right;
  color: ${({ theme }) => theme.colors.primary};

  margin-left: 15px;
`;
export const SwitchCustom = styled(Switch).attrs({
  width: 48,
  height: 24,
  onColor: "#70ABAF",
  offColor: "#5B2A86",
})``;
