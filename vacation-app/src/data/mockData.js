export const EMPLOYEES = [
  { id: 'e1', name: 'דנה כהן' },
  { id: 'e2', name: 'יוסי לוי' },
  { id: 'e3', name: 'מירב אברהם' },
  { id: 'e4', name: 'אבי גרין' },
];

// The employee currently "logged in" for the employee view mock
export const CURRENT_EMPLOYEE_ID = 'e1';

const today = new Date();
const addDays = (date, days) => {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
};
const toISO = (date) => date.toISOString().slice(0, 10);

export const INITIAL_VACATIONS = [
  {
    id: 'v1',
    employeeId: 'e1',
    startDate: toISO(addDays(today, 2)),
    endDate: toISO(addDays(today, 4)),
    note: 'טיול משפחתי',
  },
  {
    id: 'v2',
    employeeId: 'e2',
    startDate: toISO(addDays(today, 1)),
    endDate: toISO(addDays(today, 3)),
    note: 'חתונה משפחתית',
  },
  {
    id: 'v3',
    employeeId: 'e3',
    startDate: toISO(addDays(today, 0)),
    endDate: toISO(addDays(today, 1)),
    note: '',
  },
];
