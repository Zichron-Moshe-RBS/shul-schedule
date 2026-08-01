import { EMPLOYEES } from '../data/mockData';
import { formatDateHe } from '../utils/date';

function employeeName(id) {
  return EMPLOYEES.find((e) => e.id === id)?.name || 'לא ידוע';
}

export default function PendingRequests({ requests, onApprove, onReject }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">
        בקשות ממתינות לאישור
        {requests.length > 0 && (
          <span className="mr-2 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
            {requests.length}
          </span>
        )}
      </h2>

      {requests.length === 0 ? (
        <p className="py-6 text-center text-sm text-gray-500">
          אין בקשות ממתינות כרגע
        </p>
      ) : (
        <ul className="space-y-3">
          {requests.map((r) => (
            <li
              key={r.id}
              className="flex flex-col gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-medium text-gray-900">
                  {employeeName(r.employeeId)}
                </p>
                <p className="text-sm text-gray-500">
                  {formatDateHe(r.startDate)} — {formatDateHe(r.endDate)} ·{' '}
                  {r.type}
                </p>
                {r.note && (
                  <p className="mt-1 text-sm text-gray-500">"{r.note}"</p>
                )}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => onApprove(r.id)}
                  className="rounded-lg bg-emerald-600 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  אשר
                </button>
                <button
                  type="button"
                  onClick={() => onReject(r.id)}
                  className="rounded-lg bg-rose-600 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-rose-700"
                >
                  דחה
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
