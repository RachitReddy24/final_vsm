const QRCode = require("qrcode");
const fs = require("fs");
const path = require("path");

const generateVisitorQRCode = async (visitor) => {
  try {
    const qrFolder = path.join(__dirname, "../../uploads/qrcodes");

    if (!fs.existsSync(qrFolder)) {
      fs.mkdirSync(qrFolder, { recursive: true });
    }

    const fileName = `${visitor.visitorCode}_${visitor.meetingId}.png`;

    const filePath = path.join(qrFolder, fileName);

    const qrData = JSON.stringify({
      visitorId: visitor.id,
      visitorCode: visitor.visitorCode,
      meetingId: visitor.meetingId,
    });

    await QRCode.toFile(filePath, qrData, {
      width: 400,
      margin: 2,
      errorCorrectionLevel: "H",
    });

    return {
      qrImage: `/uploads/qrcodes/${fileName}`,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  generateVisitorQRCode,
};