import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85],
  },
  experimental: {
    serverActions: {
      // Default is 1MB, which the generic product image upload (>1MB) blows past
      // before our Server Action code even runs, producing Next.js's generic
      // error page. Raise the hard framework limit well above our own
      // MAX_UPLOAD_MB (lib/storage.ts) so oversized files are rejected by our
      // code with a friendly message instead.
      bodySizeLimit: "8mb",
    },
  },
};

export default nextConfig;
