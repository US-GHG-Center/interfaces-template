import { useEffect, useState } from 'react';
import moment from 'moment';
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
          <HorizontalLayout>
            <CaptionValue caption='Target Id' value={targetId} className='' />
            <CaptionValue
              caption='Target Type'
              value={targetType}
              className=''
            />
          </HorizontalLayout>
          <HorizontalLayout>
            <CaptionValue
              caption='Target Name'
              value={targetName}
              className=''
            />
            <CaptionValue
              caption='Target Altitude'
              value={targetAltitude}
              className=''
            />
          </HorizontalLayout>
          <HorizontalLayout>
            <CaptionValue
              caption='Visualization Start Time '
              value={
                moment.utc(startDatetime).format('MM/DD/YYYY, HH:mm:ss') +
                ' UTC'
              }
              className=''
            />
            <CaptionValue
              caption='Visualization End Time '
              value={
                moment.utc(endDatetime).format('MM/DD/YYYY, HH:mm:ss') + ' UTC'
              }
              className=''
            />
          </HorizontalLayout>
        </>
      </StacItemInfoCard>
    </div>
  );
};
