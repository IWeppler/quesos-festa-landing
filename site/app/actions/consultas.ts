"use server";

import { createAdminClient } from "@/lib/supabase/admin";
import { friendlyError } from "@/lib/errors";
import { getResendClient } from "@/lib/resend";

export type ConsultaFormState =
  | { error?: string; success?: boolean }
  | undefined;

const TIPOS_COMERCIO = [
  "supermercado",
  "almacen_fiambreria",
  "distribuidor",
  "otro",
] as const;
type TipoComercio = (typeof TIPOS_COMERCIO)[number];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const NOTIFY_TO =
  process.env.CONSULTAS_NOTIFY_EMAIL || "ventas@quesosfesta.com.ar";
const NOTIFY_FROM = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

type ConsultaData = {
  nombre: string;
  nombre_comercio: string;
  email: string;
  telefono: string;
  tipo_comercio: TipoComercio;
  mensaje: string | null;
};

type ParsedConsulta = { error: string | null; data: ConsultaData | null };

function parseConsultaForm(formData: FormData): ParsedConsulta {
  const nombre = String(formData.get("nombre") ?? "").trim();
  const nombre_comercio = String(formData.get("nombre_comercio") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const telefono = String(formData.get("telefono") ?? "").trim();
  const tipoRaw = String(formData.get("tipo_comercio") ?? "");
  const mensaje = String(formData.get("mensaje") ?? "").trim() || null;

  if (!nombre) return { error: "El nombre es obligatorio.", data: null };
  if (!nombre_comercio)
    return { error: "El nombre del comercio es obligatorio.", data: null };
  if (!email || !EMAIL_RE.test(email))
    return { error: "Ingresá un email válido.", data: null };
  if (!telefono) return { error: "El teléfono es obligatorio.", data: null };
  if (!TIPOS_COMERCIO.includes(tipoRaw as TipoComercio)) {
    return { error: "Elegí un tipo de comercio válido.", data: null };
  }

  return {
    error: null,
    data: {
      nombre,
      nombre_comercio,
      email,
      telefono,
      tipo_comercio: tipoRaw as TipoComercio,
      mensaje,
    },
  };
}

async function notifyConsulta(data: ConsultaData) {
  const resend = getResendClient();
  if (!resend) {
    console.error(
      "RESEND_API_KEY no configurada: no se envió la notificación de consulta.",
    );
    return;
  }

  try {
    await resend.emails.send({
      from: NOTIFY_FROM,
      to: NOTIFY_TO,
      replyTo: data.email,
      subject: `Nueva consulta mayorista — ${data.nombre_comercio}`,
      text: [
        `Nombre: ${data.nombre}`,
        `Comercio: ${data.nombre_comercio}`,
        `Email: ${data.email}`,
        `Teléfono: ${data.telefono}`,
        `Tipo de comercio: ${data.tipo_comercio}`,
        `Mensaje: ${data.mensaje ?? "(sin mensaje)"}`,
      ].join("\n"),
    });
  } catch (err) {
    console.error("Error enviando notificación de consulta por email:", err);
  }
}

export async function createConsulta(
  _prevState: ConsultaFormState,
  formData: FormData,
): Promise<ConsultaFormState> {
  const parsed = parseConsultaForm(formData);
  if (parsed.error || !parsed.data) {
    return { error: parsed.error ?? "Revisá los datos ingresados." };
  }

  const admin = await createAdminClient();
  const { error } = await admin.from("consultas").insert(parsed.data);

  if (error) {
    console.error("Error insertando consulta en Supabase:", error);
    return { error: friendlyError(error) };
  }

  await notifyConsulta(parsed.data);

  return { success: true };
}
