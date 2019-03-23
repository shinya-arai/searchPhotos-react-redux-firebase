import React, { Component } from 'react';
import { SideNavContainer, Title } from '../styled/sidenav';

import AppNavigation from './sidenav';


class MainPage extends Component {
  state = { selectedPath: 'home'};

  changePath = (path) => {
    this.setState({ selectedPath: path });
  }

  displayText = () => {
    return (
      <div>
        {this.state.selectedPath}
      </div>
    );
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <SideNavContainer>
          <Title>SideNav</Title>
          <AppNavigation changePath={this.changePath} />
        </SideNavContainer>
        {this.displayText()}
      </div>
    );
  }
}

export default MainPage;