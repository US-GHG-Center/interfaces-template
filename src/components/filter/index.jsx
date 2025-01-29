import { useState, useEffect } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';
/*
      Filter stacItem based on the date range

      @param {STACItem} vizItems   - An array of STACitems from which filtering is to be done
      @param {function} onFilteredVizItems -   with filtered vizItems when date range is selected
      
*/

export function FilterByDate({ vizItems, onFilteredVizItems }) {
  const [startDate, setStartDate] = useState(moment('2018-01-01'));
  const [endDate, setEndDate] = useState(() => moment());
  useEffect(() => {
    if (!vizItems.length) return;
    const filteredVizItems = vizItems.filter((vizItem) => {
      const vizItemDate = moment(vizItem?.properties?.datetime);

      if (
        vizItemDate.isSameOrAfter(startDate) &&
        vizItemDate.isSameOrBefore(endDate)
      ) {
        return vizItem;
      } else return null;
    });
    onFilteredVizItems(filteredVizItems.map((vizItem) => vizItem));
  }, [startDate, endDate, vizItems, onFilteredVizItems, vizItems.length]);

  return (
    <>
      <div style={{ width: '45%', height: '90%' }}>
        <DatePicker
          label='Start Date'
          value={startDate}
          onChange={setStartDate}
        />
      </div>
      <div style={{ width: '45%', height: '90%' }}>
        <DatePicker label='End Date' value={endDate} onChange={setEndDate} />
      </div>
    </>
  );
}
