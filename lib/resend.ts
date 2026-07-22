import "server-only";

import { Resend } from "resend";

/** Returns null when RESEND_API_KEY isn't configured, so callers can skip sending. */
export function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}
