/**
 * Shared between client and server code, so it can't import "server-only"
 * (see lib/storage.ts, which enforces this limit on the server).
 */
export const MAX_UPLOAD_MB = 5;
export const MAX_UPLOAD_BYTES = MAX_UPLOAD_MB * 1024 * 1024;
