import React from 'react';

import { connect } from 'react-redux';
import { changeMobileFalse, changeModal, changeWeb } from '../actions';

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

    if(!this.props.web) {
      this.props.changeWeb();
    }

    this.setState({ photos: response.data, term: 'Latest Photos' });
    this.props.changeMobileFalse();
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
      });

      this.props.changeModal();
    } 

    else if(response.data.total && isMobile) {
      this.setState({ 
        photos: response.data.results, 
        term: term, 
        isPhotos: true, 
      });

      this.props.changeModal();
      this.props.changeMobileFalse();
    }    
  }

  displayTerm = () => {
    if (!this.state.term) {
      return <>Latest Photos</>;
    } else {
      return <>{this.state.term}</>;
    }
  };

  render() {
    const { isPhotos, photos } = this.state;
    const { web } = this.props;

    return (
      <WholeWrapper>
        <AppNavigation 
          onSearchPhotos={this.onSearchPhotos} 
          isPhotos={isPhotos}
          onClickHome={this.onClickHome}
        />
        <ContentsWrapper isOpen={web} isMobile>
          <NavBarContainer>
            <NavBar />
          </NavBarContainer>
          <div className="ui raised segment term-wrapper">
            <SearchTerm>
              {this.displayTerm()}
            </SearchTerm>
          </div>
          <ImageListContainer>
            <Images photos={photos} />
          </ImageListContainer>
        </ContentsWrapper>
      </WholeWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    web: state.isOpen.web
  };
}

export default connect(mapStateToProps, { changeMobileFalse, changeModal, changeWeb })(MainPage);