import React from 'react';
import { isMobile, isBrowser, isTablet } from 'react-device-detect';
import { Layer } from 'grommet';

import Menu from './Menu';

class AppNavigation extends React.Component {
  state = { selectedPath: '' };

  onItemSelection = (arg) => {
    this.setState({ selectedPath: arg.path });
  }

  onOpenModal = () => {
    this.props.onOpenModal();
  }

  onCloseModal = () => {
    this.props.onCloseModal();
  }

  onCloseMobileSide = () => {
    this.props.onCloseMobileSide();
  }

  displayMenu = () => {
    return (
      <Menu 
        isModalOpen={this.props.isModalOpen}
        selectedPath={this.state.selectedPath}
        onSearchPhotos={this.props.onSearchPhotos}
        isPhotos={this.props.isPhotos}
        isOpen={this.props.isOpen}
        onClickHome={this.props.onClickHome}
        onOpenModal={this.onOpenModal}
        onCloseModal={this.onCloseModal}
        onItemSelection={this.onItemSelection}
        onCloseMobileSide={this.onCloseMobileSide}
      />
    );
  }

  style() {
    if(isTablet) {
      return { width: '30%' };
    }
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
          style={this.style()}
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