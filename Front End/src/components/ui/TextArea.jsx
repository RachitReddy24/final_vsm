function TextArea({
  label,
  placeholder,
  ...props
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">
        {label}
      </label>

      <textarea
        rows={4}
        placeholder={placeholder}
        className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
    </div>
  );
}

export default TextArea;