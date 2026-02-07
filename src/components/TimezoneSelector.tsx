
import { type ChangeEvent } from 'react';

interface TimezoneSelectorProps {
  value: string;
  onChange: (timezone: string) => void;
}

// A small list of major timezones for the demo
const TIMEZONES = [
  'UTC',
  'Asia/Kolkata',        // India
  'America/New_York',    // USA (East)
  'America/Los_Angeles', // USA (West)
  'Europe/London',       // UK
  'Asia/Tokyo',          // Japan
  'Australia/Sydney',    // Australia
];

export const TimezoneSelector = ({ value, onChange }: TimezoneSelectorProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">
        Timezone
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
          className="appearance-none w-full bg-white border border-gray-300 hover:border-blue-500 px-4 py-2 pr-8 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all cursor-pointer"
        >
          {TIMEZONES.map((tz) => (
            <option key={tz} value={tz}>
              {tz.replace('_', ' ')}
            </option>
          ))}
        </select>
        
        {/* Custom Arrow Icon */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};