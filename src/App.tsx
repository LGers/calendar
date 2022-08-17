import moment from 'moment';
import React, { useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Wrapper } from './components/Wrapper';
import { formatDateToISO, getCurrentWeekDays, getCurrenWeekEvents, hasEvent } from './utils';

const initialState = {
  currentDate: moment().format(),
  selectedTime: '',
  calendarEvens: [] as string[],
};

function App() {
  const [state, setState] = useState(initialState);

  const setWeek = (text?: string) => {
    let dt = '';

    switch (text) {
      case 'prev':
        dt = moment(state.currentDate).subtract(1, 'week').format();
        break;

      case 'next':
        dt = moment(state.currentDate).add(1, 'week').format();
        break;

      default:
        dt = moment().format();
    }

    setState((state) => {
      return {
        ...state,
        currentDate: moment(dt).format(),
        currentWeek: getCurrentWeekDays(new Date(dt)),
        selectedTime: '',
      }
    });
  }

  const setCurrentCalendarTime = (i: number) => {
    getCurrenWeekEvents(state.calendarEvens, state.currentDate);
    const selectedTime = moment(state.currentDate)
      .startOf('isoWeek')
      .add(i, 'hour')
      .startOf('hour')
      .format();
    setState((state) => (
      {
        ...state,
        selectedTime,
      }
    ));
  };

  const addCalendarEvent = () => {
    const message = 'Enter event time \nYYYY:MM:DD HH:mm:ss';
    const placeholder = moment(state.selectedTime).isValid() ? moment(state.selectedTime).format('YYYY:MM:DD HH:mm:ss') : '';
    const res = prompt(message, placeholder);
    const date = formatDateToISO(res ?? '');
    if (!res) return;
    if (!moment(date).isValid()) {
      alert('Not valid date format \nYYYY:MM:DD HH:mm:ss');
      return;
    }
    if (!hasEvent(state.calendarEvens, state.selectedTime)) {
      setState((state) => ({
        ...state,
        calendarEvens: [...state.calendarEvens, moment(date).format()],
      }));
    }
  };

  const deleteEvent = () => {
    setState((state) =>({
      ...state,
      calendarEvens: state.calendarEvens.filter((el) => el !== state.selectedTime)
    }));
  };

  return (
    <Wrapper>
      <Header addEvent={addCalendarEvent}/>
      <Main
        setWeek={setWeek}
        setCurrentCalendarTime={setCurrentCalendarTime}
        currentWeekEvents={getCurrenWeekEvents(state.calendarEvens, state.currentDate)}
        selectedTime={state.selectedTime}
        startOfWeek={moment(state.currentDate).startOf('isoWeek').format()}
      />
      <Footer
        selectedTime={state.selectedTime}
        currentWeekEvents={getCurrenWeekEvents(state.calendarEvens, state.currentDate)}
        deleteEvent={deleteEvent}
        setWeek={setWeek}
      />
    </Wrapper>
  );
}

export default App;
