const rejectionTemplate = (visitor) => {
  return `
    <div style="font-family: Arial, sans-serif;">

      <h2>Visitor Request Rejected</h2>

      <p>Dear <b>${visitor.name}</b>,</p>

      <p>We regret to inform you that your visitor request has been rejected.</p>

      <p>If you have any questions, please contact the host.</p>

      <br>

      <p>Thank you.</p>

    </div>
  `;
};

module.exports = rejectionTemplate;