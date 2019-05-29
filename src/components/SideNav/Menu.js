import React from 'react';

import { connect } from 'react-redux';
import { 
  changeMobileFalse, 
  changeModal, 
  changeModalAndWeb, 
  fetchLatestPhotos,
  changeWeb
} from '../../actions';

import { Transition } from 'react-transition-group';
import { Nav, SideNav, NavIcon } from 'react-sidenav';
import { isMobile, isBrowser } from 'react-device-detect';
import { Button } from 'grommet';
import { Close } from 'grommet-icons';

import { Icon } from 'react-icons-kit';
import { home } from 'react-icons-kit/fa/home';
import { search } from 'react-icons-kit/fa/search';

import SearchModal from './SeachModal';

import { 
  SideNavContainer, 
  theme, 
  HomeText, 
  SearchText, 
  Title 
} from '../../styled/SideNav';

class Menu extends React.Component {
  state = { selectedHome: true, selectedSearch: false };

  onItemSelection = arg => {
    this.props.onItemSelection(arg);
    
    switch(arg.path) {
      case 'home':
        this.setState({ selectedHome: true, selectedSearch: false });
        break;
      case 'search':
        this.setState({ selectedSearch: true, selectedHome: false });
        break;
      default:
        return null;
    }
  }

  change = () => {
    if(!this.props.web) {
      this.props.changeModalAndWeb();
    } else {
      this.props.changeModal();
    }
  }

  onClickHome = () => {
    this.props.fetchLatestPhotos();

    if(!this.props.web) {
      this.props.changeWeb();
    }

    if(isMobile) {
      this.props.changeMobileFalse();
    }
  }

  render() {
    const {
      selectedPath,
      web,
      changeMobileFalse,
      changeModal,
      modal,
    } = this.props;

    const { selectedHome, selectedSearch } = this.state;

    return (
      <Transition in={web} timeout={500}>
        {state => (
          <SideNavContainer isOpen={web} isMobile={isMobile}>
          {isMobile && (
            <Button 
              className="btn-close" 
              icon={<Close size='large' />}
              onClick={() => changeMobileFalse()}
            />
          )}
          <Title>
            {web && state === 'entered' && (
              <div>made by <br />@ssnyarii</div>
            )}
          </Title>
          <div style={{ height: 0 }}>
            <SideNav
              theme={theme} 
              defaultSelectedPath="home"
              selectedPath={selectedPath}
              onItemSelection={this.onItemSelection}
            >
              <Nav 
                id={"home"}
                style={!web && {justifyContent: 'center'}}
                onClick={this.onClickHome}
                className='nav-item'
              >
                <NavIcon>
                  <Icon size={25} icon={home} />
                </NavIcon>
                {web && state === 'entered' && (
                  <HomeText isBrowser={isBrowser} selected={selectedSearch}>ホーム</HomeText>
                )}
              </Nav>
              <Nav 
                id={"search"} 
                style={!web && {justifyContent: 'center'}}
                onClick={this.change}
                className='nav-item'
              >
                <NavIcon>
                  <Icon size={25} icon={search} />
                </NavIcon>
                {web && state === 'entered' && (
                  <SearchText isBrowser={isBrowser} selected={selectedHome}>検索</SearchText>
                )}
              </Nav>
            </SideNav>
          </div>
  
          {modal && (
            <SearchModal 
              onCloseModal={() => changeModal()} 
            />
          )}
  
        </SideNavContainer>
        )}
      </Transition>
    );
  }
}

const mapStateToProps = state => {
  return {
    web: state.isOpen.web,
    modal: state.isOpen.modal
  }
}

export default connect(
  mapStateToProps,
  { changeMobileFalse, changeModal, changeModalAndWeb, fetchLatestPhotos, changeWeb }
)(Menu);