import WeeklyOverview from './WeeklyOverview';

export default function ManagerView({ vacations }) {
  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-6">
      <WeeklyOverview vacations={vacations} />
    </div>
  );
}
