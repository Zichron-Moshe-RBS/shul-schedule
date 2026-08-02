import { useState } from 'react';
import { EMPLOYEES } from '../data/mockData';
import { getWeekDates, toISO, isDateWithinRange, WEEKDAY_NAMES_HE } from '../utils/date';

export default function WeeklyOverview({ vacations }) {
  const [weekOffset, setWeekOffset] = useState(0);

  const anchor = new Date();
  anchor.setDate(anchor.getDate() + weekOffset * 7);
  const weekDates = getWeekDates(anchor);
  const todayISO = toISO(new Date());

  function employeesOnLeave(dateISO) {
    const ids = new Set(
      vacations
        .filter((v) => isDateWithinRange(dateISO, v.startDate, v.endDate))
        .map((v) => v.employeeId)
    );
    return EMPLOYEES.filter((e) => ids.has(e.id));
  }

  const rangeLabel = `${weekDates[0].toLocaleDateString('he-IL', { day: 'numeric', month: 'numeric' })} - ${weekDates[6].toLocaleDateString('he-IL', { day: 'numeric', month: 'numeric', year: 'numeric' })}`;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-gray-900">
          מי בחופשה השבוע
        </h2>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setWeekOffset((w) => w - 1)}
            className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50"
          >
            שבוע קודם
          </button>
          <span className="min-w-[110px] text-center text-sm text-gray-500">
            {rangeLabel}
          </span>
          <button
            type="button"
            onClick={() => setWeekOffset((w) => w + 1)}
            className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50"
          >
            שבוע הבא
          </button>
          {weekOffset !== 0 && (
            <button
              type="button"
              onClick={() => setWeekOffset(0)}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-indigo-600 hover:bg-indigo-50"
            >
              היום
            </button>
          )}
        </div>
      </div>

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
