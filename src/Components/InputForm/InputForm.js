export default function InputForm({ input, setInput, onSubmit }) {
  return (
    <div className="InputForm">
      <input value={input} onChange={(event) => setInput(event.target.value)} />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}
