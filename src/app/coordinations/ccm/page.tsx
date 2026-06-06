"use client";

import CoordinationPageLayout from "@/components/CoordinationPageLayout";
import { Mic } from "lucide-react";

export default function CCMPage() {
  return (
    <CoordinationPageLayout 
      id="CCM"
      tag="Communication et Multimédia"
      title="Maîtriser le récit pour maîtriser l’impact"
      description="Dans un monde dominé par l’information, la communication devient un outil stratégique pour éduquer, sensibiliser et former."
      mission="Monter des stratégies de communication et produire des contenus à haute valeur pédagogique et institutionnelle."
      offersTitle="Composantes"
      offers={[
        "Maison d’édition",
        "Production audiovisuelle (Émissions, documentaires)",
        "Masterclass et plateformes digitales",
        "Mise sur supports des contenus SIT"
      ]}
      closing="La CCM garantit la visibilité, la pédagogie et la pérennité de la vision SIT."
      icon={Mic}
      color="#00b1e0"
    />
  );
}
