import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import Divider from '@mui/material/Divider';
import DownloadIcon from '@mui/icons-material/Download';
import './index.css';

const HorizontalLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const HighlightableCard = styled(Card)`
  transition: border 0.3s ease;
  &:hover {
    border: 1px solid blue;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
  border: ${(props) =>
    //eslint-disable-next-line prettier/prettier
    props.$isHovered ? '1px solid blue' : '1px solid transparent'};
  box-shadow: ${(props) =>
    //eslint-disable-next-line prettier/prettier
    props.$isHovered ? '0 4px 20px rgba(0, 0, 0, 0.2)' : 'none'};
`;

const CaptionValue = ({ caption, value, className }) => {
  return (
    <div className={className}>
      {/* eslint-disable-next-line prettier/prettier */}
      <Typography
        variant='caption'
        component='div'
        sx={{
          color: '#082A63',
          fontWeight: 700,
          unicodeBidi: 'isolate',
          fontSize: 13,
          lineHeight: 1.2,
        }}
      >
        {caption}
      </Typography>
      {/* eslint-disable-next-line prettier/prettier */}
      <Typography
        variant='body2'
        component='div'
        sx={{
          color: '#082A63',
          fontSize: 12,
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
        }}
      >
        {value}
      </Typography>
    </div>
  );
};

export function VisualizationItemCard({
  vizItem,
  collectionId,
  onSelectVizLayer,
  onHoverOnVizLayer,
  hoveredVizItemId,
}) {
  const vizItemSourceId = vizItem?.id;
  // console.log({ hoveredVizItemId,vizItemSourceId });
  const orbit = vizItem?.plumeProperties?.orbit;
  const imageUrl = `${process.env.REACT_APP_RASTER_API_URL}/collections/emit-ch4plume-v1/items/${vizItemSourceId}/preview.png?bidx=1&assets=ch4-plume-emissions&rescale=1%2C1500&resampling=bilinear&colormap_name=plasma`;
  const tiffUrl = `${process.env.REACT_APP_CLOUD_BROWSE_URL}/browseui/#${collectionId}/#q=${vizItem.id.split('_').slice(-1)}`;
  const location = vizItem?.plumeProperties?.location;
  const maxPlumeConcentration = vizItem?.plumeProperties?.maxConcentration;
  const concentrationUncertanity =
    vizItem?.plumeProperties?.concentrationUncertanity;
  const utcTimeObserved = vizItem?.plumeProperties?.utcTimeObserved;
  const latitudeOfMaxConcentration =
    vizItem?.plumeProperties?.latitudeOfMaxConcentration;
  const longitudeOfMaxConcentration =
    vizItem?.plumeProperties?.longitudeOfMaxConcentration;

  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    onSelectVizLayer && onSelectVizLayer(vizItemSourceId);
  };

  const handleMouseEnter = () => {
    onHoverOnVizLayer(vizItemSourceId);
  };

  const handleMouseLeave = () => {
    onHoverOnVizLayer('');
  };
  useEffect(() => {
    if (hoveredVizItemId === vizItemSourceId) setIsHovered(true);
    if (hoveredVizItemId !== vizItemSourceId) setIsHovered(false);
  }, [hoveredVizItemId, vizItemSourceId]);
  return (
    <HighlightableCard
      sx={{ display: 'flex', flex: '0 0 auto', margin: '15px' }}
      onClick={handleCardClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      $isHovered={isHovered}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CardMedia
          component='img'
          height='100'
          sx={{
            padding: '0.8em',
            objectFit: 'contain',
            minWidth: '80px',
            imageRendering: 'pixelated',
          }}
          image={imageUrl}
          alt='plume image'
        />
      </div>

      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <HorizontalLayout>
            <CaptionValue
              className='card-plume'
              caption='ID:'
              value={vizItemSourceId}
            />
            <CaptionValue
              className='card-plume'
              caption='Orbit'
              value={orbit}
            />
          </HorizontalLayout>

          <HorizontalLayout>
            {/* eslint-disable-next-line prettier/prettier */}
            <a
              href={tiffUrl}
              target='_blank'
              rel='noreferrer'
              className='card-download-link'
            >
              <Typography variant='caption' component='div'>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  Download the Tiff File <DownloadIcon fontSize='small' />
                </div>
              </Typography>
            </a>
          </HorizontalLayout>
          <Divider></Divider>
          <HorizontalLayout>
            <CaptionValue
              className='card-plume'
              caption='Location'
              value={location}
            />
            <CaptionValue
              className='card-plume'
              caption='UTC Time Observed:'
              value={utcTimeObserved}
            />
          </HorizontalLayout>
          <HorizontalLayout>
            <CaptionValue
              className='card-plume'
              caption='Max Plume Concentration:'
              value={maxPlumeConcentration + ' ppm m'}
            />
            <CaptionValue
              className='card-plume'
              caption='Concentration Uncertainity:'
              value={concentrationUncertanity + ' ppm m'}
            />
          </HorizontalLayout>
          <HorizontalLayout>
            <CaptionValue
              className='card-plume'
              caption='Longitude (Max Conc):'
              value={Number(longitudeOfMaxConcentration).toFixed(3)}
            />
            <CaptionValue
              className='card-plume'
              caption='Latitude (Max Conc):'
              value={Number(latitudeOfMaxConcentration).toFixed(3)}
            />
          </HorizontalLayout>
        </CardContent>
      </Box>
    </HighlightableCard>
  );
}
