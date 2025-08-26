import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pearlux | Premium Embroidery & Craft Materials",
  description:
    "Quality beads, pearls, metallic threads and embroidery materials for bridal dress making and crafting",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
