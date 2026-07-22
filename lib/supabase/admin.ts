import "server-only";

import { createClient } from "@supabase/supabase-js";
import { createClient as createServerClient } from "@/lib/supabase/server";

/**
 * Uses the service-role client when available. Without it, falls back to the
 * request-scoped authenticated server client, so RLS policies decide access.
 */
export async function createAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!serviceRoleKey) {
    console.error(
      "SUPABASE_SERVICE_ROLE_KEY no configurada: usando el cliente autenticado por cookies, sujeto a RLS. Los inserts anónimos (ej. formulario de contacto) van a fallar por permisos.",
    );
    return createServerClient();
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}
