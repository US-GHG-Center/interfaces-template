import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import Divider from '@mui/material/Divider';
import DownloadIcon from '@mui/icons-material/Download';
import { FastAverageColor } from 'fast-average-color';

import { getBackgroundColorFromImage } from '../../../utils'
import { TruncatedCopyText } from '../truncatedText';

import { STACItem } from '../../../dataModel';

import './index.css';
import { get } from 'http';

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

const HighlightableCard = styled(Card) <CardProps>`
  border-radius: 12px !important;
  transition: border 0.3s ease;
  &:hover {
    border: 1px solid rgb(59, 130, 246);
  }
  border: ${(props) =>
    //eslint-disable-next-line prettier/prettier
    props.$isHovered ? '1px solid rgb(59, 130, 246)' : '1px solid rgba(156, 166, 180, 0.25)'};
`;

interface CaptionValueInterface {
  caption: string;
  className?: string;
  children?: React.ReactNode;
}

export const CaptionValue = ({
  caption,
  className = '',
  children,
}: CaptionValueInterface): JSX.Element => {
  return (
    <div className={className}>
      <Typography
        variant='caption'
        component='div'
        sx={{ color: 'var(--main-blue)' }}
      >
        {caption}
      </Typography>
      <Typography
        variant='body2'
        component='div'
        sx={{ color: 'text.secondary' }}
      >
        {children}
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
  VMIN?: number;
  VMAX?: number;
  colorMap?: string;
  assets?: string;
}

export function StacItemInfoCard({
  stacItem,
  hovered,
  clicked,
  onClick,
  onHover,
  children,
  VMIN,
  VMAX,
  colorMap,
  assets,
}: StacItemInfoCardProps): JSX.Element {
  const [isHovered, setIsHovered] = useState<boolean>(hovered || false);
  const [id, setId] = useState<string>('');
  const [collection, setCollection] = useState<string>('');
  const [thumbnailUrl, setThumbnailUrl] = useState<string>('');
  const [imgBgColor, setImgBgColor] = useState<string>('#333');
  const [lon, setLon] = useState<number | undefined>();
  const [lat, setLat] = useState<number | undefined>();
  const [tiffUrl, setTiffUrl] = useState<string>('');

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
    let { id, collection } = stacItem;
    setId(id);
    setCollection(collection);

    let coordinates: number[] = stacItem.geometry.coordinates[0][0];
    setLon(coordinates[0]);
    setLat(coordinates[1]);

    let lvmin = VMIN || 400;
    let lvmax = VMAX || 420;
    let lcolormap = colorMap || 'plasma';
    let lassets = assets || 'rad';
    const thumbnailUrl: string = `${process.env.REACT_APP_RASTER_API_URL}/collections/${collection}/items/${id}/preview.png?assets=${lassets}&rescale=${lvmin}%2C${lvmax}&colormap_name=${lcolormap}&nodata=nan`;
    setThumbnailUrl(thumbnailUrl);

    getBackgroundColorFromImage(thumbnailUrl, '#444', '#eee').then(color => {
      setImgBgColor(color);
    });

    let firstAssetKey = Object.keys(stacItem.assets)[0];
    let firstAsset = stacItem.assets[firstAssetKey];
    setTiffUrl(firstAsset.href);
  }, [stacItem, VMIN, VMAX, colorMap, assets]);

  useEffect(() => {
    setIsHovered(hovered);
  }, [hovered]);

  return (
    <HighlightableCard
      sx={{ display: 'flex', flex: '0 0 auto', margin: '15px', padding: '10px' }}
      onClick={handleCardClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      $isHovered={isHovered}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 0 auto' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', flex: '1 0 auto', alignItems: 'top', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div>
              <Typography variant="body2" sx={{ mb: 0.5, color: 'var(--main-blue)' }}>STAC Details</Typography>
              <HorizontalLayout>
                <CaptionValue
                  caption='Visualization Item ID'
                  className=''
                ><TruncatedCopyText text={id} maxLength={25} /></CaptionValue>
              </HorizontalLayout>
              {/* <HorizontalLayout>
                <CaptionValue
                  caption='STAC Collection ID'
                  className=''
                ><TruncatedCopyText text={collection} /></CaptionValue>
              </HorizontalLayout> */}
              <HorizontalLayout>
                <CaptionValue
                  caption='Center Coordinates'
                  className=''
                >
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div>Latitude: {Number(lat).toFixed(3)}</div>
                    <div>Longitude: {Number(lon).toFixed(3)}</div>
                  </div>
                </CaptionValue>

              </HorizontalLayout>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              width: '40%',
              maxWidth: '200px',
              justifyContent: 'center',
              borderRadius: '16px',
            }}
            >
              <CardMedia
                component='img'
                sx={{
                  objectFit: 'contain',
                  width: '100%',
                  height: 'auto',
                  padding: '10px',
                  borderRadius: '8px',
                  imageRendering: 'pixelated',
                  backgroundColor: imgBgColor
                }}
                image={thumbnailUrl}
                alt='Visualization Item image'
              />
              <HorizontalLayout>
                <a
                  href={tiffUrl}
                  target='_blank'
                  rel='noreferrer'
                  className='card-download-link'
                >
                  <Typography variant='caption' component='div'>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      Download the TIFF File <DownloadIcon fontSize='small' />
                    </div>
                  </Typography>
                </a>
              </HorizontalLayout>
            </div>
          </Box>
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
