import { requireUser } from "@/lib/auth";
import { listContenidoSitio, type ContenidoSitioClave } from "@/lib/admin/queries";
import { publicUrl } from "@/lib/storage";
import { ContenidoImagenForm } from "@/components/admin/ContenidoImagenForm";
import { updateContenidoImagen } from "./actions";

const FALLBACK: Record<ContenidoSitioClave, string> = {
  hero_desktop: "/assets/photos/hero.webp",
  hero_mobile: "/assets/photos/hero-mobile.jpg",
  historia: "/assets/photos/historia.webp",
};

export default async function ContenidoPage() {
  await requireUser();
  const contenido = await listContenidoSitio();
  const byClave = new Map(contenido.map((c) => [c.clave, c.imagen_url]));

  function imageUrlFor(clave: ContenidoSitioClave): string {
    const path = byClave.get(clave) ?? null;
    return (path && publicUrl(path)) || FALLBACK[clave];
  }

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-5">
      <div>
        <h1 className="m-0 font-sans text-xl font-semibold text-text-heading">Contenido del sitio</h1>
        <p className="m-0 mt-1 font-sans text-sm text-text-muted">
          Reemplazá las imágenes principales de la página de inicio. Los cambios se ven en el sitio
          apenas se suben.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <ContenidoImagenForm
          action={updateContenidoImagen.bind(null, "hero_desktop")}
          titulo="Hero — fondo (desktop)"
          descripcion="Imagen panorámica que se ve detrás del título en pantallas grandes."
          currentImageUrl={imageUrlFor("hero_desktop")}
        />
        <ContenidoImagenForm
          action={updateContenidoImagen.bind(null, "hero_mobile")}
          titulo="Hero — fondo (mobile)"
          descripcion="Recorte vertical que se ve detrás del título en celulares."
          currentImageUrl={imageUrlFor("hero_mobile")}
        />
        <ContenidoImagenForm
          action={updateContenidoImagen.bind(null, "historia")}
          titulo="Historia"
          descripcion="Foto junto al texto de la sección Historia."
          currentImageUrl={imageUrlFor("historia")}
        />
      </div>
    </div>
  );
}
