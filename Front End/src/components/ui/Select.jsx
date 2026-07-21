function Select({
  label,
  options = [],
  ...props
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">
        {label}
      </label>

      <select
        className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      >
        <option>Select</option>

        {options.map((item) => (
          <option
            key={item}
            value={item}
          >
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;