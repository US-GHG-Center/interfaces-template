import React from 'react';

import { Typography, Divider } from '@mui/material';
import './index.css';

export const Title = ({ title, description }) => {
  return (
    <>
      <Typography
        variant='h6'
        component='div'
        className='title-head'
        fontWeight='bold'
        sx={{ margin: '0 0.9rem' }}
      >
        {title}
      </Typography>
      {description && (
        <Typography
          variant='body2'
          component='div'
          className='title-note'
          sx={{ margin: '0 0.9rem', color: 'text.secondary' }}
        >
          {description}
        </Typography>
      )}
      <Divider
        component='div'
        className='title-divider'
        sx={{ margin: '0 1.5rem' }}
      />
    </>
  );
};
