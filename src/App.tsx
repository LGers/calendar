import React, { useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Wrapper } from './components/Wrapper';

const monthOptions = { month: 'long', year: 'numeric' };
const today: Date = new Date();

export const getCurrentWeekDays = ( date: Date): number[] => {
  const currentDate = date.getDate();
  const currentDay = date.getDay();
  const week = [];
  for( let i=0; i<=7; i++) {
    week.push(currentDate - currentDay + i);
  }
  return week;
};

const initialState = {
  today: (new Date()).toLocaleString('en-EN'),
  currentWeek: getCurrentWeekDays(today),
  monthYear: today.toLocaleDateString('en-EN', { month: 'long', year: 'numeric' }),
  calendarHeaderData: {
    date: today.getDate(),
    month: today.getMonth(),
    year: today.getFullYear(),
    week: getCurrentWeekDays(today),
  },

};

const setWeek = (text: string) => {
  console.log('set week fn: ', text);
}

const addCalendarEvent = () => {
  console.log('addCalendarEvent');
};

const deleteCalendarEvent = () => {
  console.log('deleteCalendarEvent');
};

const setCurrentCalendarTime = (i: number) => {
  console.log('setCurrentCalendarTime', i);
};

function App() {
  const [state, setState] = useState(initialState);

  return (
    <Wrapper>
      <Header addEvent={addCalendarEvent}/>
      <Main
        week={state.currentWeek}
        setWeek={setWeek}
        setCurrentCalendarTime={setCurrentCalendarTime}
      />
      <Footer />
    </Wrapper>
  );
}

export default App;
