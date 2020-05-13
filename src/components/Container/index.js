import styled from "styled-components";

const Container = styled.div`
  /* max-width: 700px; */
  width: 50%;
  @media (max-width: 813px) {
    width: 80%;
  }
  background: ${({ theme }) => theme.colors.container};
  border-radius: 5px;
  box-shadow: 0 0px 80px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  padding: 20px 30px;

  h1 {
    display: flex;
    color: ${({ theme }) => theme.colors.icons};
    flex-direction: column;
    text-align: center;
  }

  h2 {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

export default Container;
