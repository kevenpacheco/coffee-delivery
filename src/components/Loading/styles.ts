import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;

  svg {
    @keyframes animate-svg-fill-1 {
      0% {
        fill: transparent;
      }

      100% {
        fill: rgb(128, 71, 248);
      }
    }

    .svg-elem-1 {
      animation: animate-svg-fill-1 0.7s ease-in-out 0.8s both;
    }

    .svg-elem-2 {
      animation: animate-svg-fill-1 0.7s ease-in-out 0.9s both;
    }

    @keyframes animate-svg-fill-3 {
      0% {
        fill: transparent;
      }

      100% {
        fill: rgb(64, 57, 55);
      }
    }

    .svg-elem-3 {
      animation: animate-svg-fill-3 0.7s ease-in-out 1s both;
    }

    .svg-elem-4 {
      animation: animate-svg-fill-3 0.7s ease-in-out 1.1s both;
    }

    .svg-elem-5 {
      animation: animate-svg-fill-3 0.7s ease-in-out 1.2000000000000002s both;
    }

    .svg-elem-6 {
      animation: animate-svg-fill-3 0.7s ease-in-out 1.3s both;
    }

    .svg-elem-7 {
      animation: animate-svg-fill-3 0.7s ease-in-out 1.4000000000000001s both;
    }

    .svg-elem-8 {
      animation: animate-svg-fill-3 0.7s ease-in-out 1.5s both;
    }

    .svg-elem-9 {
      animation: animate-svg-fill-3 0.7s ease-in-out 1.6s both;
    }

    .svg-elem-10 {
      animation: animate-svg-fill-3 0.7s ease-in-out 1.7000000000000002s both;
    }

    .svg-elem-11 {
      animation: animate-svg-fill-3 0.7s ease-in-out 1.8s both;
    }

    .svg-elem-12 {
      animation: animate-svg-fill-3 0.7s ease-in-out 1.9000000000000001s both;
    }

    .svg-elem-13 {
      animation: animate-svg-fill-3 0.7s ease-in-out 2s both;
    }

    .svg-elem-14 {
      animation: animate-svg-fill-3 0.7s ease-in-out 2.1s both;
    }

    .svg-elem-15 {
      animation: animate-svg-fill-3 0.7s ease-in-out 2.2s both;
    }

    .svg-elem-16 {
      animation: animate-svg-fill-3 0.7s ease-in-out 2.3s both;
    }

  }
`;