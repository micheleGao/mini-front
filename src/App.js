import {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Students from './components/Students/Students';
import StudentDetails from './components/StudentDetails/StudentDetails';
import './App.css';

function App() {
  const [student, setStudent]= useState([]);
  const [cats, setCat]= useState([])
  return (
    <div className="App">
      <Navigation/>
      <h1>Mini School </h1>
      <Switch>
      <Route path='/'exact component={Home}/>
      <Route path='/students' exact render={()=> <Students student={student} setStudent={setStudent} />}/>
      <Route path='/students/:id' render={()=> <StudentDetails cats={cats} setCat={setCat}/>}/>
      <Route path='/students/:id/edit' render={()=> <StudentDetails cats={cats} setCat={setCat}/>}/>
      </Switch>

    </div>
  );
}

export default App;
