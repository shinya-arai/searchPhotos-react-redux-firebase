import React from 'react';
import { isMobile, isBrowser } from 'react-device-detect';

import unsplash from '../apis/unsplash';

import AppNavigation from './SideNav';
import NavBar from './NavBar';
import Images from './Images';

import { 
  NavBarContainer, 
  ImageListContainer,
  SearchTerm,
  ContentsWrapper,
  WholeWrapper
} from '../styled/MainPage';


class MainPage extends React.Component {
  state = { 
    photos: [],
    term: '', 
    isPhotos: null,
    isOpen: true,
    isMobileSideOpen: false,
    isModalOpen: false,
  };

  async componentDidMount() {
    const response = await unsplash.get('/photos', {
      params: {
        order_by: 'latest'
      }
    });

    this.setState({ photos: response.data, isPhotos: true });
  }

  onClickHome = async () => {
    const response = await unsplash.get('/photos', {
      params: {
        order_by: 'latest'
      }
    });

    this.setState({ photos: response.data, term: 'Latest Photos' });
  }

  onSearchPhotos = async term =>  {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term,
      }
    });

    if(!response.data.total) {
      this.setState({ isPhotos: false });
    } 

    else if(response.data.total && isBrowser) {
      this.setState({ 
        photos: response.data.results, 
        term: term, 
        isPhotos: true, 
        isModalOpen: false,
      });
    } 
    
    else if(response.data.total && isMobile) {
      this.setState({ 
        photos: response.data.results, 
        term: term, 
        isPhotos: true, 
        isModalOpen: false, 
        isMobileSideOpen: false,
      });
    }    
  }

  displayTerm = () => {
    if (!this.state.term) {
      return <>Latest Photos</>;
    } else {
      return <>{this.state.term}</>;
    }
  };

  toggleSideChange = () => {
    if(isMobile) {
      this.setState({ isMobileSideOpen: !this.state.isMobileSideOpen });
    }

    if(isBrowser) {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }

  onCloseMobileSide = () => {
    this.setState({ isMobileSideOpen: false });
  }

  onCloseModal = () => {
    this.setState({ isModalOpen: false });
  }

  onOpenModal = () => {
    this.setState({ isModalOpen: true });
  }

  render() {
    const { isOpen, isMobileSideOpen, isModalOpen } = this.state;

    return (
      <WholeWrapper>
        
        <AppNavigation 
          onSearchPhotos={this.onSearchPhotos} 
          isPhotos={this.state.isPhotos}
          isOpen={isOpen}
          onClickHome={this.onClickHome}
          isMobileSideOpen={isMobileSideOpen}
          onCloseMobileSide={this.onCloseMobileSide}
          isModalOpen={isModalOpen}
          onCloseModal={this.onCloseModal}
          onOpenModal={this.onOpenModal}
        />

        <ContentsWrapper isOpen={isOpen} isMobile>
          <NavBarContainer>
            <NavBar toggleSideChange={this.toggleSideChange} />
          </NavBarContainer>

          <div className="ui raised segment term-wrapper">
            <SearchTerm>
              {this.displayTerm()}
            </SearchTerm>
          </div>

          <ImageListContainer>
            <Images photos={this.state.photos} />
          </ImageListContainer>
        </ContentsWrapper>
    
      </WholeWrapper>
    );
  }
}

export default MainPage;