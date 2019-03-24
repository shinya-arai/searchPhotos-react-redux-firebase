import React from 'react';
import { Box, Button, Layer, FormField, TextInput } from 'grommet';
import { FormSearch, Close } from 'grommet-icons';

const SearchBar = (props) => {
  const { onClose } = props;

  return (
    <Layer 
      position="center" 
      modal 
      onClickOutside={onClose}
      onEsc={onClose}
    >
      <Box pad="medium" gap="small" width="medium">
        <Box
          as="form"
          fill="vertical"
          overflow="auto"
          width="medium"
          pad="medium"
        >
          <Box flex={false} direction="row" justify="between" style={{ justifyContent: 'flex-end' }}>
            <Button icon={<Close />} onClick={onClose} />
          </Box>
          <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }} style={{ padding: 0 }}>
            <FormField label="好きなキーワードで検索">
              <TextInput placeholder="dog, cat, tree, etc..." />
            </FormField>
          </Box>
        </Box>
        <Box
          as="footer"
          gap="small"
          direction="row"
          align="center"
          justify="end"
          pad={{ top: "medium", bottom: "small" }}
        >
          <Button icon={<FormSearch />} label="検索する"></Button>
        </Box>
      </Box>
    </Layer>
  );
};

export default SearchBar;