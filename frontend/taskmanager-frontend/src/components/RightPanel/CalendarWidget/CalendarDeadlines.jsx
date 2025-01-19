import { format } from 'date-fns'
import Deadline from './Deadline'

export default function CalendarDeadlines({ selectedDay, selectedDayDeadlines }) {
  return (
    <section className="mt-12">
      <h2 className="font-semibold">
        Deadlines for{' '}
        <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
          {format(selectedDay, 'MMM dd, yyy')}
        </time>
      </h2>
      <ol className="mt-4 space-y-1 text-sm leading-6 ">
        {selectedDayDeadlines.length > 0 ? (
          selectedDayDeadlines.map((deadline) => (
            <Deadline deadline={deadline} key={deadline.id} />
          ))
        ) : (
          <p>No deadlines for today.</p>
        )}
      </ol>
    </section>
  )
}