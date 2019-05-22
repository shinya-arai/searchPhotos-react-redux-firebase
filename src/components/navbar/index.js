import React from 'react';
import { alignRight } from 'react-icons-kit/fa/alignRight'
import { Icon } from 'react-icons-kit';
import { Dropdown } from 'semantic-ui-react';
import { isMobile, isTablet } from 'react-device-detect';

import { IconWrapper } from '../../styled/NavBar';

class NavBar extends React.Component {
  toggleSideChange = () => {
    this.props.toggleSideChange()
  }

  render() {
    return (
      <div className="ui secondary pointing menu navbar-wrapper">
        <IconWrapper onClick={this.toggleSideChange} isMobile={isMobile} isTablet={isTablet}>
          <Icon size={40} icon={alignRight} className="icon" />
        </IconWrapper>
        <div className="ui right item drop-wrapp">
          <Dropdown className="drop-contents" text="名前">
            <Dropdown.Menu>
              <Dropdown.Item text="ログアウト" />
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  }
};

export default NavBar;