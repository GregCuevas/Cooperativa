import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

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
    } = req.body;

    const htmlContent = `
      <h1>Nuevo formulario de socio individual</h1>
      <p><strong>Nombre:</strong> ${nombres} ${apellidos}</p>
      <p><strong>Cédula:</strong> ${cedula}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Dirección:</strong> ${direccion1}, ${ciudad}, ${estado}, ${pais}</p>
      <p><strong>Afiliación:</strong> ${afiliacion}</p>
      <p><strong>¿Cómo supiste?:</strong> ${comoSupiste}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: "Formulario <onboarding@resend.dev>",
      to: ["your-email@example.com"], // Replace with your email
      subject: `Nuevo socio individual: ${nombres}`,
      html: htmlContent,
    });

    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Error sending email" });
    }

    res.status(200).json({ message: "Email sent successfully", data });
  } catch (error) {
    console.error("Error in API route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
