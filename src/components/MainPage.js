import React from 'react';
import unsplash from '../apis/unsplash';

import AppNavigation from './sidenav';
import Navbar from './navbar';
import ImageList from './Images/ImageList';
import { NavbarContainer } from '../styled/navbar';
import { SideNavContainer, Title } from '../styled/sidenav';


class MainPage extends React.Component {
  state = { photos: [] };

  async componentDidMount() {
    const response = await unsplash.get('/photos', {
      params: {
        order_by: 'popular'
      }
    });

    this.setState({ photos: response.data });
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>

        <SideNavContainer>
          <Title>SideNav</Title>
          <AppNavigation />   {/* sidenav */}
        </SideNavContainer>

        <div style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>

          <NavbarContainer>
            <Navbar />   {/* navbar */}
          </NavbarContainer>

          <div className="ui raised segment" style={{ margin: 0, height: '5rem', padding: 0 }}>
            <span style={{ lineHeight: '5rem', paddingLeft: '2rem' }}>選択したもの</span>
          </div>


          <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }} >
            <ImageList photos={this.state.photos} />
          </div>

        </div>
      </div>
    );
  }
}

export default MainPage;