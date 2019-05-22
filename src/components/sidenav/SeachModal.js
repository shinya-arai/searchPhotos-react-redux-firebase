import React from 'react';
import { Box, Button, Layer, FormField, TextInput } from 'grommet';
import { FormSearch, Close } from 'grommet-icons';

class SearchModal extends React.Component {
  state = { term: '' };

  onSearchPhotos = (e) => {
    e.preventDefault();
    
    this.props.onSearchPhotos(this.state.term);
  }

  render() {
    const { onCloseModal, isPhotos } = this.props;
    const { term } = this.state;

    return (
      <Layer 
        position="center" 
        modal 
        onClickOutside={onCloseModal}
        onEsc={onCloseModal}
      >
        <Box pad="medium" gap="small" width="medium">
          <Box flex={false} direction="row" justify="between" style={{ justifyContent: 'flex-end' }}>
            <Button icon={<Close />} onClick={onCloseModal} />
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
                また、漢字、カタカナでは検索できないので英単語、ローマ字で検索してください。
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

export default SearchModal;