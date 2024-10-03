import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY); // Asegúrate de tener la clave en tus variables de entorno

// Handler para el envío de correos electrónicos
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
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
        cedulaFoto,
      } = req.body;

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
            ? `<p><strong>Foto de la cédula:</strong></p><img src="${cedulaFoto}" alt="Foto de la cédula" />`
            : ""
        }
      `;

      // Envío del correo utilizando Resend
      await resend.emails.send({
        from: "coopebred.com", // Cambia este correo al que usas para el envío
        to: "gregoryjunior2101@gmail.com", // Cambia este correo de destino
        subject: `Nuevo mensaje de ${nombres || "socio-individual"}`,
        html: htmlContent,
      });

      // Respuesta exitosa
      res.status(200).json({ message: "Correo enviado exitosamente" });
    } catch (error) {
      console.error("Error al enviar correo con Resend", error);
      res.status(500).json({ message: "Error al enviar el correo", error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}
