import React from 'react';
import { alignRight } from 'react-icons-kit/fa/alignRight'
import { Icon } from 'react-icons-kit';
import { Dropdown } from 'semantic-ui-react';

class NavBar extends React.Component {

  toggleChangeWidth = () => {
    this.props.toggleChangeWidth();
  }

  render() {
    return (
      <div className="ui secondary pointing menu" style={{ height: '5rem', paddingBottom: '1rem' }}>
        <div onClick={this.toggleChangeWidth} className="icon-nav">
          <Icon size={40} icon={alignRight} style={{ color: 'white' }} />
        </div>
        <div className="ui right item" style={{ marginRight: '40px' }}>
          <Dropdown style={{ color: 'white' }} text="名前">
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