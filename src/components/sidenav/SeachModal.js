import React from 'react';
import { Box, Button, Layer, FormField, TextInput } from 'grommet';
import { FormSearch, Close } from 'grommet-icons';

class SearchBar extends React.Component {
  state = { term: '' };

  onSearchPhotos = (e) => {
    e.preventDefault();
    this.props.onSearchPhotos(this.state.term);


    // if(!this.props.isPhotos) {
    //   console.log(false);
    // } else {
    //   this.props.onClose();
    //   console.log(true);
    // }
  }

  render() {
    const { onModalClose, isPhotos } = this.props;
    const { term } = this.state;

    return (
      <Layer 
        position="center" 
        modal 
        onClickOutside={onModalClose}
        onEsc={onModalClose}
      >
        <Box pad="medium" gap="small" width="medium">
          <Box flex={false} direction="row" justify="between" style={{ justifyContent: 'flex-end' }}>
            <Button icon={<Close />} onClick={onModalClose} />
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
            { !isPhotos && (
              <div className="ui error message">
                検索されたキーワードでは写真が存在しませんでした。<br />
                また、日本語では検索できないので英単語で調べてください。
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

export default SearchBar;