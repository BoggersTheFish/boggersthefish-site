import { permanentRedirect } from "next/navigation";

export default function LabPage() {
  permanentRedirect("/run-ts-reasoner");
}
