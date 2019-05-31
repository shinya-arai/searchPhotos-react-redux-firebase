import React from 'react';

import { connect } from 'react-redux';
import { 
  changeMobileFalse, 
  changeModal, 
  changeWeb, 
  fetchLatestPhotos,
  addPhotos,
  loadingTrue
} from '../actions';

import { Waypoint } from 'react-waypoint';

import AppNavigation from './SideNav';
import NavBar from './NavBar';
import Images from './Images';
import Waiting from './Loading/waiting';

import { 
  NavBarContainer, 
  ImageListContainer,
  SearchTerm,
  ContentsWrapper,
  WholeWrapper
} from '../styled/MainPage';


class MainPage extends React.Component {

  componentDidMount() {
    this.props.fetchLatestPhotos();
  }

  displayTerm = () => {
    if (!this.props.term) {
      return <>Latest Photos</>;
    } else {
      return <>{this.props.term}</>;
    }
  };

  loading = () => {
    this.props.loadingTrue();

    this.props.addPhotos();
  };

  render() {
    const { web, loading } = this.props;

    return (
      <WholeWrapper>
        
        <AppNavigation />

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
            <Images />
            <Waypoint onEnter={this.loading} />
            {loading && (
              <div style={{ position: 'absolute', bottom: '2rem' }}>
                <Waiting />
              </div>
            )}
          </ImageListContainer>
        </ContentsWrapper>

      </WholeWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    web: state.isOpen.web,
    term: state.photo.term,
    loading: state.photo.loading
  };
}

export default connect(
  mapStateToProps,
  { changeMobileFalse, changeModal, changeWeb, fetchLatestPhotos, addPhotos, loadingTrue }
)(MainPage);