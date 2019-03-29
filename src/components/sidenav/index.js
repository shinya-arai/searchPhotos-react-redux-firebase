import React from 'react';
import { Nav, SideNav, NavIcon } from 'react-sidenav';
import { Icon } from 'react-icons-kit';
import { isMobile, isBrowser } from 'react-device-detect';

import { home } from 'react-icons-kit/fa/home';
import { search } from 'react-icons-kit/fa/search';

import SearchModal from './SeachModal';
import { SideNavContainer, theme, Text, Title } from '../../styled/SideNav';


class AppNavigation extends React.Component {
  state = { selectedPath: '', isModalOpen: false };

  onItemSelection = (arg) => {
    this.setState({ selectedPath: arg.path });
  }

  onModalOpen = () => {
    this.setState({ isModalOpen: true });
  }

  onModalClose = () => {
    this.setState({ isModalOpen: false });
  }

  render() {
    const { isModalOpen, selectedPath } = this.state;
    const { 
      onSearchPhotos, 
      isPhotos, 
      isOpen, 
      onClickHome, 
    } = this.props;

    if(isBrowser) {
      return (
        <SideNavContainer isOpen={isOpen}>
        <Title></Title>
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
              onClick={this.onModalOpen} 
              className='nav-item'
            >
              <NavIcon>
                <Icon size={25} icon={search} />
              </NavIcon>
              {isOpen && (
                <Text>検索</Text>
              )}
              {/* <Nav>
                aa
              </Nav> */}
            </Nav>
          </SideNav>
        </div>

        {isModalOpen && (
          <SearchModal 
            onModalClose={this.onModalClose} 
            onSearchPhotos={onSearchPhotos}
            isPhotos={isPhotos}
          />
        )}

      </SideNavContainer>
      );
    }

    if(isMobile) {
      return null;
    }

    // return (
    //   <SideNavContainer isOpen={isOpen}>
    //     <Title></Title>
    //     <div style={{ height: 0 }}>
    //       <SideNav
    //         theme={theme} 
    //         defaultSelectedPath="home"
    //         selectedPath={selectedPath}
    //         onItemSelection={this.onItemSelection}
    //       >
    //         <Nav 
    //           id={"home"}
    //           style={!isOpen && {justifyContent: 'center'}}
    //           onClick={onClickHome}
    //           className='nav-item'
    //         >
    //           <NavIcon>
    //             <Icon size={25} icon={home} />
    //           </NavIcon>
    //           {isOpen && (
    //             <Text>ホーム</Text>
    //           )}
    //         </Nav>
    //         <Nav 
    //           id={"search"} 
    //           style={!isOpen && {justifyContent: 'center'}}
    //           onClick={this.onModalOpen} 
    //           className='nav-item'
    //         >
    //           <NavIcon>
    //             <Icon size={25} icon={search} />
    //           </NavIcon>
    //           {isOpen && (
    //             <Text>検索</Text>
    //           )}
    //           {/* <Nav>
    //             aa
    //           </Nav> */}
    //         </Nav>
    //       </SideNav>
    //     </div>

    //     {isModalOpen && (
    //       <SearchModal 
    //         onModalClose={this.onModalClose} 
    //         onSearchPhotos={onSearchPhotos}
    //         isPhotos={isPhotos}
    //       />
    //     )}

    //   </SideNavContainer>
    // );
  } 
};

export default AppNavigation;