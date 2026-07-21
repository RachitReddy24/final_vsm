const fs = require("fs");
const path = require("path");

const saveVisitorPhoto = (base64Image, visitorCode) => {

  if (!base64Image) return null;

  const folder = path.join(__dirname, "../../uploads/visitors");

  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }

  const base64Data = base64Image.replace(
    /^data:image\/\w+;base64,/,
    ""
  );

  const fileName = `${visitorCode}.jpg`;

  const filePath = path.join(folder, fileName);

  fs.writeFileSync(filePath, base64Data, "base64");

  return fileName;
};

module.exports = saveVisitorPhoto;