import { requireUser } from "@/lib/auth";
import { listAdminConsultas } from "@/lib/admin/queries";
import { ConsultasClient } from "./ConsultasClient";

export default async function ConsultasPage() {
  await requireUser();
  const consultas = await listAdminConsultas();

  return <ConsultasClient consultas={consultas} />;
}
