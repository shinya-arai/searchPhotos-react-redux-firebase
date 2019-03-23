import React from 'react';
import { menu } from 'react-icons-kit/iconic/menu';
import { Icon } from 'react-icons-kit';
import { Dropdown } from 'semantic-ui-react';

import AppNavigation from './sidenav';
import { NavbarContainer } from '../styled/navbar';
import { SideNavContainer, Title } from '../styled/sidenav';


class MainPage extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <SideNavContainer>
          <Title>SideNav</Title>
          <AppNavigation />
        </SideNavContainer>
        <div style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
          <NavbarContainer>
            <div className="ui secondary pointing menu" style={{ height: '5rem', paddingBottom: '1rem' }}>
              <div className="ui item"><Icon icon={menu} /></div>
              <div class="ui right item" style={{ marginRight: '40px' }}>
                <Dropdown text="名前">
                  <Dropdown.Menu>
                    <Dropdown.Item text="ログアウト" />
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </NavbarContainer>
          
        </div>
      </div>
    );
  }
}

export default MainPage;