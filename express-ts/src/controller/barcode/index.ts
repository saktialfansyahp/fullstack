import QRCode from "qrcode";
import fs from "fs";

export function generateQRCode(data: string, filename: string) {
    QRCode.toFile(
        filename,
        data,
        {
            color: {
                dark: "#000", // Warna kode QR
                light: "#FFF", // Warna latar belakang
            },
            errorCorrectionLevel: "H", // Tingkat koreksi kesalahan
        },
        function (err) {
            if (err) {
                console.error("Error generating QR code:", err);
            } else {
                console.log(`QR Code saved as ${filename}`);
            }
        }
    );
}

// Contoh penggunaan
