import Tree from "./components/Tree";
import data from "./data/data.json";

console.log(data);
function App() {
  return (
    <div>
      <Tree data={data} />
    </div>
  );
}

export default App;
