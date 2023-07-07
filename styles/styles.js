import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
  background-color: red;
`;

export const Card = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 800px;
  border-radius: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const Header = styled.header`
  background: linear-gradient(to right, #e66465, #9198e5);
  padding: 20px;
  color: #ffffff;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #9198e5;
`;

export const Footer = styled.footer`
  background: linear-gradient(to right, #e66465, #9198e5);
  padding: 20px;
  color: #ffffff;
`;
