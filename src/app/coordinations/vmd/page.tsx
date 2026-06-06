"use client";

import CoordinationPageLayout from "@/components/CoordinationPageLayout";
import { Globe } from "lucide-react";

export default function VMDPage() {
  return (
    <CoordinationPageLayout 
      id="VMD"
      tag="Valeurs, Mentalité et Développement"
      title="Transformer la culture pour sécuriser l’avenir"
      description="Le développement durable commence par la transformation des mentalités. VMD agit sur les trois gouvernements fondamentaux de la société : la famille, la religion et l’État."
      mission="Diffuser des valeurs structurantes et promouvoir une culture de responsabilité et de dignité à tous les niveaux de la société Congolaise."
      axesTitle="Interventions"
      axes={[
        "Programmes éducatifs thématiques",
        "Ateliers et campagnes nationales",
        "Partenariats institutionnels",
        "Initiatives communautaires à impact social"
      ]}
      closing="VMD vise le changement de mentalité pour sécuriser l’investissement et la croissance de l’Homme congolais."
      icon={Globe}
      color="#eda900"
    />
  );
}
