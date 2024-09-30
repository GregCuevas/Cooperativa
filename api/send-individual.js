import { Resend } from "resend";
import multer from "multer";

const upload = multer().single("cedulaFoto");
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Usar multer para manejar la subida de archivos
    upload(req, res, async function (err) {
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
        await resend.emails.send({
          from: "onboarding@resend.dev",
          to: "onboarding@resend.dev",
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
    // Manejo de otros métodos HTTP (GET, PUT, etc.)
    res.status(405).json({ message: "Método no permitido" });
  }
}
