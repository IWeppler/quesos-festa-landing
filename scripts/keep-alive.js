async function run() {
  const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/categorias?select=id&limit=1`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Respuesta fallida de Supabase: ${response.status} ${response.statusText}`,
      );
    }

    await response.json();
    console.log(
      "✅ Ping exitoso. Consultamos la tabla 'categorias'. El proyecto sigue activo.",
    );
  } catch (error) {
    console.error("❌ Falló el ping a Supabase:", error);
    process.exit(1);
  }
}

run();
