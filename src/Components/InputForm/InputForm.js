// Import css files
import './input-form.css';

export default function InputForm({ input, setInput, addTodo }) {
  return (
    <form className="task-form">
      <input
        id="input-field"
        type="text"
        minlength="10"
        maxlength="45"
        placeholder="What do you want to do?"
        required
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button className="submit-button" onClick={addTodo}>
        Add
      </button>
    </form>
  );
}
