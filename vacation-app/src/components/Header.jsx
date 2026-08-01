export default function Header({ view, onChangeView }) {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
            ניהול חופשות
          </h1>
          <p className="text-sm text-gray-500">מערכת לניהול בקשות חופשה</p>
        </div>

        <div className="inline-flex self-start rounded-xl bg-gray-100 p-1 sm:self-auto">
          <button
            type="button"
            onClick={() => onChangeView('employee')}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              view === 'employee'
                ? 'bg-white text-indigo-700 shadow-sm'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            תצוגת עובד
          </button>
          <button
            type="button"
            onClick={() => onChangeView('manager')}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              view === 'manager'
                ? 'bg-white text-indigo-700 shadow-sm'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            תצוגת מנהל
          </button>
        </div>
      </div>
    </header>
  );
}
