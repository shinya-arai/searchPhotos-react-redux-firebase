import React from 'react';
import { menu } from 'react-icons-kit/iconic/menu';
import { Icon } from 'react-icons-kit';
import { Dropdown } from 'semantic-ui-react';

const NavBar = () => {
  return (
    <div className="ui secondary pointing menu" style={{ height: '5rem', paddingBottom: '1rem' }}>
      <div className="ui item"><Icon style={{ color: 'white' }} icon={menu} /></div>
      <div className="ui right item" style={{ marginRight: '40px' }}>
        <Dropdown style={{ color: 'white' }} text="名前">
          <Dropdown.Menu>
            <Dropdown.Item text="ログアウト" />
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default NavBar;