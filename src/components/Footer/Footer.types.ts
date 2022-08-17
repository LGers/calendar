export interface FooterProps {
  currentWeekEvents: string[];
  selectedTime: string;
  deleteEvent: () => void;
  setWeek: (text?: string) => void;
}
