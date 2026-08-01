import { EMPLOYEES, CURRENT_EMPLOYEE_ID } from '../data/mockData';
import { formatDateHe } from '../utils/date';
import LeaveRequestForm from './LeaveRequestForm';
import StatusBadge from './StatusBadge';

export default function EmployeeView({ requests, onAddRequest }) {
  const currentEmployee = EMPLOYEES.find((e) => e.id === CURRENT_EMPLOYEE_ID);
  const myRequests = requests
    .filter((r) => r.employeeId === CURRENT_EMPLOYEE_ID)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-6">
      <div className="rounded-2xl bg-indigo-50 px-5 py-3 text-sm text-indigo-800">
        מחובר/ת כ<span className="font-semibold">{currentEmployee?.name}</span>
      </div>

      <LeaveRequestForm
        onSubmit={(form) =>
          onAddRequest({ ...form, employeeId: CURRENT_EMPLOYEE_ID })
        }
      />

      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">
          החופשות שלי
        </h2>

        {myRequests.length === 0 ? (
          <p className="py-6 text-center text-sm text-gray-500">
            עדיין לא הוגשו בקשות חופשה
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px] text-right text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500">
                  <th className="py-2 font-medium">תאריך התחלה</th>
                  <th className="py-2 font-medium">תאריך סיום</th>
                  <th className="py-2 font-medium">סוג</th>
                  <th className="py-2 font-medium">הערה</th>
                  <th className="py-2 font-medium">סטטוס</th>
                </tr>
              </thead>
              <tbody>
                {myRequests.map((r) => (
                  <tr key={r.id} className="border-b border-gray-100 last:border-0">
                    <td className="py-3 text-gray-800">
                      {formatDateHe(r.startDate)}
                    </td>
                    <td className="py-3 text-gray-800">
                      {formatDateHe(r.endDate)}
                    </td>
                    <td className="py-3 text-gray-800">{r.type}</td>
                    <td className="py-3 text-gray-500">{r.note || '—'}</td>
                    <td className="py-3">
                      <StatusBadge status={r.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
