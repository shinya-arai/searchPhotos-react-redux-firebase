import styled from 'styled-components';

export const WholeWrapper = styled.div`
  height: 100vh;
  display: flex;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.isOpen ? '85%' : '95%'};
  width: ${props => props.isMobile && '100%'};
`;

export const NavBarContainer = styled.div`
  width: 100%;
  background-color: #1C1E21;
`;

export const ImageListContainer = styled.div`
  padding: 10px;
  display: flex; 
  flex-wrap: wrap;
  justify-content: space-around;
  overflow-y: scroll;
  background-color: ghostwhite;
`;

export const SearchTerm = styled.span`
  line-height: 5rem;
  padding-left: 2rem;
  font-size: large;
  font-weight: bold;
`;