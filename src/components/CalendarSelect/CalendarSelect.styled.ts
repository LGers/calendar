import styled from 'styled-components';

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
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: 24px;
  
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
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
