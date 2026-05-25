import { permanentRedirect } from "next/navigation";

export default function NetworkPage() {
  permanentRedirect("/about");
}
