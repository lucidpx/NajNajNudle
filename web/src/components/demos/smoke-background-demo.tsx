import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";

export function SmokeBackgroundDefault() {
  return <SmokeBackground />;
}

export function SmokeBackgroundCustomized() {
  return <SmokeBackground smokeColor="#FF0000" />;
}
