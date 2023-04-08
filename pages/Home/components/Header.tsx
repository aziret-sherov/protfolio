import React, {useState} from 'react';
import {Moon} from "@styled-icons/bootstrap/Moon";
import {Sun} from "@styled-icons/bootstrap/Sun";
import styled from "styled-components";
import Typography from "../../../components/Typhogragy";

const StyledHeader = styled.div`
  width: 100vw;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  background: ${(props: { background: string }) => props.background};
`

const StyledLogo = styled.div`
  display: flex;
  justify-content: end;
  font-family: 'Satisfy', cursive;
  font-size: 2em;
  width: 30%;
  padding-right: 30px;
  color: ${(props: { color: string }) => props.color};
  cursor: pointer;
`

const StyledContent = styled.ul`
  display: flex;
  flex-flow: row;
  width: 30%;
  justify-content: Start;
  margin: 0 5px;

  a {
    display: flex;
    width: 100px;
    text-decoration: none;
    color: ${(props: { color: string }) => props.color};
  }
`

const StyledSwitcher = styled.div`
  display: flex;
  justify-content: start;
  width: 30%;
  cursor: pointer;
  color: ${(props: { color: string }) => props.color};
`

const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  color: ${(props: { color: string }) => props.color};
  font-size: 45px;
  cursor: pointer;
  background: none;
  border: none;
`

const navLinks: any[] = [
    // {
    //     title: 'Work',
    //     link: '',
    // },
    // {
    //     title: 'Post',
    //     link: '',
    // },
    // {
    //     title: 'Git',
    //     link: '',
    // }
]

const Header = () => {
    const [switcherBackground, setSwitcherBackground] = useState<boolean>(true);

    const checkSwitcherBackground = () => {
        if (switcherBackground) {
            return 'black'
        }
        return 'white'
    }

    const checkSwitcherItemColor = () => {
        if (!switcherBackground) {
            return 'black'
        }
        return 'white'
    }

    return (
        <StyledHeader background={checkSwitcherBackground()}>
            <StyledLogo color={checkSwitcherItemColor()}>
                Aziret Sherov
            </StyledLogo>
            <StyledContent color={checkSwitcherItemColor()}>
                {
                    navLinks.map((link, index) => (
                        <Typography>
                            <a key={index} href={'#'}>
                                {link.title}
                            </a>
                        </Typography>
                        ))
                }
            </StyledContent>
            {/*<OpenLinksButton color={checkSwitcherItemColor()} >&#8801;</OpenLinksButton>*/}
            <StyledSwitcher color={checkSwitcherItemColor()}>
                {
                    switcherBackground
                        ? <Moon size={'2em'} onClick={() => setSwitcherBackground(!switcherBackground)}/>
                        : <Sun size={'2em'} onClick={() => setSwitcherBackground(!switcherBackground)}/>
                }
            </StyledSwitcher>
        </StyledHeader>
    );
};

export default Header;
