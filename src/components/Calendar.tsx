import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/CustomCalendar.css';

type Props = {
  selectedDate: Date;
  onChange: (date: Date) => void;
};

export default function Calendar({ selectedDate, onChange }: Props) {
  return (
    <div className="bg-white p-4 rounded-xl shadow border h-[460px] flex flex-col justify-between">
      <ReactCalendar
        onChange={(value: Date | Date[]) => onChange(value as Date)}
        value={selectedDate}
        calendarType="US"
        locale="ko-KR"
        className="w-full"
        formatDay={(_, date) => String(date.getDate())} 
      />
    </div>
  );
}
