import { STATUS } from '../data/mockData';

const STYLES = {
  [STATUS.PENDING]: 'bg-amber-100 text-amber-800',
  [STATUS.APPROVED]: 'bg-emerald-100 text-emerald-800',
  [STATUS.REJECTED]: 'bg-rose-100 text-rose-800',
};

export default function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${STYLES[status] || 'bg-gray-100 text-gray-700'}`}
    >
      {status}
    </span>
  );
}
