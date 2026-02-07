import {useState , useEffect} from 'react';

// This defines what data the parent (Calendar) MUST pass to this component.
interface TimeSelectProps {
  label: string;                          // e.g., "Start Time" or "End Time"
  onChange: (timeString: string) => void; // A function to "call back" the parent with the result
}

export const TimeSelect = ({ label, onChange }: TimeSelectProps) => {
    // Keeping Track of 3 things : hour , Minute and AM/PM
    const [hour, setHour] = useState('12');
    const [minute, setMinute] = useState('00');
    const [ampm, setAmpm] = useState('AM');


useEffect(() => {
    // Combining 3 pieces onto one string : "09:00 AM"
    onChange(`${hour}:${minute} ${ampm}`);
}, [hour, minute, ampm, onChange]);

return (
    <div className="flex flex-col gap-1">
      {/* The Label (e.g., START TIME) */}
      <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">
        {label}
      </label>
      
      {/* The container for the 3 dropdowns */}
      <div className="flex border border-gray-300 rounded-md overflow-hidden bg-white"></div>

      {/* Hours Dropdown */}
        <select 
          value={hour} 
          onChange={(e) => setHour(e.target.value)} // Update state when user selects
          className="..."
        >
          {/* This creates an array [1, 2, ... 12] automatically */}
          {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
            <option key={h} value={h.toString().padStart(2, '0')}>
              {h.toString().padStart(2, '0')}
            </option>
          ))}
        </select>

        <span className="p-2 text-gray-400">:</span>

        {/* Minutes Dropdown */}
        <select value={minute} onChange={(e) => setMinute(e.target.value)} className="p-2 bg-transparent outline-none cursor-pointer text-sm hover:bg-gray-50" >
          {['00', '15', '30', '45'].map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
        {/* AM/PM Dropdown */}
        <select 
          value={ampm} 
          onChange={(e) => setAmpm(e.target.value)}
          className="p-2 bg-transparent outline-none cursor-pointer text-sm font-bold text-blue-600 bg-blue-50 hover:bg-blue-100"
        >
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
    
  );
};
