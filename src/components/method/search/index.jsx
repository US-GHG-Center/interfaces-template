import { useState, useRef, useEffect, useMemo } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

import { TrieSearch } from './helper/trieSearch';

// --- helpers: support "a.b[0].c" or a custom function or a list of fallbacks
const getByPath = (obj, path) => {
  if (!obj || !path) return undefined;
  const keys = String(path)
    .replace(/\[(\w+)\]/g, '.$1') // a[0] -> a.0
    .replace(/^\./, '')
    .split('.');
  let cur = obj;
  for (const k of keys) {
    if (cur == null) return undefined;
    cur = cur[k];
  }
  return cur;
};

const resolveSearchValue = (item, searchProp) => {
  if (typeof searchProp === 'function') return searchProp(item);
  if (Array.isArray(searchProp)) {
    for (const p of searchProp) {
      const v = typeof p === 'function' ? p(item) : getByPath(item, p);
      if (v != null) return v;
    }
    return undefined;
  }
  return getByPath(item, searchProp);
};

/*
      Search stacItem compoents

      @param {STACItem} vizItems   - An array of stac items from which search is to be done
      @param {function} onSelectedVizItemSearch -  will provide vizItemId as a parameter to the callback when a item is clicked from dropdown
      @param {string|function|array} searchProperty - The property to search on
      @param {string} placeHolderText - The placeholder text for the search input
*/
export function Search({
  vizItems,
  onSelectedVizItemSearch,
  searchProperty = 'id',
  placeHolderText = 'Search Items', // string
}) {
  const search_items = vizItems?.map((vizItem) => vizItem[searchProperty]);
  const trieSearch = useRef(null);
  const [searchOptions, setSearchOptions] = useState([]);

  const optionMapRef = useRef(new Map());

  // build options + trie inputs any time items or accessor change
  const searchItems = useMemo(() => {
    optionMapRef.current = new Map();
    if (!vizItems?.length) return [];

    const items = [];
    for (const item of vizItems) {
      const raw = resolveSearchValue(item, searchProperty);
      if (raw == null) continue;

      const key = Array.isArray(raw) ? raw.join(' ') : String(raw);
      if (!key) continue;

      items.push(key);
      // If duplicates, last one wins; change to an array if you want all
      optionMapRef.current.set(key, item);
    }
    // remove duplicate values from search items
    return Array.from(new Set(items));
  }, [vizItems, searchProperty]);

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
    const item = optionMapRef.current.get(clickedValue) ?? clickedValue;
    onSelectedVizItemSearch(item);
  };

  useEffect(() => {
    trieSearch.current = new TrieSearch();
    if (searchItems.length) {
      trieSearch.current.addItems(searchItems);
    }
  }, [searchItems]);

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
          label={placeHolderText}
          variant='outlined'
          style={{ width: '100%', backgroundColor: '#FFF' }}
          onChange={handleOnInputTextChange}
          sx={{
            '& .MuiInputBase-input': {
              fontSize: '14px', // input text size
            },
          }}
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
