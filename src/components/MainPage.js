import React from 'react';
import unsplash from '../apis/unsplash';

import AppNavigation from './SideNav';
import NavBar from './NavBar';
import ImageList from './Images/ImageList';

import { 
  NavbarContainer, 
  SideNavContainer, 
  Title, 
  ImageListContainer,
  SearchTerm,
  ContentsWrapper,
} from '../styled/MainPage';


class MainPage extends React.Component {
  state = { photos: [], term: '', isPhotos: null, isOpen: true };

  async componentDidMount() {
    const response = await unsplash.get('/photos', {
      params: {
        order_by: 'popular'
      }
    });

    this.setState({ photos: response.data, isPhotos: true });
  }

  onClickHome = async () => {
    const response = await unsplash.get('/photos', {
      params: {
        order_by: 'popular'
      }
    });

    this.setState({ photos: response.data, term: '人気の写真' });
  }

  onSearchPhotos = async (term) =>  {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term,
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

  toggleChangeWidth = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { isOpen } = this.state;
    console.log(this.state.photos);

    return (
      <div style={{ display: 'flex', height: '100vh' }}>

        <SideNavContainer style={isOpen ? { width: '15%' } : { width: '5%' }}>
          <Title></Title>
          <AppNavigation 
            onSearchPhotos={this.onSearchPhotos} 
            isPhotos={this.state.isPhotos}
            isOpen={isOpen}
            onClickHome={this.onClickHome}
          />
        </SideNavContainer>

        <ContentsWrapper style={isOpen ? { width: '85%' } : { width: '95%' }}>
          <NavbarContainer>
            <NavBar toggleChangeWidth={this.toggleChangeWidth} />
          </NavbarContainer>

          <div className="ui raised segment" style={{ margin: 0, height: '5rem', padding: 0 }}>
            <SearchTerm>
              {this.displayTerm()}
            </SearchTerm>
          </div>

          <ImageListContainer>
            <ImageList photos={this.state.photos} />
          </ImageListContainer>
        </ContentsWrapper>
    
      </div>
    );
  }
}

export default MainPage;