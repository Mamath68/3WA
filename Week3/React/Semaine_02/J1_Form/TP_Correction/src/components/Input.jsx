function Input({ number, base, onChangeBase }) {
  const handleChange = (e) => {
    const { value: n, name: b } = e.target;
    onChangeBase(n, b);
  };

  const label = { padding: "5px", display: "block" };

  return (
    <>
      <label className={label}>Base : {base}</label>
      <input type="text" name={base} value={number} onChange={handleChange} />
    </>
  );
}

export default Input;
