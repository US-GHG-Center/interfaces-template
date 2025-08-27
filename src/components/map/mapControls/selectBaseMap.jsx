import ReactDOM from 'react-dom/client';
import { IconButton, Menu, MenuItem, ListItemText } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';

const BasemapSelector = ({ setBaseMap }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Available basemap options
  const basemapOptions = [
    {
      label: 'Satellite',
      style: 'covid-nasa',
      id: 'cldu1cb8f00ds01p6gi583w1m',
    },
    {
      label: 'Light',
      style: 'mapbox/light-v11',
    },
    {
      label: 'Dark',
      style: 'mapbox/dark-v11',
    },
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleBasemapSelect = (basemapStyleName, basemapStyleId) => {
    setBaseMap(basemapStyleName, basemapStyleId);
    handleClose();
  };

  return (
    <>
      <Tooltip title='Select Basemap'>
        <IconButton
          className='menu-open-icon'
          onClick={handleClick}
          aria-controls={open ? 'basemap-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
        >
          <MapIcon className='map-control-icon' />
        </IconButton>
      </Tooltip>
      <Menu
        id='basemap-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basemap-button',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {basemapOptions.map((option) => (
          <MenuItem
            key={option.id}
            onClick={() => handleBasemapSelect(option.style, option.id)}
            dense
          >
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export class BasemapControl {
  constructor(setBaseMap) {
    this.root = null;
    this._map = null;
    this._setBaseMap = setBaseMap;
  }

  onAdd = (map) => {
    this._map = map;
    this._container = document.createElement('div');
    this._container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
    const root = ReactDOM.createRoot(this._container);
    root.render(<BasemapSelector setBaseMap={this._setBaseMap} />);
    this.root = root;
    return this._container;
  };

  onRemove = () => {
    setTimeout(() => {
      try {
        this.root.unmount();
        this._container.parentNode.removeChild(this._container);
        this._map = null;
      } catch (err) {
        console.warn('Error during cleanup:', err);
      }
    }, 0);
  };
}
