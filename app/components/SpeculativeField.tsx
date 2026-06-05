"use client";

export default function SpeculativeField() {
  return (
    <section className="my-28 bg-black text-white">
      <div className="relative flex min-h-[720px] items-center justify-center overflow-hidden px-6 py-8 md:px-10">
        <img
          src="/logo-system.png"
          alt="Almost There Lab moving identity"
          className="logo-image-motion w-[70vw] max-w-[720px] opacity-90"
        />

        <div className="scan-line pointer-events-none absolute inset-0" />
      </div>
    </section>
  );
}