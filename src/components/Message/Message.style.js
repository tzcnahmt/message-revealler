import styled from 'styled-components';

export const MessageLayout = styled.div`
  position: absolute;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  transform: rotate(${(props) => props.rotate}deg);
  font-size: 18px;
  width: 100%;
  max-width: 270px;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
  background-color: white;
  border-radius: 10px;
  line-height: 1.2;
  font-weight: 600;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.5rem;
  gap: 10px;
  will-change: opacity scale;
  z-index: ${(props) => props.index};

  & p {
    margin-left: 5px;
  }
`;
