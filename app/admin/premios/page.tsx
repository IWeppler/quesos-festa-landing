import { requireUser } from "@/lib/auth";
import { listAdminPremios } from "@/lib/admin/queries";
import { PremiosClient } from "./PremiosClient";

export default async function PremiosPage() {
  await requireUser();
  const premios = await listAdminPremios();

  return <PremiosClient premios={premios} />;
}
