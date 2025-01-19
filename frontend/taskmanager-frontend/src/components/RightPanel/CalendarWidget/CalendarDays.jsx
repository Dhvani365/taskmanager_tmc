import { isEqual, isToday, isSameMonth, getDay, format, parseISO, isSameDay } from 'date-fns'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
]

export default function CalendarDays({ days, selectedDay, setSelectedDay, deadlines, firstDayCurrentMonth }) {
  return (
    <>
      <div className="grid grid-cols-7 mt-4 text-xs leading-6 text-center text-white">
        <div>S</div>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
      </div>
      <div className="grid grid-cols-7 mt-2 text-sm">
        {days.map((day, dayIdx) => (
          <div
            key={day.toString()}
            className={classNames(
              dayIdx === 0 && colStartClasses[getDay(day)],
              'py-0.5'
            )}
          >
            <button
              type="button"
              onClick={() => setSelectedDay(day)}
              className={classNames(
                isEqual(day, selectedDay) && 'text-white bg-[#F6AE2D]',
                !isEqual(day, selectedDay) &&
                  isToday(day) &&
                  'text-green-500',
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  isSameMonth(day, firstDayCurrentMonth) &&
                  'text-white',
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  !isSameMonth(day, firstDayCurrentMonth) &&
                  'text-gray-400',
                isEqual(day, selectedDay) && isToday(day) && 'bg-green-500',
                isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  'bg-gray-900',
                !isEqual(day, selectedDay) && 'hover:bg-[#F6AE2D]',
                (isEqual(day, selectedDay) || isToday(day)) &&
                  'font-semibold',
                'mx-auto flex h-7 w-7 items-center justify-center rounded-full relative'
              )}
            >
              <time dateTime={format(day, 'yyyy-MM-dd')}>
                {format(day, 'd')}
              </time>

              {/* Circle Indicator */}
              <div className="">
                {deadlines.some((deadline) =>
                  isSameDay(parseISO(deadline.deadline), day)
                ) && (
                  <div className="w-1 h-1 border-2 border-[#ff1e01] rounded-full bottom-0 "></div>
                )}
              </div>
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
