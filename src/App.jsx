import { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  const clearAll = () =>{
    setPeople({});
  }

  return (
    <>
      <div>
        <h1>Workshop 1 : Birthday List Project</h1>
        <main>
          <section className="container">
            <h3>{people.length}5 birthday today </h3>
            <List people = {people}/>
            <button> Clear All </button>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
