import { useState } from 'react';
import Header from './components/Header';
import EmployeeView from './components/EmployeeView';
import ManagerView from './components/ManagerView';
import { INITIAL_REQUESTS, STATUS } from './data/mockData';

let nextId = INITIAL_REQUESTS.length + 1;

function App() {
  const [view, setView] = useState('employee');
  const [requests, setRequests] = useState(INITIAL_REQUESTS);

  function addRequest(form) {
    const newRequest = {
      id: `r${nextId++}`,
      employeeId: form.employeeId,
      startDate: form.startDate,
      endDate: form.endDate,
      type: form.type,
      note: form.note,
      status: STATUS.PENDING,
      createdAt: new Date().toISOString().slice(0, 10),
    };
    setRequests((prev) => [newRequest, ...prev]);
  }

  function updateStatus(id, status) {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status } : r))
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header view={view} onChangeView={setView} />

      {view === 'employee' ? (
        <EmployeeView requests={requests} onAddRequest={addRequest} />
      ) : (
        <ManagerView
          requests={requests}
          onApprove={(id) => updateStatus(id, STATUS.APPROVED)}
          onReject={(id) => updateStatus(id, STATUS.REJECTED)}
        />
      )}
    </div>
  );
}

export default App;
