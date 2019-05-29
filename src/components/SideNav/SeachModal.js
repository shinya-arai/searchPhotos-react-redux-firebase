import React from 'react';

import { connect } from 'react-redux';
import { changeModal, searchPhotos, changeMobileFalse } from '../../actions';

import { Box, Button, Layer, FormField, TextInput } from 'grommet';
import { FormSearch, Close } from 'grommet-icons';
import { isBrowser, isMobile, isTablet } from 'react-device-detect';

class SearchModal extends React.Component {
  state = { term: '' };

  onSearchPhotos = async e => {
    e.preventDefault();
    
    await this.props.searchPhotos(this.state.term);

    if(!this.props.isPhotos) {
      return;
    } else {
      
      if(isBrowser) {
        this.props.changeModal();
      } 
      
      else if(isMobile) {
        this.props.changeModal();
        this.props.changeMobileFalse();
      }
    }
  }

  style() {
    if(isTablet) {
      return { 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'oldlace'
      };
    }
  }

  render() {
    const { isPhotos, changeModal } = this.props;
    const { term } = this.state;

    return (
      <Layer 
        position="center" 
        modal 
        onClickOutside={() => changeModal()}
        onEsc={() => changeModal()}
        style={this.style()}
      >
        <Box pad="medium" gap="small" width="medium">
          <Box flex={false} direction="row" justify="between" style={{ justifyContent: 'flex-end' }}>
            <Button icon={<Close />} onClick={() => changeModal()} />
          </Box>
          <Box
            as="form"
            fill="vertical"
            overflow="auto"
            width="medium"
            pad="medium"
            onSubmit={this.onSearchPhotos}
          >
            <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }} style={{ padding: 0 }}>
              <FormField label="好きなキーワードで検索">
                <TextInput 
                  placeholder="dog, cat, tree, etc..."
                  onChange={ e => this.setState({ term: e.target.value })}
                  value={term}
                />
              </FormField>
            </Box>
            {!isPhotos && (
              <div className="ui error message">
                検索されたキーワードでは写真が存在しませんでした。<br />
                漢字、カタカナでは検索できないので英単語、ローマ字で検索してください。<br />
                また、ひらがなでは思った通りの検索ができません。
              </div>
            )}
          </Box>
          <Box
            as="footer"
            gap="small"
            direction="row"
            align="center"
            justify="end"
            pad={{ top: "medium", bottom: "small" }}
          >
            <Button onClick={this.onSearchPhotos} type="submit" icon={<FormSearch />} label="検索する"></Button>
          </Box>
        </Box>
      </Layer>
    );
  }
};

const mapStateToProps = state => {
  return {
    isPhotos: state.photo.isPhotos
  }
}

export default connect(
  mapStateToProps,
  { changeModal, searchPhotos, changeMobileFalse }
)(SearchModal);