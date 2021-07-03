import styled, { css } from "styled-components";
import media from "styled-media-query";

import { Container } from "@/components/Container";
import * as HeadingStyles from "@/components/Heading/Heading.styles";
import * as HighlightStyles from "@/components/Highlight/Highlight.styles";
import * as GameCardSliderStyles from "@/components/GameCardSlider/GameCardSlider.styles";

export const Wrapper = styled(Container).attrs({ as: "div" })`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    ${HighlightStyles.Wrapper},
    ${GameCardSliderStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${HighlightStyles.Wrapper} {
      ${media.lessThan("medium")`
        margin-right: calc((${theme.gridLayout.gutter} / 2) * -1);
        margin-left: calc((${theme.gridLayout.gutter} / 2) * -1);
      `}
    }

    ${GameCardSliderStyles.Wrapper} {
      ${media.lessThan("huge")`
        margin-right: calc((${theme.gridLayout.gutter} / 2) * -1);
      `}
    }
  `}
`;
