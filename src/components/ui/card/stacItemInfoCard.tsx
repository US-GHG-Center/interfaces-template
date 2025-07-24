import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import Divider from '@mui/material/Divider';
import DownloadIcon from '@mui/icons-material/Download';

import { STACItem } from '../../../dataModel';

import { useConfig } from '../../../context/configContext';

import './index.css';

export const HorizontalLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 5px;
`;

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  $isHovered?: boolean;
}

const HighlightableCard = styled(Card)<CardProps>`
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

interface CaptionValueInterface {
  caption: string;
  value: number | string;
  className: string;
}

export const CaptionValue = ({
  caption,
  value,
  className,
}: CaptionValueInterface): JSX.Element => {
  return (
    <div className={className}>
      <Typography
        variant='caption'
        component='div'
        sx={{ color: 'text.primary' }}
      >
        {caption}
      </Typography>
      <Typography
        variant='body2'
        component='div'
        sx={{ color: 'text.secondary' }}
      >
        {value}
      </Typography>
    </div>
  );
};

export interface StacItemInfoCardProps {
  stacItem: STACItem;
  onClick: (stacId: string) => void;
  onHover: (stacId: string) => void;
  hovered: boolean;
  clicked: boolean;
  children?: JSX.Element;
}

export function StacItemInfoCard({
  stacItem,
  hovered,
  clicked,
  onClick,
  onHover,
  children,
}: StacItemInfoCardProps): JSX.Element {
  const [isHovered, setIsHovered] = useState<boolean>(hovered || false);
  const [id, setId] = useState<string>('');
  const [collection, setCollection] = useState<string>('');
  const [thumbnailUrl, setThumbnailUrl] = useState<string>('');
  const [lon, setLon] = useState<number | undefined>();
  const [lat, setLat] = useState<number | undefined>();
  const [tiffUrl, setTiffUrl] = useState<string>('');

  const { config } = useConfig();

  const handleCardClick = () => {
    onClick(id ? id : stacItem.id);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover(id ? id : stacItem.id);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover('');
  };

  useEffect(() => {
    if (!config || !Object.keys(config).length) return;
    let { id, collection } = stacItem;
    setId(id);
    setCollection(collection);

    let coordinates: string[] = stacItem.geometry.coordinates[0][0];
    setLon(Number(coordinates[0]));
    setLat(Number(coordinates[1]));

    let VMIN = 0;
    let VMAX = 0.4;
    let colorMap = 'plasma';
    const thumbnailUrl: string = `${config.REACT_APP_RASTER_API_URL}/collections/${collection}/items/${id}/preview.png?assets=rad&rescale=${VMIN}%2C${VMAX}&colormap_name=${colorMap}`;
    setThumbnailUrl(thumbnailUrl);

    let firstAssetKey = Object.keys(stacItem.assets)[0];
    let firstAsset = stacItem.assets[firstAssetKey];
    setTiffUrl(firstAsset.href);
  }, [stacItem]);

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
            padding: '1em',
            objectFit: 'contain',
            minWidth: '50px',
            imageRendering: 'pixelated',
          }}
          image={thumbnailUrl}
          alt='Visualization Item image'
        />
      </div>

      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <HorizontalLayout>
            <CaptionValue
              caption='Visualization Item ID'
              value={id}
              className=''
            />
          </HorizontalLayout>
          <HorizontalLayout>
            <CaptionValue
              caption='STAC Collection ID'
              value={collection}
              className=''
            />
          </HorizontalLayout>
          <HorizontalLayout>
            <CaptionValue
              className='card-plume'
              caption='Approximate Release Longitude'
              value={Number(lon).toFixed(3)}
            />
            <CaptionValue
              className='card-plume'
              caption='Approximate Release Latitude'
              value={Number(lat).toFixed(3)}
            />
          </HorizontalLayout>
          <HorizontalLayout>
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
          {children && (
            <>
              <Divider></Divider>
              {children}
            </>
          )}
        </CardContent>
      </Box>
    </HighlightableCard>
  );
}
