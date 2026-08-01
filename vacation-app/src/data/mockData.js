export const LEAVE_TYPES = ['חופשה שנתית', 'מחלה', 'חופשת לידה', 'אחר'];

export const STATUS = {
  PENDING: 'ממתין',
  APPROVED: 'מאושר',
  REJECTED: 'נדחה',
};

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

export const INITIAL_REQUESTS = [
  {
    id: 'r1',
    employeeId: 'e1',
    startDate: toISO(addDays(today, 2)),
    endDate: toISO(addDays(today, 4)),
    type: 'חופשה שנתית',
    note: 'טיול משפחתי',
    status: STATUS.PENDING,
    createdAt: toISO(addDays(today, -1)),
  },
  {
    id: 'r2',
    employeeId: 'e1',
    startDate: toISO(addDays(today, -10)),
    endDate: toISO(addDays(today, -8)),
    type: 'מחלה',
    note: '',
    status: STATUS.APPROVED,
    createdAt: toISO(addDays(today, -11)),
  },
  {
    id: 'r3',
    employeeId: 'e2',
    startDate: toISO(addDays(today, 1)),
    endDate: toISO(addDays(today, 3)),
    type: 'חופשה שנתית',
    note: 'חתונה משפחתית',
    status: STATUS.PENDING,
    createdAt: toISO(addDays(today, -2)),
  },
  {
    id: 'r4',
    employeeId: 'e3',
    startDate: toISO(addDays(today, 0)),
    endDate: toISO(addDays(today, 1)),
    type: 'אחר',
    note: '',
    status: STATUS.APPROVED,
    createdAt: toISO(addDays(today, -5)),
  },
  {
    id: 'r5',
    employeeId: 'e4',
    startDate: toISO(addDays(today, -3)),
    endDate: toISO(addDays(today, -1)),
    type: 'חופשה שנתית',
    note: 'ביקור משפחה',
    status: STATUS.REJECTED,
    createdAt: toISO(addDays(today, -6)),
  },
];
