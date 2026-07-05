"use client";

import { useTransition } from "react";

export function DeleteButton({
  onDelete,
  confirmMessage,
}: {
  onDelete: () => Promise<void>;
  confirmMessage: string;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() => {
        if (!window.confirm(confirmMessage)) return;
        startTransition(async () => {
          try {
            await onDelete();
          } catch (err) {
            window.alert(err instanceof Error ? err.message : "Ocurrió un error.");
          }
        });
      }}
      className="rounded-md border border-danger/40 px-3 py-1.5 font-sans text-xs font-medium uppercase tracking-[0.06em] text-danger transition-colors duration-150 hover:bg-danger/10 disabled:opacity-60"
    >
      {isPending ? "Eliminando..." : "Eliminar"}
    </button>
  );
}
