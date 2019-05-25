import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions';

import { alignRight } from 'react-icons-kit/fa/alignRight'
import { Icon } from 'react-icons-kit';

import { Dropdown } from 'semantic-ui-react';
import { isMobile, isTablet } from 'react-device-detect';

import { IconWrapper } from '../../styled/NavBar';

class NavBar extends React.Component {

  componentDidMount() {
    this.props.fetchUser();
  }
  
  toggleSideChange = () => {
    this.props.toggleSideChange()
  }

  text = () => {
    if(!this.props.user) {
      return null;
    }

    return (
      `ようこそ！ ${this.props.user.displayName} さん`
    );
  }

  render() {
    return (
      <div className="ui secondary pointing menu navbar-wrapper">
        <IconWrapper onClick={this.toggleSideChange} isMobile={isMobile} isTablet={isTablet}>
          <Icon size={40} icon={alignRight} className="icon" />
        </IconWrapper>
        <div className="ui right item drop-wrapp">
          <Dropdown className="drop-contents" text={this.text()}>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => console.log('a')} text="ログアウト" />
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, { fetchUser })(NavBar);