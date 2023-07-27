import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
`;

export const Card = styled.article`
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0px;
  margin-bottom: 10px;
  width: 100%;
  max-width: 800px;
  border-radius: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.main`
  padding: 20px;
  color: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CenteredLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

export const CenteredLink = styled.a`
  color: blue;
  text-decoration: none;
  font-size: 18px;
`;
