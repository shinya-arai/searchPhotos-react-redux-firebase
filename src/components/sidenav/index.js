import React from 'react';
import { Nav, SideNav, NavIcon } from 'react-sidenav';
import { Icon } from 'react-icons-kit';
import styled from 'styled-components';

import { home } from 'react-icons-kit/fa/home';
import { search } from 'react-icons-kit/fa/search';

import SearchBar from './SeachModal';

const theme = {
  hoverBgColor: '#f5f5f5',
  selectionBgColor: '#f5f5f5',
  selectionIconColor: '#03A9F4',
};

const Text = styled.div`
  padding-left: 8px;
`;


class AppNavigation extends React.Component {
  state = { selectedPath: '', isModalOpen: false };

  onItemSelection = (arg) => {
    this.setState({ selectedPath: arg.path });
  }

  onModalOpen = () => {
    this.setState({ isModalOpen: true });
  }

  onModalClose = () => {
    this.setState({ isModalOpen: false });
  }

  render() {
    const { isModalOpen } = this.state;
    const { 
      onSearchPhotos, 
      isPhotos, 
      isOpen, 
      onClickHome, 
    } = this.props;

    return (
      <div style={{ height: 0 }}>
        <SideNav
          theme={theme} 
          defaultSelectedPath="home"
          selectedPath={this.state.selectedPath}
          onItemSelection={this.onItemSelection}
        >
          <Nav 
            id={"home"}
            style={!isOpen && {justifyContent: 'center'}}
            onClick={onClickHome}
            className='nav-item'
          >
            <NavIcon>
              <Icon size={25} icon={home} />
            </NavIcon>
            {isOpen && (
              <Text>ホーム</Text>
            )}
          </Nav>
          <Nav 
            id={"search"} 
            style={!isOpen && {justifyContent: 'center'}}
            onClick={this.onModalOpen} 
            className='nav-item'
          >
            <NavIcon>
              <Icon size={25} icon={search} />
            </NavIcon>
            {isOpen && (
              <Text>検索</Text>
            )}
            <Nav>
              aa
            </Nav>
          </Nav>
        </SideNav>

        {isModalOpen && (
          <SearchBar 
            onModalClose={this.onModalClose} 
            onSearchPhotos={onSearchPhotos}
            isPhotos={isPhotos}
          />
        )}

      </div>
    );
  } 
};

export default AppNavigation;