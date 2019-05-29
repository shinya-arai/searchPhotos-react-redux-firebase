import React from 'react';

import { connect } from 'react-redux';
import { changeMobileFalse } from '../../actions'; 

import { isMobile, isBrowser, isTablet } from 'react-device-detect';
import { Layer } from 'grommet';

import Menu from './Menu';

class AppNavigation extends React.Component {
  state = { selectedPath: '' };

  onItemSelection = arg => {
    this.setState({ selectedPath: arg.path });
  }

  displayMenu = () => {
    return (
      <Menu 
        selectedPath={this.state.selectedPath}
        onItemSelection={this.onItemSelection}
      />
    );
  }

  style() {
    if(isTablet) {
      return { width: '30%' };
    }
  }

  render() {
    const { mobile, changeMobileFalse } = this.props;

    if(isBrowser) {
      return (
        this.displayMenu()
      );
    }

    if(isMobile && mobile) {
      return (
        <Layer
          position='left'
          full='vertical'
          modal
          onEsc={() => changeMobileFalse()}
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

const mapStateToProps = state => {
  return {
    mobile: state.isOpen.mobile
  }
}

export default connect(mapStateToProps, { changeMobileFalse })(AppNavigation);