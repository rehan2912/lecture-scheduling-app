import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AddCourse from './pages/AddCourse';
import AddLecture from './pages/AddLecture';
import Admin from './pages/Admin';
import Courses from './pages/Courses';
import Instructor from './pages/Instructor';
import Lectures from './pages/Lectures';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (<div>
    <Toaster/>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/courses' element={<Courses />} />
        <Route path='/admin/addcourse' element={<AddCourse />} />
        <Route path='/admin/lectures/:courseId' element={<Lectures />} />
        <Route path='/admin/addlecture/:courseId' element={<AddLecture />} />
        <Route path='/instructor' element={<Courses />} />
        <Route path='/instructor/course' element={<Courses />} />
        <Route path='/instructor/lectures/:courseId' element={<Lectures />} />
      </Routes>
    </BrowserRouter>
  </div>)
}

export default App;
