function SMSCard() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow border p-8">

      <h2 className="text-xl font-semibold mb-6">
        SMS Preview
      </h2>

      <div className="bg-slate-100 rounded-xl p-5 leading-8">

        <p>
          Your meeting request has been approved by
          <strong> John Doe</strong>.
        </p>

        <br />

        <p>
          Visitor Code :
          <strong> 48953</strong>
        </p>

        <br />

        <p>
          Please show this code at reception.
        </p>

      </div>

    </div>
  );
}

export default SMSCard;