export interface CalendarGridProps {
  setCurrentCalendarTime: (i: number) => void;
  currentWeekEvents: string[];
  selectedTime: string;
  startOfWeek: string;
}

export interface CellProps {
  selected?: boolean;
  haveEvent?:boolean;
}
