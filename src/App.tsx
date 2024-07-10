import './App.css';
import Parent from "./Parent";

const App = () => {
  console.log("App重新渲染");
  return (
    <div className="content">
     <Parent />
    </div>
  );
};

export default App;
