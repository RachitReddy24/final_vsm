const QRCode = require("qrcode");
const path = require("path");
const fs = require("fs");

const generateQRCode = async (visitorCode) => {

  const folder = path.join(__dirname, "../../uploads/qrcodes");

  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }

  const fileName = `${visitorCode}.png`;
  const filePath = path.join(folder, fileName);

  await QRCode.toFile(filePath, visitorCode);

  return {
    fileName,
    filePath,
  };
};

module.exports = {
  generateQRCode,
};