function TablePagination() {
  return (
    <div className="flex justify-between items-center p-5 border-t">

      <p className="text-sm text-gray-500">
        Showing 1–5 of 25 records
      </p>

      <div className="flex gap-2">

        <button className="border rounded-lg px-4 py-2">
          Previous
        </button>

        <button className="border rounded-lg px-4 py-2">
          Next
        </button>

      </div>

    </div>
  );
}

export default TablePagination;