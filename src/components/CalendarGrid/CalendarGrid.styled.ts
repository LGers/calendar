import styled, { css } from 'styled-components';
import { CellProps } from './CalendarGrid.types';

export const StyledCalendarGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 7fr;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  overflow-y: auto;
  height: 100%;
`;

export const CalendarTable = styled.div`
  display: grid;
  grid-template-rows: repeat(24, 1fr);
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  grid-auto-flow: column;

  & > div {
    display: flex;
    justify-content: center;
    width: 100%;
    border-top: 1px solid #e6e6e6;
    border-right: 1px solid #e6e6e6;

    &:nth-child(n+145) {
      border-right: none;
    }
  }
`;

export const Cell = styled.div<CellProps>`
  margin: 2px;
  height: 50px;
  width: 100%;
  transition: 0.35s ease-in-out;

  &:hover {
    background-color: #ebecff;
    opacity: 0.7;
    transform: scale(1.1);
    transition: 0.15s ease-in-out;
  }

  ${(props) =>
          props.haveEvent &&
          css`
            background-color: #ebecff;
          `}

  ${(props) =>
          props.selected &&
          css`
            background-color: #b3b7ff;
            &:hover {
              background-color: #b3b7ff;
              opacity: 0.7;
              transform: scale(1.1);
              transition: 0.15s ease-in-out;
            }
          `}
`;

export const Times = styled.div`
  display: grid;
  grid-template-rows: repeat(24, 1fr);
  height: 100%;
  color: #e6e6e6;

  & div {
    display: flex;
    justify-content: center;
    position: relative;
    top: -12px;
  }
`;
