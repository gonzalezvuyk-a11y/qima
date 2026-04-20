const ctaImage = "/media/qima-contact.gif";

export function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={ctaImage}
          alt="Asuncion skyline"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.78)_0%,rgba(10,10,10,0.5)_34%,rgba(10,10,10,0.18)_68%,rgba(10,10,10,0.1)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.18)_0%,rgba(10,10,10,0.06)_42%,rgba(10,10,10,0.3)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[440px] max-w-[1440px] items-center px-5 py-14 sm:px-6 md:min-h-[520px] md:py-16 lg:px-12">
        <div className="max-w-[600px]">
          <h2
            className="mb-6 text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "44px",
              fontWeight: 400,
              lineHeight: 1.02,
            }}
          >
            Conversemos sobre la{" "}
            <em style={{ fontStyle: "italic" }}>próxima oportunidad</em>.
          </h2>
          <p
            className="mb-10 max-w-[500px] text-white/78"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.0625rem",
              fontWeight: 300,
              lineHeight: 1.8,
            }}
          >
            Si estás buscando desarrollar un negocio, explorar una alianza o aterrizar una
            empresa en Paraguay, QIMA puede ayudarte.
          </p>
          <a
            href="#"
            className="qima-button-primary inline-flex items-center"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Agendar una reunión
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact .qima-button-primary {
            width: fit-content;
          }
        }
      `}</style>
    </section>
  );
}
