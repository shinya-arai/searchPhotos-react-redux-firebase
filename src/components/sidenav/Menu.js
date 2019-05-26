import React from 'react';

import { connect } from 'react-redux';
import { mobileSideFalse, changeModal } from '../../actions';

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

  render() {
    const {
      onSearchPhotos,
      onClickHome,
      selectedPath,
      isPhotos,
      web,
      mobileSideFalse,
      changeModal,
      modal
    } = this.props;

    const { selectedHome, selectedSearch } = this.state;

    return (
      <SideNavContainer isOpen={web} isMobile={isMobile}>
        {isMobile && (
          <Button 
            className="btn-close" 
            icon={<Close size='large' />}
            onClick={() => mobileSideFalse()}
          />
        )}
        <Title style={{ color: 'ghostwhite' }}>Title</Title>
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
              onClick={onClickHome}
              className='nav-item'
            >
              <NavIcon>
                <Icon size={25} icon={home} />
              </NavIcon>
              {web && (
                <HomeText isBrowser={isBrowser} selected={selectedSearch}>ホーム</HomeText>
              )}
            </Nav>
            <Nav 
              id={"search"} 
              style={!web && {justifyContent: 'center'}}
              onClick={() => changeModal()} 
              className='nav-item'
            >
              <NavIcon>
                <Icon size={25} icon={search} />
              </NavIcon>
              {web && (
                <SearchText isBrowser={isBrowser} selected={selectedHome}>検索</SearchText>
              )}
            </Nav>
          </SideNav>
        </div>

        {modal && (
          <SearchModal 
            onCloseModal={() => changeModal()} 
            onSearchPhotos={onSearchPhotos}
            isPhotos={isPhotos}
          />
        )}

      </SideNavContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    web: state.web.isOpen,
    modal: state.modal.isOpen
  }
}

export default connect(mapStateToProps, { mobileSideFalse, changeModal })(Menu);