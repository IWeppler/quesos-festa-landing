"use client";

import { useActionState } from "react";
import { login } from "@/lib/actions/auth";

export default function LoginPage() {
  const [state, action, pending] = useActionState(login, undefined);

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface-page px-5">
      <form
        action={action}
        className="w-full max-w-90 rounded-2xl border border-border-subtle bg-surface-card p-8 shadow-festa-md font-sans"
      >
        <h1 className="m-0 font-sans text-2xl font-semibold text-text-heading">
          Panel Quesos Festa
        </h1>
        <p className="mt-1 mb-6 font-sans text-sm text-text-muted">
          Ingresá con tu cuenta de administrador.
        </p>

        <label className="mb-1 block font-sans text-xs font-medium uppercase tracking-[0.08em] text-text-muted">
          Email
        </label>
        <input
          name="email"
          type="email"
          required
          autoComplete="username"
          className="mb-4 w-full rounded-md border border-border-subtle bg-surface-page px-3 py-2 font-sans text-sm text-text-body outline-none focus:border-festa-navy-800"
        />

        <label className="mb-1 block font-sans text-xs font-medium uppercase tracking-[0.08em] text-text-muted">
          Contraseña
        </label>
        <input
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="mb-5 w-full rounded-md border border-border-subtle bg-surface-page px-3 py-2 font-sans text-sm text-text-body outline-none focus:border-festa-navy-800"
        />

        {state?.error ? (
          <p className="mb-4 font-sans text-sm text-danger">{state.error}</p>
        ) : null}

        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-md bg-festa-navy-800 px-4 py-2.5 font-sans text-sm font-medium uppercase tracking-[0.08em] text-white transition-colors duration-150 hover:bg-festa-navy-700 disabled:opacity-60"
        >
          {pending ? "Ingresando..." : "Ingresar"}
        </button>
      </form>
    </div>
  );
}
