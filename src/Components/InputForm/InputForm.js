// Import css files
import "./input-form.css";

export default function InputForm({ input, setInput, addTodo }) {
  return (
    <div className="InputForm">
      <input value={input} onChange={(event) => setInput(event.target.value)} />
      <button onClick={addTodo}>Submit</button>
    </div>
  );
}
