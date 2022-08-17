export interface MainProps {
  setWeek: (text: string) => void;
  setCurrentCalendarTime: (i: number) => void;
  currentWeekEvents: string[];
  selectedTime: string;
  startOfWeek: string;
}
