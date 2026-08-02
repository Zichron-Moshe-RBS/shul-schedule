import Header from './components/Header';
import EmployeeView from './components/EmployeeView';
import ManagerView from './components/ManagerView';
import { INITIAL_VACATIONS } from './data/mockData';
import { useLocalStorageState } from './utils/useLocalStorageState';
import { useState } from 'react';

let nextId = INITIAL_VACATIONS.length + 1;

function App() {
  const [view, setView] = useState('employee');
  const [vacations, setVacations] = useLocalStorageState(
    'vacations',
    INITIAL_VACATIONS
  );

  function addVacation(form) {
    const newVacation = {
      id: `v${nextId++}`,
      employeeId: form.employeeId,
      startDate: form.startDate,
      endDate: form.endDate,
      note: form.note,
    };
    setVacations((prev) => [newVacation, ...prev]);
  }

  function deleteVacation(id) {
    setVacations((prev) => prev.filter((v) => v.id !== id));
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header view={view} onChangeView={setView} />

      {view === 'employee' ? (
        <EmployeeView
          vacations={vacations}
          onAddVacation={addVacation}
          onDeleteVacation={deleteVacation}
        />
      ) : (
        <ManagerView vacations={vacations} />
      )}
    </div>
  );
}

export default App;
