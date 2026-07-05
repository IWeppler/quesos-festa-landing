import { requireUser } from "@/lib/auth";
import { listAdminProductos, listCategoriasOptions } from "@/lib/admin/queries";
import { publicUrl } from "@/lib/storage";
import { ProductosClient } from "./ProductosClient";

export default async function ProductosPage() {
  await requireUser();
  const [productos, categorias] = await Promise.all([
    listAdminProductos(),
    listCategoriasOptions(),
  ]);

  return (
    <ProductosClient
      categorias={categorias}
      productos={productos.map((producto) => ({
        ...producto,
        publicImageUrl: publicUrl(producto.imagen_url),
      }))}
    />
  );
}
