const { Resend } = require("resend");
const multer = require("multer");

// Configura multer para manejar la subida de archivos en memoria
const upload = multer({ storage: multer.memoryStorage() });

// Configura la API de Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    upload.single("cedulaFoto")(req, res, async (err) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error en la subida del archivo", error: err });
      }

      const {
        nombres,
        apellidos,
        cedula,
        telefono,
        email,
        direccion1,
        ciudad,
        estado,
        pais,
        afiliacion,
        comoSupiste,
      } = req.body;

      // Si hay una foto de la cédula, conviértela a base64
      const cedulaFoto = req.file ? req.file.buffer.toString("base64") : null;

      const htmlContent = `
        <p><strong>Nombre:</strong> ${nombres || ""} ${apellidos || ""}</p>
        <p><strong>Cédula:</strong> ${cedula || ""}</p>
        <p><strong>Teléfono:</strong> ${telefono || ""}</p>
        <p><strong>Email:</strong> ${email || ""}</p>
        <p><strong>Dirección:</strong> ${direccion1 || ""}, ${ciudad || ""}, ${
        estado || ""
      }, ${pais || ""}</p>
        <p><strong>Afiliación:</strong> ${afiliacion || ""}</p>
        <p><strong>¿Cómo supiste?:</strong> ${comoSupiste || ""}</p>
        ${
          cedulaFoto
            ? `<p><strong>Foto de la cédula:</strong></p><img src="data:image/jpeg;base64,${cedulaFoto}" alt="Foto de la cédula" />`
            : ""
        }
      `;

      try {
        // Enviar correo usando Resend
        await resend.emails.send({
          from: "onboarding@resend.dev", // Cambia esto si es necesario
          to: "onboarding@resend.dev", // Cambia esto si es necesario
          subject: `Nuevo mensaje de ${nombres || "socio-individual"}`,
          html: htmlContent,
        });

        res.status(200).json({ message: "Correo enviado exitosamente" });
      } catch (error) {
        console.error("Error al enviar correo con Resend", error);
        res.status(500).json({ message: "Error al enviar el correo", error });
      }
    });
  } else {
    res.status(405).json({ message: "Método no permitido" });
  }
}
