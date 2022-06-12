import type {NextPage} from 'next';
import styled from 'styled-components';
import React, {useState} from 'react';
import {MoonIcon, SunIcon} from '@chakra-ui/icons';

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
  font-size: 25px;
  width: 30%;
  padding-right: 30px;
  color: ${(props: { color: string }) => props.color};
`

const StyledContent = styled.ul`
  display: flex;
  flex-flow: row;
  width: 30%;
  justify-content: Start;
  font-family: 'Roboto Mono', monospace;
  font-size: 20px;
  margin: 0 5px;

  li {
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
  color: ${(props: { color: string }) => props.color};
`

const Home: NextPage = () => {
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
                <li>Work</li>
                <li>Posts</li>
                <li>Git</li>
            </StyledContent>
            <StyledSwitcher color={checkSwitcherItemColor()}>
                {
                    switcherBackground
                        ? <MoonIcon onClick={() => setSwitcherBackground(!switcherBackground)}/>
                        : <SunIcon onClick={() => setSwitcherBackground(!switcherBackground)}/>
                }
            </StyledSwitcher>
        </StyledHeader>
    )
}

export default Home
