import "./App.css";
import SalaryForm from "./component/SalaryForm";
import NavBar from "./component/NavBar";

function App() {
  return (
    <div className="App App-header">
      <div class="text-bg-light p-3">
        <NavBar />
        <div className="py-4 container">
          <SalaryForm />
        </div>
      </div>
    </div>
  );
}

export default App;
