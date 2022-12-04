import type {NextPage} from 'next';
import styled from 'styled-components';
import React, {useState} from 'react';
import {Sun} from '@styled-icons/bootstrap/Sun'
import {Moon} from '@styled-icons/bootstrap/Moon'

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
`

const StyledContent = styled.ul`
  display: flex;
  flex-flow: row;
  width: 30%;
  justify-content: Start;
  font-family: 'Roboto Mono', monospace;
  font-size: 1.5em;
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
  color: white;
  font-size: 45px;
  cursor: pointer;
  background: none;
  border: none;
`

const SunIcon = styled(Sun)``

const MoonIcon = styled(Moon)``

const navLinks = [
    {
        title: 'Work',
        link: '',
    },
    {
        title: 'Post',
        link: '',
    },
    {
        title: 'Git',
        link: '',
    }
]

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
                {
                    navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={'#'}>
                            {link.title}
                        </a>))
                }
            </StyledContent>
            <OpenLinksButton>&#8801;</OpenLinksButton>
            <StyledSwitcher color={checkSwitcherItemColor()}>
                {
                    switcherBackground
                        ? <MoonIcon size={'2em'} onClick={() => setSwitcherBackground(!switcherBackground)}/>
                        : <SunIcon size={'2em'} onClick={() => setSwitcherBackground(!switcherBackground)}/>
                }
            </StyledSwitcher>
        </StyledHeader>
    )
}

export default Home
