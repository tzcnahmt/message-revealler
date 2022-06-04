import styled from 'styled-components';

export const LayoutContainer = styled.div`
  position: relative;
  font-family: 'Cabinet Grotesk', sans-serif;
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #f28f3b;
  overflow: hidden;

  & h1 {
    margin-top: 10rem;
    margin-left: 3rem;
    margin-right: 3rem;
    font-weight: 600;
    word-spacing: 25px;
    line-height: 0.9;
    text-transform: uppercase;
    font-size: clamp(48px, 6vw, 120px);
    z-index: 2;
    pointer-events: none;
  }
`;
