import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { NavBar } from "../"
import { addHours } from 'date-fns'

import { getMessagesES, localizer } from '../../helpers'

const events = [{
  title: 'Cumpleanos',
  notes: 'pastel',
  start: new Date,
  end: addHours(new Date(),2)
}]

export const CalendarPage = () => {
  const eventStyleGetter = (event, start, end,isSelected) => {
    console.log({ event,start,end,isSelected});
  }

  return (
    <> 
    <NavBar />
    <div>
    <Calendar
      culture='es'
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 'calc(100vh - 80px)' }}
      messages={ getMessagesES()}
      eventPropGetter={eventStyleGetter}
    />
  </div>
    </>
  )
}
