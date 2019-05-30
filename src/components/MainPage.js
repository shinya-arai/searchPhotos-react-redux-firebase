import React from 'react';

import { connect } from 'react-redux';
import { 
  changeMobileFalse, 
  changeModal, 
  changeWeb, 
  fetchLatestPhotos,
  addLatestPhotos
} from '../actions';

// import InfiniteScroll from 'react-infinite-scroller';
import { Waypoint } from 'react-waypoint';

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

  render() {
    const { web } = this.props;

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
                <Waypoint onEnter={() => console.log('aa')} />
              </ImageListContainer>
            </ContentsWrapper>

      </WholeWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    web: state.isOpen.web,
    term: state.photo.term
  };
}

export default connect(
  mapStateToProps, 
  { changeMobileFalse, changeModal, changeWeb, fetchLatestPhotos, addLatestPhotos }
)(MainPage);