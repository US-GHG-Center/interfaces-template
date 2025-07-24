import { useState, useEffect, useCallback, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { useMapbox } from '../../../context/mapContext';
import './index.css';
import { ZOOM_LEVEL_MARGIN  } from '../utils/constants';
import { getMarkerColor } from '../utils';


export const MarkerFeature = ({ vizItems, onClickOnMarker }) => {
  const { map } = useMapbox();
  const [markersVisible, setMarkersVisible] = useState(true);
  const markersRef = useRef([]);

  const createMarker = useCallback(
    (item, idx) => {
      if (!map || !item?.geometry?.coordinates.length) {
        console.warn('Skipping marker: invalid map or coordinates', item);
        return null;
      }

      const { id, geometry } = item;
      const [lon, lat] = geometry.coordinates[0][0];
      const targetType = item.properties.target_type;

      const markerColor = getMarkerColor(targetType);

      const el = document.createElement('div');
      el.className = 'marker';
      el.innerHTML = getMarkerSVG(markerColor);

      const marker = new mapboxgl.Marker(el).setLngLat([lon, lat]);

      // // hover popup on hover
      // const popup = getPopupContent
      //   ? new mapboxgl.Popup({
      //       offset: 5,
      //       closeButton: false,
      //       closeOnClick: false,
      //     }).setHTML(getPopupContent(item))
      //   : null;

      // el.addEventListener('mouseenter', () => popup && marker.setPopup(popup).togglePopup());
      // el.addEventListener('mouseleave', () => popup?.remove());

      el.addEventListener('click', (e) => {
        e.stopPropagation();
        onClickOnMarker(id);
      });

      return { marker, element: el, id };
    },
    [map, onClickOnMarker]
  );

  useEffect(() => {
    if (!map || !vizItems?.length) return;

    // Remove existing
    markersRef.current.forEach(({ marker, element, popup }) => {
      element.remove();
      marker.remove();
      popup?.remove();
    });

    // Create new markers
    const newMarkers = vizItems.map(createMarker).filter((el) => el);
    newMarkers.forEach(({ marker }) => marker.addTo(map));
    newMarkers.forEach(({ element }) => {
      element.style.display = markersVisible ? 'block' : 'none';
    });

    markersRef.current = newMarkers;

    return () => {
      newMarkers.forEach(({ marker, element, popup }) => {
        element.remove();
        marker.remove();
        popup?.remove();
      });
    };
  }, [vizItems, map, createMarker, markersVisible]);

  useEffect(() => {
    if (!map) return;

    const handleZoom = () => {
      const zoom = map.getZoom();
      const show = zoom <= ZOOM_LEVEL_MARGIN;
      setMarkersVisible(show);
    };
    map.on('zoom', handleZoom);
    return () => map.off('zoom', handleZoom);
  }, [map]);

  useEffect(() => {
    markersRef.current.forEach(({ element }) => {
      element.style.display = markersVisible ? 'block' : 'none';
    });
  }, [markersVisible]);

  return <></>;
};

/**
 * Returns an SVG string representing the visual icon for the marker.
 *
 * @param {string} color - Fill color for the marker.
 * @param {string} [strokeColor='#000000'] - Optional stroke color.
 * @returns {string} SVG string to be injected into the DOM.
 */
const getMarkerSVG = (color, strokeColor = '#000000') => {
  return `
    <svg fill="${color}" width="30px" height="30px" viewBox="-51.2 -51.2 614.40 614.40" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="${strokeColor}" stroke-width="10.24">
        <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
      </g>
      <g id="SVGRepo_iconCarrier">
        <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
      </g>
    </svg>`;
};

export default MarkerFeature;
