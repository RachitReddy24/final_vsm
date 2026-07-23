const prisma = require("../config/prisma");

const {
  approveUnplannedVisit,
  rejectUnplannedVisit,
} = require("../services/unplannedVisit.service");
const approveVisitor = async (req, res) => {
  try {
    const { token } = req.params;

    const visitor = await prisma.visitor.findUnique({
      where: {
        approvalToken: token,
      },
    });

    if (!visitor) {
      return res.status(404).send("<h2>Invalid approval link.</h2>");
    }

    if (visitor.tokenExpiry < new Date()) {
      return res.status(400).send("<h2>This approval link has expired.</h2>");
    }

    await approveUnplannedVisit(visitor.id);

    return res.send("<h2>Visitor Approved Successfully ✅</h2>");

  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const rejectVisitor = async (req, res) => {
  try {
    const { token } = req.params;

    const visitor = await prisma.visitor.findUnique({
      where: {
        approvalToken: token,
      },
    });

    if (!visitor) {
      return res.status(404).send("<h2>Invalid rejection link.</h2>");
    }

    if (visitor.tokenExpiry < new Date()) {
      return res.status(400).send("<h2>This rejection link has expired.</h2>");
    }

    await rejectUnplannedVisit(visitor.id);

    return res.send("<h2>Visitor Rejected Successfully ❌</h2>");

  } catch (error) {
    return res.status(500).send(error.message);
  }
};
module.exports = {
  approveVisitor,
  rejectVisitor,
};