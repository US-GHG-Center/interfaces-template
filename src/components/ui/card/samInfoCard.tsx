import { useEffect, useState } from 'react';
import moment from 'moment';
import { Box, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import {
  StacItemInfoCard,
  StacItemInfoCardProps,
  HorizontalLayout,
  CaptionValue,
} from './stacItemInfoCard';

interface SamInfoCardProps extends StacItemInfoCardProps {
  hoveredVizid: string;
  cardRef?: React.MutableRefObject<HTMLDivElement | null> | undefined;
}

export const SamInfoCard = ({
  stacItem,
  onClick,
  onHover,
  hovered,
  clicked,
  hoveredVizid,
  VMAX,
  VMIN,
  colorMap,
  assets,
  cardRef,
}: SamInfoCardProps): JSX.Element => {
  const [startDatetime, setStartDatetime] = useState<string>('');
  const [endDatetime, setEndDatetime] = useState<string>('');
  const [targetId, setTargetId] = useState<string>('');
  const [targetName, setTargetName] = useState<string>('');
  const [targetType, setTargetType] = useState<string>('');
  const [targetAltitude, setTargetAltitude] = useState<string>('');
  const [hov, setHov] = useState<boolean>(false);

  useEffect(() => {
    setHov(stacItem.id === hoveredVizid);
  }, [hoveredVizid, stacItem.id]);

  useEffect(() => {
    let startDatetime: string = stacItem.properties.start_datetime;
    let endDatetime: string = stacItem.properties.end_datetime;
    let targetId: string = stacItem.properties.target_id;
    let targetName: string = stacItem.properties.target_name;
    let targetType: string = stacItem.properties.target_type;
    let targetAltitude: string = stacItem.properties.target_altitude;

    setStartDatetime(startDatetime);
    setEndDatetime(endDatetime);
    setTargetId(targetId);
    setTargetName(targetName);
    setTargetType(targetType);
    setTargetAltitude(targetAltitude);
  }, [stacItem]);

  return (
    <div ref={cardRef}>
      <StacItemInfoCard
        stacItem={stacItem}
        onClick={onClick}
        onHover={onHover}
        hovered={hov}
        clicked={clicked}
        VMAX={VMAX}
        VMIN={VMIN}
        colorMap={colorMap}
        assets={assets}
      >
        <>
          <Box sx={{ marginTop: '20px' }}>
            {/* Target Group */}
            <Typography variant="body2" sx={{ mb: 0.5, color: 'var(--main-blue)' }}>Target Details</Typography>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <CaptionValue caption='Target Id'>{targetId}</CaptionValue>
              </Grid>
              <Grid item xs={12} sm={6}>
                <CaptionValue caption='Target Type'>{targetType}</CaptionValue>
              </Grid>
              <Grid item xs={12} sm={6}>
                <CaptionValue caption='Target Name'>{targetName}</CaptionValue>
              </Grid>
              <Grid item xs={12} sm={6}>
                <CaptionValue caption='Target Altitude'>{targetAltitude}</CaptionValue>
              </Grid>
            </Grid>

            {/* Visualization Group */}
            <Typography variant="body2" sx={{ mt: 3, mb: 0.5, color: 'var(--main-blue)' }}>Visualization Details</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <CaptionValue caption='Start Time'>
                  {moment.utc(startDatetime).format('MM/DD/YYYY, HH:mm:ss') + ' UTC'}
                </CaptionValue>
              </Grid>
              <Grid item xs={12} sm={6}>
                <CaptionValue caption='End Time'>
                  {moment.utc(endDatetime).format('MM/DD/YYYY, HH:mm:ss') + ' UTC'}
                </CaptionValue>
              </Grid>
            </Grid>
          </Box>

        </>
      </StacItemInfoCard>
    </div>
  );
};
