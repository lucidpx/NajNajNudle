import { LocationMap } from "@/components/ui/location-map";
import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background px-4 py-24">
      <div className="pointer-events-none fixed inset-0 z-0 min-h-[100dvh] opacity-[0.35]">
        <SmokeBackground smokeColor="#b91c1c" className="h-full min-h-[100dvh] w-full" />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-8">
        <p className="text-muted-foreground text-xs font-medium tracking-[0.2em] uppercase">
          Lokacija
        </p>

        <LocationMap
          location="Sutjeska 6, Jagodina"
          coordinates="43.9707° N, 21.2574° E"
        />
      </div>
    </main>
  );
}
