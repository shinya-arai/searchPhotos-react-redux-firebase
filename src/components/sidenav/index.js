import React from 'react';
import { Nav, SideNav, NavIcon } from 'react-sidenav';
import { Icon } from 'react-icons-kit';
import styled from 'styled-components';

import { home } from 'react-icons-kit/fa/home';
import { ic_menu } from 'react-icons-kit/md/ic_menu';
import { toggleRight } from 'react-icons-kit/fa/toggleRight';

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

  onOpen = () => {
    this.setState({ isModalOpen: true });
  }

  onClose = () => {
    this.setState({ isModalOpen: false });
  }

  render() {
    const { isModalOpen } = this.state;
    const { onSearchPhotos, isPhotos, isOpen } = this.props;

    return (
      <div style={{ height: 0 }}>
        <SideNav
          theme={theme} 
          defaultSelectedPath="home"
          selectedPath={this.state.selectedPath}
          onItemSelection={this.onItemSelection}
        >
          <Nav onClick={this.onOpen} id={"home"}>
            <NavIcon>
              <Icon size={40} icon={home} />
            </NavIcon>
            {isOpen && (
              <Text>Home</Text>
            )}
          </Nav>
          <Nav id={"menu"}>
            <NavIcon>
              <Icon size={40} icon={ic_menu} />
            </NavIcon>
            {isOpen && (
              <Text>Menu</Text>
            )}
          </Nav>
          <Nav id={"toggle"}>
            <NavIcon>
              <Icon size={40} icon={toggleRight} />
            </NavIcon>
            {isOpen && (
              <Text>ToggleRight</Text>
            )}
          </Nav>
        </SideNav>

        { isModalOpen && (
          <SearchBar 
            onClose={this.onClose} 
            onSearchPhotos={onSearchPhotos}
            isPhotos={isPhotos}
          />
        )}

      </div>
    );
  } 
};

export default AppNavigation;