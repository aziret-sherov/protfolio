import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Typography from "../../../components/Typhogragy";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;

  @media only screen and (min-width: 768px) {
    margin-top: 100px;
  }
`;

const ProfileImage = styled(Image)`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 16px;

  @media only screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
    margin-bottom: 24px;
  }
`;

const ProfileName = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 8px;

  @media only screen and (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 12px;
  }
`;

const ProfileProfession = styled.h2`
  font-size: 18px;
  text-align: center;
  margin-bottom: 8px;

  @media only screen and (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 12px;
  }
`;

const NetworkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

const NetworkItem = styled.li`
  margin: 0 8px;

  @media only screen and (min-width: 768px) {
    margin: 0 16px;
  }
`;

const NetworkLink = styled.a`
  font-size: 18px;
  color: #333;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;

  &:hover {
    transform: scale(1.1);
  }

  @media only screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

const NetworkIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 4px;

  @media only screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }
`;

const Content: React.FC = () => {
  return (
    <ProfileContainer>
      <ProfileImage
        src="/profile_image.JPG"
        alt="Profile image"
        width={120}
        height={120}
        objectFit="cover"
        className="profile-image"
      />
      <ProfileName>
        <Typography>Aziret Sherov</Typography>
      </ProfileName>
      <ProfileProfession>
        <Typography>Software Engineer</Typography>
      </ProfileProfession>
      <NetworkList>
        <NetworkItem>
          <NetworkLink
            href="https://www.linkedin.com/in/aziret-sherov/"
            target="_blank"
          >
            <NetworkIcon src="/linkedin-icon.svg" alt="LinkedIn" />
            <span>LinkedIn</span>
          </NetworkLink>
        </NetworkItem>
        <NetworkItem>
          <NetworkLink href="https://github.com/aziret-sherov" target="_blank">
            <NetworkIcon src="/github-icon.svg" alt="GitHub" />
            <span>GitHub</span>
          </NetworkLink>
        </NetworkItem>
        <NetworkItem>
          <NetworkLink href="https://twitter.com/AziretSherov" target="_blank">
            <NetworkIcon src="/twitter-icon.svg" alt="Twitter" />
            <span>Twitter</span>
          </NetworkLink>
        </NetworkItem>
      </NetworkList>
    </ProfileContainer>
  );
};

export default Content;
