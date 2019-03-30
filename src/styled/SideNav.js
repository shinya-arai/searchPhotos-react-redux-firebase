import styled from 'styled-components';

export const SideNavContainer = styled.div`
  background-color: #1C1E21;
  width: ${props => props.isOpen ? '15%' : '5%'};
  width: ${props => props.isMobile && '100%'};
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
`;

export const theme = {
  hoverBgColor: '#f5f5f5',
  selectionBgColor: '#f5f5f5',
  selectionIconColor: '#03A9F4',
};

export const Text = styled.div`
  padding-left: 8px;
`;