import { useState } from 'react';
import { generateCalendarGrid, type CalendarDate } from '../utils/dateLogic';

// Defining the props we expect from the parent
interface CalendarGridProps {
  startDate: Date | null;
  endDate: Date | null;
  onDateClick: (date: Date) => void;
}

// Adding the props to the function 
export const CalendarGrid = ({ startDate, endDate, onDateClick }: CalendarGridProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const days = generateCalendarGrid(year, month);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Checking if a day is inside the selected range
  const isInRange = (date: Date) => {
    if (!startDate || !endDate) return false;
    return date > startDate && date < endDate;
  };

  // Checking if a day is exactly the Start or End
  const isSelected = (date: Date) => {
    return (startDate && date.toDateString() === startDate.toDateString()) ||
           (endDate && date.toDateString() === endDate.toDateString());
  };

  return (
    <div className="w-80 bg-white border border-gray-200 rounded-lg shadow-sm p-4 select-none">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={() => setCurrentDate(new Date(year, month - 1, 1))}
          className="p-1 hover:bg-gray-100 rounded text-gray-600"
        >
          &lt;
        </button>
        <h2 className="font-bold text-gray-800">
          {monthNames[month]} {year}
        </h2>
        <button 
          onClick={() => setCurrentDate(new Date(year, month + 1, 1))}
          className="p-1 hover:bg-gray-100 rounded text-gray-600"
        >
          &gt;
        </button>
      </div>

      {/* Weekday Labels */}
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
          <div key={day} className="text-xs font-medium text-gray-400">
            {day}
          </div>
        ))}
      </div>

      {/* The Days Grid */}
      <div className="grid grid-cols-7 gap-y-1">
        {days.map((dayObj: CalendarDate, index: number) => {
          const selected = isSelected(dayObj.date);
          const inRange = isInRange(dayObj.date);
          const isToday = dayObj.isToday;
          
          return (
            <button
              key={index}
              onClick={() => onDateClick(dayObj.date)}
              className={`
                h-9 w-full text-sm flex items-center justify-center relative
                transition-all duration-200  /* <--- 1. SMOOTH ANIMATION ADDED HERE */
                
                ${!dayObj.isCurrentMonth ? 'text-gray-300' : 'text-gray-800'}
                ${selected ? 'bg-blue-600 text-white rounded-full z-10' : ''}
                ${inRange ? 'bg-blue-50 text-blue-700 font-medium' : ''} /* <--- 2. BETTER RANGE COLOR */
                
                /* For better hover effect */
                ${!selected && !inRange && dayObj.isCurrentMonth 
                    ? 'hover:bg-blue-50 hover:text-blue-600 rounded-full' 
                    : ''}
                
                ${isToday && !selected ? 'font-bold text-blue-600' : ''}
              `}
            >
              {dayObj.date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
};


























// // src/components/CalendarGrid.tsx
// import { useState } from 'react';
// import { generateCalendarGrid, type CalendarDate } from '../utils/dateLogic';

// export const CalendarGrid = () => {
//   const [currentDate, setCurrentDate] = useState(new Date());
  
//   // Initially null because nothing is selected yet
//   const [startDate, setStartDate] = useState<Date | null>(null);
//   const [endDate, setEndDate] = useState<Date | null>(null);

//   const year = currentDate.getFullYear();
//   const month = currentDate.getMonth();
//   const days = generateCalendarGrid(year, month);

//   const monthNames = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
//   ];

//   // Logic: Handle what happens when a user clicks a day
//   const handleDateClick = (clickedDate: Date) => {

//     // Case 1 : If nothing is selected OR both are already selected
//     if (!startDate || (startDate && endDate)) {
//       setStartDate(clickedDate);    //Setting start date after it clicked
//       setEndDate(null);        //Resetting end date to null because we are starting a new selection
//     } 
//     // Case 2 : Backward selection i.e if user first clicks 10 feb and then click 5 feb then 5 feb should become start and 10 feb should become end
//     else if (clickedDate < startDate) {
//       setStartDate(clickedDate);
//     }
//    // Case 3: User clicked a date AFTER the start date -> Make it the end
//     else {
//       setEndDate(clickedDate);
//     }
//   };

//   // Helper functions to check if a day is inside the selected range
//   const isInRange = (date: Date) => {
//     if (!startDate || !endDate) return false;
//     return date > startDate && date < endDate;
//   };

//   // Checking  if a day is exactly the Start or End
//   const isSelected = (date: Date) => {
//     return (startDate && date.toDateString() === startDate.toDateString()) ||
//            (endDate && date.toDateString() === endDate.toDateString());
//   };

//   return (
//     <div className="w-80 bg-white border border-gray-200 rounded-lg shadow-lg p-4 select-none">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <button 
//           onClick={() => setCurrentDate(new Date(year, month - 1, 1))}
//           className="p-1 hover:bg-gray-100 rounded text-gray-600"
//         >
//           &lt;
//         </button>
//         <h2 className="font-bold text-gray-800">
//           {monthNames[month]} {year}
//         </h2>
//         <button 
//           onClick={() => setCurrentDate(new Date(year, month + 1, 1))}
//           className="p-1 hover:bg-gray-100 rounded text-gray-600"
//         >
//           &gt;
//         </button>
//       </div>

//       {/* Weekday Labels */}
//       <div className="grid grid-cols-7 gap-1 text-center mb-2">
//         {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
//           <div key={day} className="text-xs font-medium text-gray-400">
//             {day}
//           </div>
//         ))}
//       </div>

//       {/* The Days Grid */}
//       <div className="grid grid-cols-7 gap-y-1">
//         {days.map((dayObj: CalendarDate, index: number) => {
//           // Calculate styles based on state
//           const selected = isSelected(dayObj.date);
//           const inRange = isInRange(dayObj.date);
//           const isToday = dayObj.isToday;
          
//           return (
//             <button
//               key={index}
//               onClick={() => DateClick(dayObj.date)}
//               className={`
//                 h-9 w-full text-sm flex items-center justify-center relative
//                 ${!dayObj.isCurrentMonth ? 'text-gray-300' : 'text-gray-800'}
                
//                 /* Selection Styles */
//                 ${selected ? 'bg-blue-600 text-white rounded-full z-10' : ''}
//                 ${inRange ? 'bg-blue-100' : ''}
                
//                 /* Hover Styles (only if not selected) */
//                 ${!selected && !inRange && dayObj.isCurrentMonth ? 'hover:bg-gray-100 rounded-full' : ''}
                
//                 /* Today Marker (small dot if not selected) */
//                 ${isToday && !selected ? 'font-bold text-blue-600' : ''}
//               `}
//             >
//               {dayObj.date.getDate()}
//             </button>
//           );
//         })}
//       </div>
      
//       {/* Debug Info (So you can see the dates updating!) */}
//       <div className="mt-4 text-xs text-gray-500 border-t pt-2">
//         <p>Start: {startDate ? startDate.toDateString() : 'None'}</p>
//         <p>End: {endDate ? endDate.toDateString() : 'None'}</p>
//       </div>
//     </div>
//   );
// };