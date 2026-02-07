import { useState } from 'react';
import { CalendarGrid } from './CalendarGrid';
import { TimeSelect } from './TimeSelect';
import { TimezoneSelector } from './TimezoneSelector';

export const DateRangePicker = () => {
  //  The Master State (Holds all data)
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState('09:00 AM');
  const [endTime, setEndTime] = useState('05:00 PM');
  const [timezone, setTimezone] = useState('UTC');

  // This function will be passed down to CalendarGrid to receive the selected dates
  const handleDateClick = (clickedDate: Date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(clickedDate);
      setEndDate(null); // Reset end date
    } else if (clickedDate < startDate) {
      setStartDate(clickedDate); // New start date
    } else {
      setEndDate(clickedDate); // Set end date
    }
  };

  // Helper to make dates readable 
  const formatDate = (d: Date | null) => d ? d.toDateString() : 'Select Date';

  //Creating a function that combines Date + Time + Timezone into one string
    const getFinalDebugString = (date : Date | null, timeStr : string , tz : string) => {
        if (!date) return 'Waiting.....';

        //Parsing the time (e.g : 09:00 PM = 21:00)

        // Spliting the string "09:00 AM"
    const parts = timeStr.split(' ');
    const timePart = parts[0] || '00:00'; // Default to 00:00 if missing
    const modifier = parts[1] || 'AM';    // Default to AM if missing

    // Spliting "09:00" into hours and minutes
    const timeValues = timePart.split(':');
    let hours = parseInt(timeValues[0] || '0');   // Default to 0
    let minutes = parseInt(timeValues[1] || '0'); // Default to 0
        if(hours === 12) hours = 0; // For handling 12 AM/PM edge case
        if(modifier === 'PM') hours += 12;

        //Creating a date object with the exact values like , we are using the year,month day from the picker and hours/min from dropdown
        const result = new Date(date);
        result.setHours (hours , minutes , 0,0);

        //Displaying it using browser's built-in Intl API
        try {
            return new Intl.DateTimeFormat('en-US', {
                dateStyle : 'full',
                timeStyle : 'long',
                timeZone : tz,
            }).format(result)
        }catch (e) {
            return 'Invalid Timezone';
        }
    }

  return (
    <div className="flex flex-col gap-6 p-6 bg-white rounded-xl shadow-2xl max-w-2xl border border-gray-100">
      

      {/* Timezone Selector  */}
      <div className="flex justify-end border-b pb-4">
        <div className="w-48">
          <TimezoneSelector value={timezone} onChange={setTimezone} />
        </div>
      </div>
      {/* Top Section: The Calendar */}
      <div className="flex justify-center">
        <CalendarGrid 
          startDate={startDate} 
          endDate={endDate} 
          onDateClick={handleDateClick} 
        />
      </div>

      {/*  Time Selectors */}
      <div className="flex justify-between items-center border-t pt-6">
        <div>
          <p className="text-sm font-bold text-blue-600 mb-2">{formatDate(startDate)}</p>
          <TimeSelect label="Start Time" onChange={setStartTime} />
        </div>
        <div className="text-gray-300 text-2xl">→</div>
        <div>
          <p className="text-sm font-bold text-blue-600 mb-2">{formatDate(endDate)}</p>
          <TimeSelect label="End Time" onChange={setEndTime} />
        </div>
      </div>

      {/*  Final Output Display */}
      <div className="bg-gray-800 text-green-400 p-4 rounded-lg text-xs font-mono mt-4">
        <p className="font-bold text-gray-500 mb-2 uppercase tracking-wider">Final Output ({timezone})</p>
        <p>Start: {getFinalDebugString(startDate, startTime, timezone)}</p>
        <p>End:   {getFinalDebugString(endDate, endTime, timezone)}</p>
      </div>
    </div>
  );
};