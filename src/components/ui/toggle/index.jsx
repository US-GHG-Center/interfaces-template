import React, { useState } from 'react';
import './index.css';

const ToggleSwitch = ({ title, onToggle, enabled }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    if (onToggle) {
      onToggle(newState); // Callback with the updated state
    }
  };

  return (
    <div className='toggle-container'>
      <span className='custom-label-cov'> {title}</span>
      <label className='toggle-switch'>
        <input
          type='checkbox'
          className='toggle-input'
          id='showCoverage'
          checked={isChecked}
          disabled={!enabled}
          onChange={handleToggle}
        />
        <span className='slider'></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
