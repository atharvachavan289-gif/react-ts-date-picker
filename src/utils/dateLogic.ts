// In this file we will get to know about days in the month logic

export interface CalendarDate {
    date : Date;                    //actual date
    isCurrentMonth : boolean;       //to check if this day is part of selected month or not
    isToday : boolean;              //to check if this day is today or not
}

export const generateCalendarGrid = (year: number, month: number): CalendarDate[] => {
    // to know at which day the month starts 
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    //  to find out no.of days in this month 
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const grid: CalendarDate[] = [];
    const today = new Date();

    //Days from the previous month 
    const prevMonthDays = new Date (year, month, 0).getDate();
    for (let i = firstDayOfMonth - 1; i >= 0 ; i--) {
        grid.push({
            date : new Date(year , month -1, prevMonthDays -i),
            isCurrentMonth : false,
            isToday : false
        });
    }
    
    //Days of the current month
    for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date (year , month , i);
        //Checking if this date is today or not
        const isToday = date.getDate() === today.getDate() &&
                        date.getMonth() === today.getMonth() &&
                        date.getFullYear() === today.getFullYear();
        
        grid.push({
            date: date,
            isCurrentMonth : true,
            isToday : isToday
        });            
    }

    //Adding days from the next month to fill the grid 
    const remainingSlots = 42 - grid.length;
    for (let i = 1; i<= remainingSlots ; i++){
        grid.push ({
            date : new Date(year, month + 1, i),
            isCurrentMonth : false,
            isToday : false
        })
    }
    return grid;
}