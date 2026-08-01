import { STATUS } from '../data/mockData';
import PendingRequests from './PendingRequests';
import WeeklyOverview from './WeeklyOverview';

export default function ManagerView({ requests, onApprove, onReject }) {
  const pending = requests
    .filter((r) => r.status === STATUS.PENDING)
    .sort((a, b) => a.startDate.localeCompare(b.startDate));

  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-6">
      <PendingRequests
        requests={pending}
        onApprove={onApprove}
        onReject={onReject}
      />
      <WeeklyOverview requests={requests} />
    </div>
  );
}
