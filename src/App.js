import {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Students from './components/Students/Students';
import StudentDetails from './components/StudentDetails/StudentDetails';
import StudentEdit from './components/StudentEdit/StudentEdit';
import './App.css';

function App() {
  const [student, setStudent]= useState([]);
  const [cats, setCat]= useState([])
  const [kitten, setKitten] = useState([]);
  return (
    <div className="App">
      <Navigation/>
      <h1>Mini Cat Camp </h1>
      <Switch>
      <Route path='/'exact component={Home}/>
      <Route path='/student/:id/edit' render={()=> <StudentEdit kitten={kitten}  setKitten={setKitten}/>}/>
      <Route path='/students/:id' render={()=> <StudentDetails cats={cats} setCat={setCat}/>}/>
      <Route path='/students' exact render={()=> <Students student={student} setStudent={setStudent} />}/>
      </Switch>

    </div>
  );
}

export default App;
