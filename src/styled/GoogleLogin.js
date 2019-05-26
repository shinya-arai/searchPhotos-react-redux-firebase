import styled from 'styled-components';

export const GoogleLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

export const GoogleLoginButton = styled.div`
  width: ${props => props.isBrowser && '26%'};
  width: ${props => props.isMobile && '80%'};
  width: ${props => props.isTablet && '36%'};
  box-shadow: 0 0 6px gray !important;
  font-weight: bold !important;
  font-size: large !important;
  display: flex;
  align-items: center !important;
  cursor: pointer;
`;