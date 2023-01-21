import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import EmployeeList from './component/EmployeeList';
function App() {
  let emparr=[{empid:10,ename:"Kishori",sal:4444},
  {empid:11,ename:"Ramesh",sal:5555},
  {empid:10,ename:"Ankit",sal:6666}
]
  return (
    <div className="App">
      <Header/>
      <EmployeeList employees={emparr}></EmployeeList>
    </div>
  );
}

export default App;
