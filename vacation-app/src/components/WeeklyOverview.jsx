import { EMPLOYEES, STATUS } from '../data/mockData';
import { getWeekDates, toISO, isDateWithinRange, WEEKDAY_NAMES_HE } from '../utils/date';

export default function WeeklyOverview({ requests }) {
  const weekDates = getWeekDates();
  const approved = requests.filter((r) => r.status === STATUS.APPROVED);
  const todayISO = toISO(new Date());

  function employeesOnLeave(dateISO) {
    const ids = new Set(
      approved
        .filter((r) => isDateWithinRange(dateISO, r.startDate, r.endDate))
        .map((r) => r.employeeId)
    );
    return EMPLOYEES.filter((e) => ids.has(e.id));
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">
        מי בחופשה השבוע
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-7">
        {weekDates.map((date, i) => {
          const dateISO = toISO(date);
          const onLeave = employeesOnLeave(dateISO);
          const isToday = dateISO === todayISO;

          return (
            <div
              key={dateISO}
              className={`rounded-xl border p-3 ${
                isToday
                  ? 'border-indigo-300 bg-indigo-50'
                  : 'border-gray-100 bg-gray-50'
              }`}
            >
              <p className="text-sm font-semibold text-gray-800">
                {WEEKDAY_NAMES_HE[i]}
              </p>
              <p className="mb-2 text-xs text-gray-500">
                {date.toLocaleDateString('he-IL', {
                  day: 'numeric',
                  month: 'numeric',
                })}
              </p>

              {onLeave.length === 0 ? (
                <p className="text-xs text-gray-400">אין חופשות</p>
              ) : (
                <ul className="space-y-1">
                  {onLeave.map((e) => (
                    <li
                      key={e.id}
                      className="truncate rounded-md bg-white px-2 py-1 text-xs text-gray-700 shadow-sm"
                    >
                      {e.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
