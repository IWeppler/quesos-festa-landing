import { requireUser } from "@/lib/auth";
import { listAdminPuntosVenta } from "@/lib/admin/queries";
import { PuntosVentaClient } from "./PuntosVentaClient";

export default async function PuntosVentaPage() {
  await requireUser();
  const puntosVenta = await listAdminPuntosVenta();

  return <PuntosVentaClient puntosVenta={puntosVenta} />;
}
