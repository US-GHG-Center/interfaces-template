import React, { useState, useRef, useEffect } from 'react';

// DateSlider Component
export function DateSlider({ play, startDate, endDate, stepSize }) {
  // Convert startDate and endDate to Date objects
  console.log(play, startDate, endDate, stepSize);
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Calculate the difference between start and end date in milliseconds
  const totalDuration = end - start;

  // Calculate the step size in milliseconds (stepSize in days)
  const step = stepSize; // stepSize is in days, so convert to milliseconds

  // Calculate the maximum number of steps (slider max value)
  const maxSteps = Math.floor(totalDuration / step);

  // State to store the current date based on the slider value
  const [currentDate, setCurrentDate] = useState(start);

  // Use ref to access the slider element
  const sliderRef = useRef(null);
  const intervalRef = useRef(null); // To hold the interval reference for clearing later

  // Update the current date when the slider value changes
  const handleSliderChange = (event) => {
    const sliderValue = event.target.value;
    const newDate = new Date(start.getTime() + sliderValue * step); // Calculate the new date based on slider value
    setCurrentDate(newDate);
  };

  // Function to start moving the slider from start to end
  const moveSliderAutomatically = () => {
    let currentStep = 0;

    // Clear any existing interval to prevent multiple intervals running at once
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Start the automatic movement
    intervalRef.current = setInterval(() => {
      if (currentStep <= maxSteps) {
        sliderRef.current.value = currentStep;
        handleSliderChange({ target: { value: currentStep } }); // Trigger slider change handler
        currentStep++;
      } else {
        clearInterval(intervalRef.current); // Stop when we reach the end
      }
    }, 500); // Adjust the speed by changing the interval time (500ms per step)
  };

  // Use useEffect to start the automatic movement when play prop changes
  useEffect(() => {
    if (play) {
      moveSliderAutomatically();
    } else {
      // Optionally, stop the slider if play is set to false
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  }, [play]); // Only run when play changes

  return (
    <input
      type='range'
      min='0'
      max={maxSteps}
      step='1'
      value={Math.round((currentDate - start) / step)} // Calculate the slider position based on current date
      onChange={handleSliderChange}
      ref={sliderRef} // Attach the ref to the slider
    />
  );
}

// TimelinePlayer Component (Parent Component)
export default function TimelinePlayer({ play }) {
  const startDate = '2024-01-01'; // Example start date
  const endDate = '2024-12-31'; // Example end date
  const stepSize = 7; // Step size in days (1 week per step)

  return (
    <div>
      <DateSlider
        play={play}
        startDate={startDate}
        endDate={endDate}
        stepSize={stepSize}
      />
    </div>
  );
}
