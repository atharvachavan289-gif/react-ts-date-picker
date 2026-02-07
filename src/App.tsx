import { CalendarGrid } from "./components/CalendarGrid";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {/* Placing the calendar in the center of the screen */}
      <CalendarGrid />
    </div>
  );
}

export default App;