import './App.css';

function App() {
  return (
    <div className='App'>
      <div class='problem'>The problem placeholder text here</div>

      <div class='container'>
        <div class='player'>
          <select>
            <option value='Python'>Python</option>
            <option value='C++'>C++</option>
          </select>

          <textarea class='code' placeholder='begin coding here...'></textarea>
          <button>Submit!</button>

          <textarea class='output' placeholder='output'></textarea>
        </div>

        <div class='player'>
          <select>
            <option value='Python'>Python</option>
            <option value='C++'>C++</option>
          </select>
          <textarea class='code' placeholder='begin coding here...'></textarea>
          <button>Submit!</button>

          <textarea class='output' placeholder='output'></textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
