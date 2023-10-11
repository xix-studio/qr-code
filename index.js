const QRCode = require("qrcode");
const { resolve } = require("path");

const leadingZero = (num, size) => String(num).padStart(size, "0");
const generateQRCode = async (filename, text) => {
  try {
    const response = await QRCode.toFile(
      resolve(__dirname, "assets", filename),
      text,
      { width: 256, margin: 2 }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
