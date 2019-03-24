import React from 'react';
import { Nav, SideNav, NavIcon } from 'react-sidenav';
import { Icon } from 'react-icons-kit';
import styled from 'styled-components';

import { home } from 'react-icons-kit/fa/home';
import { ic_menu } from 'react-icons-kit/md/ic_menu';
import { toggleRight } from 'react-icons-kit/fa/toggleRight';

import SearchBar from './SeachBar';

const theme = {
  hoverBgColor: '#f5f5f5',
  selectionBgColor: '#f5f5f5',
  selectionIconColor: '#03A9F4',
};

const Text = styled.div`
  padding-left: 8px;
`;


class AppNavigation extends React.Component {
  state = { selectedPath: '', isOpen: false };

  onItemSelection = (arg) => {
    this.setState({ selectedPath: arg.path });
  }

  onOpen = () => {
    this.setState({ isOpen: true });
  }

  onClose = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen } = this.state;
    const { onSearchPhotos, isPhotos } = this.props;

    return (
      <>
        <SideNav
          theme={theme} 
          defaultSelectedPath="home"
          selectedPath={this.state.selectedPath}
          onItemSelection={this.onItemSelection}
        >
          <Nav onClick={this.onOpen} id={"home"}>
            <NavIcon>
              <Icon icon={home} />
            </NavIcon>
            <Text>Home</Text>
          </Nav>
          <Nav id={"menu"}>
            <NavIcon>
              <Icon icon={ic_menu} />
            </NavIcon>
            <Text>Menu</Text>
          </Nav>
          <Nav id={"toggle"}>
            <NavIcon>
              <Icon icon={toggleRight} />
            </NavIcon>
            <Text>ToggleRight</Text>
          </Nav>
        </SideNav>

        { isOpen && (
          <SearchBar 
            onClose={this.onClose} 
            onSearchPhotos={onSearchPhotos}
            isPhotos={isPhotos}
          />
        )}

      </>
    );
  } 
};

export default AppNavigation;