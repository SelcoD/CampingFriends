import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
`;

export const Card = styled.div`
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

export const Header = styled.header`
  padding: 20px;
  color: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.footer`
  padding: 20px;
  color: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
