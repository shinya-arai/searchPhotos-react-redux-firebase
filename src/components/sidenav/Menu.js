import React from 'react';
import { Nav, SideNav, NavIcon } from 'react-sidenav';
import { isMobile } from 'react-device-detect';
import { Button } from 'grommet';
import { Close } from 'grommet-icons';

import { Icon } from 'react-icons-kit';
import { home } from 'react-icons-kit/fa/home';
import { search } from 'react-icons-kit/fa/search';

import SearchModal from './SeachModal';

import { SideNavContainer, theme, Text, Title } from '../../styled/SideNav';

class Menu extends React.Component {
  onItemSelection = (arg) => {
    this.props.onItemSelection(arg);
  }

  onOpenModal = () => {
    this.props.onOpenModal();
  }

  onCloseModal = () => {
    this.props.onCloseModal();
  }

  onCloseMobileSide = () => {
    this.props.onCloseMobileSide();
  }

  render() {
    const {
      isOpen,
      onSearchPhotos,
      onClickHome,
      selectedPath,
      isModalOpen,
      isPhotos,
    } = this.props;

    return (
      <SideNavContainer isOpen={isOpen} isMobile={isMobile}>
        {isMobile && (
          <Button 
            className="btn-close" 
            icon={<Close size='large' />}
            onClick={this.onCloseMobileSide}
          />
        )}
        <Title>Title</Title>
        <div style={{ height: 0 }}>
          <SideNav
            theme={theme} 
            defaultSelectedPath="home"
            selectedPath={selectedPath}
            onItemSelection={this.onItemSelection}
          >
            <Nav 
              id={"home"}
              style={!isOpen && {justifyContent: 'center'}}
              onClick={onClickHome}
              className='nav-item'
            >
              <NavIcon>
                <Icon size={25} icon={home} />
              </NavIcon>
              {isOpen && (
                <Text>ホーム</Text>
              )}
            </Nav>
            <Nav 
              id={"search"} 
              style={!isOpen && {justifyContent: 'center'}}
              onClick={this.onOpenModal} 
              className='nav-item'
            >
              <NavIcon>
                <Icon size={25} icon={search} />
              </NavIcon>
              {isOpen && (
                <Text>検索</Text>
              )}
            </Nav>
          </SideNav>
        </div>

        {isModalOpen && (
          <SearchModal 
            onCloseModal={this.onCloseModal} 
            onSearchPhotos={onSearchPhotos}
            isPhotos={isPhotos}
          />
        )}

      </SideNavContainer>
    );
  }
}

export default Menu;