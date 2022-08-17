import styled, { css } from 'styled-components';
import { DayProps } from './CalendarHeader.types';

export const StyledCalendarSelect = styled.section`
  background-color: #f6f6f6;
  border-top: 2px solid #ebebeb;
  border-bottom: 2px solid #ebebeb;
  padding-left: 12.5%;
`;

export const WeekDayNames = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const WeekDayDates = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  font-size: 24px;
`;

export const WeekSelect = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  padding: 10px;
  font-size: 24px;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const Day = styled.div<DayProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  font-weight: 500;
  height: 50px;
  width: 50px;

  ${(props) =>
          props.isToday &&
          css`
            background-color: #ff3131;
            color: #ffffff;
            border-radius: 50%;
          `}
`
