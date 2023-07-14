import logo from './logo.svg';
import './App.css';
import { Button, Col, Container, Row } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import Menus from './components/Menus';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

const btnHandle = () => {
  toast.success('done!');
}

  return (
    <div>
    <Router>

    <ToastContainer/>
    <Container>
      <Row>
        <Header/>
        <Col md={4}><Menus/></Col>
        <Col md={8}>

        <Routes>
        <Route path='/' Component={Home} />
        <Route path='/add-course' Component={AddCourse} />
        <Route path='/all-courses' Component={AllCourses} />
        </Routes>
        </Col>
      </Row>
    </Container>
    </Router>
    </div>

  );
}

export default App;
