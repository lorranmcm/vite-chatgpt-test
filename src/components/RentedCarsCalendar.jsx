import React from 'react';

const rentedCars = [
  { id: 1, carType: 'Sedan', rentedDate: '2023-03-05', returnDate: '2023-03-10' },
  { id: 2, carType: 'SUV', rentedDate: '2023-03-12', returnDate: '2023-03-14' },
  { id: 3, carType: 'Sports car', rentedDate: '2023-03-16', returnDate: '2023-03-21' },
  { id: 4, carType: 'Minivan', rentedDate: '2023-03-23', returnDate: '2023-03-25' },
];

const RentedCarsCalendar = () => {
  const daysInMonth = 31;
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Create a calendar array with each element representing a day in the month
  const calendar = Array.from({ length: daysInMonth }, (_, index) => index + 1);
  
  // Map over the calendar array to create the day labels and the rented car data for each day
  const calendarDays = calendar.map((day) => {
    // Get the day of the week for the current day
    const dayOfWeek = daysOfWeek[new Date(2023, 2, day).getDay()];
    
    // Filter the rented cars to get the ones that overlap with the current day
    const rentedCarsForDay = rentedCars.filter((car) => {
      const rentedDate = new Date(car.rentedDate);
      const returnDate = new Date(car.returnDate);
      return rentedDate <= new Date(2023, 2, day) && returnDate >= new Date(2023, 2, day);
    });
    
    // Create the rented car display for the current day
    const rentedCarDisplay = rentedCarsForDay.map((car) => (
      <div key={car.id} className="rented-car">{car.carType}</div>
    ));
    
    return (
      <div key={day} className="calendar-day">
        <div className="day-label">{dayOfWeek} {day}</div>
        <div className="rented-cars">{rentedCarDisplay}</div>
      </div>
    );
  });
  
  return (
    <div className="rented-cars-calendar">
      {calendarDays}
    </div>
  );
};

export default RentedCarsCalendar;
