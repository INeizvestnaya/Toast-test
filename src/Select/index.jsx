const Select = ({ name, id, options, onChange, selected }) => {
  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <div>
      <label>{name}: </label>
      <select
        id={id}
        className="font-class"
        onChange={handleChange}
        value={selected}
      >
        {options.map((opt) => (
          <option key={opt || Math.random()} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
