import { keyframes } from "styled-components";

const backgroundZoomFade = keyframes`
  from {
    transform: scale(1)
    opacity: 1;
  }
  to {
    transform: scale(0.9);
    opacity: 0.4;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const buttonPop = keyframes`
  from {
    transform: scale(1)
  }

  to {
    transform: scale(1.05)
  }
`;

export { backgroundZoomFade, fadeIn, buttonPop };
