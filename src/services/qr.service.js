const prisma = require("../config/prisma");
const QRCode = require("qrcode");

const generateQR = async (data) => {

  const visitor = await prisma.visitor.findUnique({
    where: {
      id: Number(data.visitorId),
    },
  });

  if (!visitor) {
    throw new Error("Visitor not found");
  }

  const qrData = JSON.stringify({
    visitorId: visitor.id,
    visitorCode: visitor.visitorCode,
    name: visitor.name,
  });

  const qrImage = await QRCode.toDataURL(qrData);

  const expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000);

  const qrRecord = await prisma.qRCode.create({
    data: {
      visitorId: visitor.id,
      qrCode: qrImage,
      expiryDate,
    },
  });

  return qrRecord;
};

const getQRByVisitor = async (visitorId) => {

  const qr = await prisma.qRCode.findFirst({
    where: {
      visitorId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!qr) {
    throw new Error("QR Code not found");
  }

  return qr;
};

module.exports = {
  generateQR,
  getQRByVisitor,
};