import styled from 'styled-components';

export const IconWrapper = styled.div`
  width: 8%;
  width: ${props => props.isMobile && '20%'};
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
    background-color: grey;
  }
`;