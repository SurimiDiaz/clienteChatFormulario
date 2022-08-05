import { Header } from "./components/header";
import { Content } from "./components/contentForm";
import "./App.css";
// const aver = useSelector((state) => {
//   state.name;
// });
// console.log("aver", aver);
function App() {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
