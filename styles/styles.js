import styled from "styled-components";
import Image from "next/image";

export const StyledUnorderedList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

export const StyledListPageButton = styled.button`
  background-color: #19cbe7;
  color: black;
  border: none;
  padding: 10px;
  border-radius: 50%;
  font-size: 16px;
  cursor: pointer;
  gap: none;
  svg {
    fill: black;
    width: 25px;
    height: 25px;
  }
`;

export const Container = styled.div`
  margin: 10px;
  max-width: 800px;
`;

export const Card = styled.article`
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  max-width: 800px;
  border-radius: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

export const Header = styled.main`
  padding: 10px;
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
  color: black;
  text-decoration: none;
  font-size: 18px;
`;

export const StyledCardLink = styled.a`
  text-decoration: none;
  color: black;
`;

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: none;
  padding-top: 0;
  padding-bottom: 5px;
  text-align: center;
`;

export const StyledImageLogo = styled(Image)`
  /* Add any custom styles for the image here if needed */
`;
