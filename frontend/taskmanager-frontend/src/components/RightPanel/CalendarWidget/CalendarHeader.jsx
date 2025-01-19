import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

export default function CalendarHeader({ currentMonth, previousMonth, nextMonth }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="font-semibold">
        {currentMonth}
      </h2>
      <div className="flex items-center">
        <button
          type="button"
          onClick={previousMonth}
          className="p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Previous month</span>
          <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
        </button>
        <button
          onClick={nextMonth}
          type="button"
          className="p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Next month</span>
          <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}