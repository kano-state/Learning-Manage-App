import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import jaLocale from '@fullcalendar/core/locales/ja';
import "./calendar_style/Calendar.css"

function Calendar() {
  return (
    <div className='calendar'>
       <FullCalendar viewClassNames="calendarArea"
       plugins={[dayGridPlugin,timeGridPlugin,listPlugin]}
       initialView="dayGridMonth"
       locales={[jaLocale]}
       locale='ja'
       headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth, timeGridWeek, listWeek',
      }}
      events={[
        {title:'eventを', start: '2022-03-14'},
        {title:'こんな感じで追加できます', start: '2023-01-30', end: '2023-01-30'}
      ]}
      />
    </div>
  );
}

export default Calendar