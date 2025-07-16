import { useState, useRef, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

import { TrieSearch } from './helper/trieSearch';
/*
      Search stacItem compoents

      @param {STACItem} vizItems   - An array of stac items from which search is to be done
      @param {function} onSelectedVizItemSearch -  will provide vizItemId as a parameter to the callback when a item is clicked from dropdown 
      
*/
export function Search({ vizItems, onSelectedVizItemSearch }) {
  const ids = vizItems?.map((vizItem) => vizItem.id);
  const trieSearch = useRef(null);
  const [searchOptions, setSearchOptions] = useState([]);

  const handleSearch = (prefix) => {
    const searchResult = trieSearch.current.getRecommendations(prefix);
    return searchResult;
  };

  const handleOnInputTextChange = (event) => {
    const text = event.target.value;
    const searchResults = handleSearch(text);
    setSearchOptions(searchResults);
  };

  const handleOnOptionClicked = (event, clickedValue) => {
    onSelectedVizItemSearch(clickedValue);
  };

  useEffect(() => {
    trieSearch.current = new TrieSearch();
    // id in ids are expected to be _ separated for better search result.
    if (ids && ids.length) trieSearch.current.addItems(ids);
  }, [ids]);

  return (
    <Autocomplete
      freeSolo
      id='free-solo-2-demo'
      disableClearable
      options={searchOptions}
      style={{ width: '100%' }}
      renderInput={(params) => (
        <TextField
          {...params}
          id='outlined-basic'
          label={
            placeHolderText ? placeHolderText : 'Search by STAC Item Id'
          }
          variant='outlined'
          style={{ width: '100%', backgroundColor: '#EEEEEE' }}
          onChange={handleOnInputTextChange}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                <InputAdornment position='end'>
                  <SearchIcon />
                </InputAdornment>
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      onChange={handleOnOptionClicked}
    />
  );
}
