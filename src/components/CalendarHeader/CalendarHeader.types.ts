export interface CalendarHeaderProps {
  setWeek: (text: string) => void;
  startOfWeek: string;
}

export interface DayProps {
  isToday: boolean;
}