import React, { ReactElement } from "react";
import styled from "styled-components";

const StyledTypography = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 1.5em;
`;

const Typography = ({ children }: { children: string | ReactElement }) => {
  return <StyledTypography>{children}</StyledTypography>;
};

export default Typography;
