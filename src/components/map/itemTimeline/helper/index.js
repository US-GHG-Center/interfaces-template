export function addTimelineMarkers(start_date, end_date, color) {
  let slider = document.querySelector('.mapboxgl-ctrl-timeline__slider');
  const sliderRect = slider.getBoundingClientRect();
  const parentRect = slider.parentNode.getBoundingClientRect();
  const existingMarkers =
    slider.parentNode.querySelectorAll('.timeline-marker');
  console.log({ sliderRect, parentRect, existingMarkers });
  const offsetLeftStart = sliderRect.left - parentRect.left;
  slider.parentNode.style.position = 'relative';

  // Function to create a marker
  //   function createMarker(color, leftOffset) {
  //     const marker = document.createElement("div");
  //     marker.style.position = "absolute";
  //     marker.style.width = "4px";
  //     marker.style.height = "4px";
  //     marker.style.opacity = "1";
  //     marker.style.borderRadius = "50%";
  //     marker.style.backgroundColor = color;
  //     marker.style.left = `${leftOffset}px`;
  //     marker.style.top = `${slider.offsetTop}px`;
  //     slider.parentNode.appendChild(marker);
  //   }
  const startTime = new Date(start_date).getTime();
  const endTime = new Date(end_date).getTime();
  const totalDuration = endTime - startTime;

  //   utcTimesObserved.forEach((timeObserved) => {
  //     const observedTime = new Date(timeObserved).getTime();
  //     const relativePosition = (observedTime - startTime) / totalDuration;
  //     const observedOffsetLeft =
  //       offsetLeftStart + relativePosition * sliderRect.width;
  //     createMarker(color, observedOffsetLeft);
  //     console.log(observedOffsetLeft);
  //   });
}
