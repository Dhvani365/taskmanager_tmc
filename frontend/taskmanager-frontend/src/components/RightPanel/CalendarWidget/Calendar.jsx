import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { add, eachDayOfInterval, endOfMonth, format, isSameDay, parse, parseISO, startOfToday } from 'date-fns'
import { useState } from 'react'
import CalendarHeader from './CalendarHeader'
import CalendarDays from './CalendarDays'
import CalendarDeadlines from './CalendarDeadlines'

const deadlines = [
  { id: 1, name: 'Project Alpha', description: 'Complete the initial phase', deadline: '2025-01-01T23:59' },
  { id: 2, name: 'Project Beta', description: 'Submit final report', deadline: '2025-01-02T23:59' },
  { id: 3, name: 'Project Gamma', description: 'Client presentation', deadline: '2025-01-03T23:59' },
  { id: 4, name: 'Project Delta', description: 'Launch product', deadline: '2025-01-05T23:59' },
  { id: 5, name: 'Project Epsilon', description: 'Review and feedback', deadline: '2025-01-13T23:59' },
]

export default function Calendar() {
  const today = startOfToday()
  const [selectedDay, setSelectedDay] = useState(today)
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  const days = eachDayOfInterval({ start: firstDayCurrentMonth, end: endOfMonth(firstDayCurrentMonth) })

  const previousMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  const nextMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  const selectedDayDeadlines = deadlines.filter((deadline) =>
    isSameDay(parseISO(deadline.deadline), selectedDay)
  )

  return (
    <div className="pt-16 ">
      <div className="max-w-lg px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
        <div className="bg-[#011627] text-[#FDFFFC] rounded-lg p-4 shadow-lg border-2 border-[#F6AE2D]">
          <CalendarHeader
            currentMonth={currentMonth}
            previousMonth={previousMonth}
            nextMonth={nextMonth}
          />
          <CalendarDays
            days={days}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            deadlines={deadlines}
            firstDayCurrentMonth={firstDayCurrentMonth}
          />
          <CalendarDeadlines
            selectedDay={selectedDay}
            selectedDayDeadlines={selectedDayDeadlines}
          />
        </div>
      </div>
    </div>
  )
}