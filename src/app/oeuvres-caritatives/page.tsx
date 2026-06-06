"use client";

import CoordinationPageLayout from "@/components/CoordinationPageLayout";
import { ShieldCheck } from "lucide-react";

export default function CaritativesPage() {
  return (
    <CoordinationPageLayout 
      id="COC"
      tag="Œuvres Caritatives"
      title="Organiser la solidarité avec rigueur"
      description="Le développement ne peut être inclusif sans une solidarité structurée. SIT renforce son action pour influencer et créer un équilibre social."
      mission="Encadrer les actions philanthropiques et garantir une gestion transparente des œuvres sociales pour rendre les plus démunis utiles au développement."
      axesTitle="Actions"
      axes={[
        "Téléthons et levées de fonds",
        "Bourses d’études",
        "Interventions sociales ciblées",
        "Branche philanthropique de partenariat"
      ]}
      closing="La COC renforce la cohésion nationale et la crédibilité des initiatives sociales."
      icon={ShieldCheck}
      color="#7c4e24"
    />
  );
}
