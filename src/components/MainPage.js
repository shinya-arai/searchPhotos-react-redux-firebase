import React from 'react';
import unsplash from '../apis/unsplash';

import AppNavigation from './sidenav';
import Navbar from './navbar';
import ImageList from './Images/ImageList';
import { NavbarContainer } from '../styled/navbar';
import { SideNavContainer, Title } from '../styled/sidenav';


class MainPage extends React.Component {
  state = { photos: [], term: '', isPhotos: null };

  async componentDidMount() {
    const response = await unsplash.get('/photos', {
      params: {
        order_by: 'popular'
      }
    });

    this.setState({ photos: response.data, isPhotos: true });
  }

  onSearchPhotos = async (term) =>  {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term,
        order_by: 'popular'
      }
    });

    if(!response.data.total) {
      this.setState({ isPhotos: false });
    } else {
      this.setState({ photos: response.data.results, term: term, isPhotos: true });
    }
  }

  displayTerm = () => {
    if (!this.state.term) {
      return <>人気の写真</>;
    } else {
      return <>{this.state.term}</>;
    }
  };

  render() {
    return (
      <div style={{ display: 'flex', height: '100vh' }}>

        <SideNavContainer>
          <Title>写真館</Title>
          <AppNavigation onSearchPhotos={this.onSearchPhotos} isPhotos={this.state.isPhotos} />   {/* sidenav */}
        </SideNavContainer>

        <div style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
          <NavbarContainer>
            <Navbar />   {/* navbar */}
          </NavbarContainer>

          <div className="ui raised segment" style={{ margin: 0, height: '5rem', padding: 0 }}>
            <span style={{ lineHeight: '5rem', paddingLeft: '2rem', fontFamily: 'serif', fontSize: 'large' }}>
              {this.displayTerm()}
            </span>
          </div>


          <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', overflowY: 'scroll', backgroundColor: 'ghostwhite' }} >
            <ImageList photos={this.state.photos} />
          </div>
        </div>
    
      </div>
    );
  }
}

export default MainPage;