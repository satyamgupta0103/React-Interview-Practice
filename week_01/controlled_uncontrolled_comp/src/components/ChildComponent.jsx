function ChildComponent({ value, setValue }) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("A name was submitted" + value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Submit</button>
        <p>{value}</p>
      </label>
    </form>
  );
}

export default ChildComponent;
