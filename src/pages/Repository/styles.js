import styled, { keyframes } from "styled-components";
import { FiLoader, FiChevronsLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Loading = styled.div`
  color: ${({ theme }) => theme.colors.brightest};
  font-size: 30px;
  font-weight: bold;
  display: flex;
  align-self: center;
  flex-direction: column;
  line-height: 1.9;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
`;
export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  justify-items: center;

  img {
    width: 80px;
    margin-top: 5px;
    align-self: center;
    border-radius: 50%;
  }

  h1 {
    font-size: 30px;
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.title};
  }
  h2 {
    font-size: 26px;
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.title};
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.sub_title};
    line-height: 1.4;
    text-align: center;
  }
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
  size: 40,
})`
  color: ${({ theme }) => theme.colors.brightest};
  animation: ${rotate} 2s linear infinite;
`;
export const IconChevLeft = styled(FiChevronsLeft).attrs({
  size: 30,
})`
  color: ${({ theme }) => theme.colors.icons};
`;
export const LinkBackToHome = styled(Link)`
  width: 30px;
`;
export const IssuesList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1.5px solid ${({ theme }) => theme.colors.brightest};
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    margin-top: 10px;

    border: 1px solid ${({ theme }) => theme.colors.brightest};
    border-radius: 4px;
  }

  h3 {
    text-align: center;
  }

  & + li {
    margin-top: 10px;
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.brightest};
  }

  div {
    flex: 1;
    margin-left: 15px;

    strong {
      font-size: 16px;

      a {
        text-decoration: none;
        color: #333;

        :hover {
          color: ${({ theme }) => theme.colors.primary};
        }
      }

      span {
        float: right;
        background: #eee;
        color: ${({ theme }) => theme.colors.sub_title};
        border-radius: 2px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        padding: 3px 4px;
      }
    }
  }
  p {
    margin-top: 5px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.sub_title};
  }
`;
