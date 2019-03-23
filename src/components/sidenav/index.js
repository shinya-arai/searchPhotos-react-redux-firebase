import React from 'react';
import { Nav, SideNav, NavIcon } from 'react-sidenav';
import { Icon } from 'react-icons-kit';
import styled from 'styled-components';

import { home } from 'react-icons-kit/fa/home';
import { ic_menu } from 'react-icons-kit/md/ic_menu';
import { toggleRight } from 'react-icons-kit/fa/toggleRight';

const theme = {
  hoverBgColor: '#f5f5f5',
  selectionBgColor: '#f5f5f5',
  selectionIconColor: '#03A9F4',
};

const Text = styled.div`
  padding-left: 8px;
`;


class AppNavigation extends React.Component {
  state = { selectedPath: ''};

  onItemSelection = (arg) => {
    this.setState({ selectedPath: arg.path });
  };

  render() {
    return (
      <SideNav
        theme={theme} 
        defaultSelectedPath="home"
        selectedPath={this.state.selectedPath}
        onItemSelection={this.onItemSelection}
      >
        <Nav id={"home"}>
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
    );
  } 
};

export default AppNavigation;