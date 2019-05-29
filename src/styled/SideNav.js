import styled from 'styled-components';

export const SideNavContainer = styled.div`
  background-color: #1C1E21;
  width: ${props => props.isOpen ? '15%' : '5%'};
  width: ${props => props.isMobile && '100%'};

  transition: 0.5s;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  color: ghostwhite;
`;

export const theme = {
  hoverBgColor: '#f5f5f5',
  selectionBgColor: '#f5f5f5',
  selectionIconColor: '#03A9F4',
};

export const HomeText = styled.div`
  padding-left: 8px;
  color: ${props => props.selected && props.isBrowser && 'ghostwhite'}
`;

export const SearchText = styled.div`
  padding-left: 8px;
  color: ${props => props.selected && props.isBrowser && 'ghostwhite'}
`;