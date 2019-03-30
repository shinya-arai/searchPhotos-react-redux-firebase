import React from 'react';
import { isMobile, isBrowser } from 'react-device-detect';
import { Layer } from 'grommet';

import Menu from './Menu';

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

  onCloseMobileSide = () => {
    this.props.onCloseMobileSide();
  }

  displayMenu = () => {
    return (
      <Menu 
        isModalOpen={this.state.isModalOpen} 
        selectedPath={this.state.selectedPath}
        onSearchPhotos={this.props.onSearchPhotos}
        isPhotos={this.props.isPhotos}
        isOpen={this.props.isOpen}
        onClickHome={this.props.onClickHome}
        onModalOpen={this.onModalOpen}
        onModalClose={this.onModalClose}
        onItemSelection={this.onItemSelection}
        onCloseMobileSide={this.onCloseMobileSide}
      />
    );
  }

  render() {
    const { isMobileSideOpen } = this.props;

    if(isBrowser) {
      return (
        this.displayMenu()
      );
    }

    if(isMobile && isMobileSideOpen) {
      return (
        <Layer
          position='left'
          full='vertical'
          modal
          onEsc={this.onCloseMobileSide}
        >
          {this.displayMenu()}
        </Layer>
      );
    }

    if(isMobile) {
      return null;
    }
  } 
};

export default AppNavigation;