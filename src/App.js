import './css/sb-admin-2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Login';
import Portal from './Portal';
import Dashboard from './Dashboard';
import Students from './Students';
import CreateStudent from './CreateStudent';
import EditStudent from './EditStudent';
import ViewStudent from './ViewStudent';
import Teachers from './Teachers';
import CreateTeacher from './CreateTeacher';
import EditTeacher from './EditTeacher';
import ViewTeacher from './ViewTeacher';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/portal" element={<Portal />} >

            <Route path="dashboard" element={<Dashboard />} />

            <Route path="students" element={<Students />} />
            <Route path="create-student" element={<CreateStudent />} />
            <Route path="students/edit/:id" element={<EditStudent />} />
            <Route path="students/:id" element={<ViewStudent />} />

            <Route path="teachers" element={<Teachers />} />
            <Route path="create-teacher" element={<CreateTeacher />} />
            <Route path="teachers/edit/:id" element={<EditTeacher />} />
            <Route path="teachers/:id" element={<ViewTeacher />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
