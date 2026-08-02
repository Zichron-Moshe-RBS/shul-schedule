import { EMPLOYEES, CURRENT_EMPLOYEE_ID } from '../data/mockData';
import { formatDateHe } from '../utils/date';
import LeaveRequestForm from './LeaveRequestForm';

export default function EmployeeView({ vacations, onAddVacation, onDeleteVacation }) {
  const currentEmployee = EMPLOYEES.find((e) => e.id === CURRENT_EMPLOYEE_ID);
  const myVacations = vacations
    .filter((v) => v.employeeId === CURRENT_EMPLOYEE_ID)
    .sort((a, b) => b.startDate.localeCompare(a.startDate));

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-6">
      <div className="rounded-2xl bg-indigo-50 px-5 py-3 text-sm text-indigo-800">
        מחובר/ת כ<span className="font-semibold">{currentEmployee?.name}</span>
      </div>

      <LeaveRequestForm
        onSubmit={(form) =>
          onAddVacation({ ...form, employeeId: CURRENT_EMPLOYEE_ID })
        }
      />

      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">
          החופשות שלי
        </h2>

        {myVacations.length === 0 ? (
          <p className="py-6 text-center text-sm text-gray-500">
            עדיין לא סומנו חופשות
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[420px] text-right text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500">
                  <th className="py-2 font-medium">תאריך התחלה</th>
                  <th className="py-2 font-medium">תאריך סיום</th>
                  <th className="py-2 font-medium">הערה</th>
                  <th className="py-2 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {myVacations.map((v) => (
                  <tr key={v.id} className="border-b border-gray-100 last:border-0">
                    <td className="py-3 text-gray-800">
                      {formatDateHe(v.startDate)}
                    </td>
                    <td className="py-3 text-gray-800">
                      {formatDateHe(v.endDate)}
                    </td>
                    <td className="py-3 text-gray-500">{v.note || '—'}</td>
                    <td className="py-3 text-left">
                      <button
                        type="button"
                        onClick={() => onDeleteVacation(v.id)}
                        className="text-xs font-medium text-rose-600 hover:underline"
                      >
                        מחיקה
                      </button>
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
