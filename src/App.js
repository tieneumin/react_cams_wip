import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import StudentAdd from "./pages/Students/add";
import StudentDetails from "./pages/Students/details";
import StudentEdit from "./pages/Students/edit";
import Modules from "./pages/Modules";
import ModuleAdd from "./pages/Modules/add";
import ModuleDetails from "./pages/Modules/details";
import ModuleEdit from "./pages/Modules/edit";
import Attendance from "./pages/Attendance";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/students">
          <Route index element={<Students />} />
          <Route path="add" element={<StudentAdd />} />
          <Route path=":id" element={<StudentDetails />} />
          <Route path=":id/edit" element={<StudentEdit />} />
        </Route>
        <Route path="/modules">
          <Route index element={<Modules />} />
          <Route path="add" element={<ModuleAdd />} />
          <Route path=":id" element={<ModuleDetails />} />
          <Route path=":id/edit" element={<ModuleEdit />} />
        </Route>
        <Route path="/attendance" element={<Attendance />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
