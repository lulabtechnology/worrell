import { Container } from "@/components/ui/Container";

export default function PrivacidadPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <h1 className="font-display text-3xl text-white sm:text-4xl">
          Privacidad
        </h1>
        <p className="mt-4 max-w-3xl text-white/70">
          Texto placeholder. Aquí irá la política de privacidad real del negocio.
        </p>

        <div className="mt-10 space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-white/70">
            1) Datos de contacto: la web puede mostrar enlaces a WhatsApp y redes sociales.
          </p>
          <p className="text-sm text-white/70">
            2) Formularios: la landing puede abrir WhatsApp con un mensaje prellenado (sin backend).
          </p>
          <p className="text-sm text-white/70">
            3) Contenido: testimonios y material visual serán provistos por el cliente.
          </p>
        </div>
      </Container>
    </div>
  );
}
