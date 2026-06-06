"use client";

import CoordinationPageLayout from "@/components/CoordinationPageLayout";
import { Target } from "lucide-react";

export default function CERPage() {
  return (
    <CoordinationPageLayout 
      id="CER"
      tag="Élites de la République"
      title="Bâtir une nouvelle génération de décideurs"
      description="Aucune nation ne prospère sans élites intègres, disciplinées et compétentes. La CER s'adresse aux dirigeants publics, privés, chefs d’entreprises et hauts cadres."
      mission="Former, accompagner et fédérer une génération de leaders imprégnés d’éthique et orientés vers la performance durable."
      offersTitle="Offres stratégiques"
      offers={[
        "Programmes de leadership exécutif",
        "Formations en gouvernance et éthique institutionnelle",
        "Certification SIT",
        "Réseau d’élites et événements de haut niveau",
        "Base de données stratégique pour le repérage des talents"
      ]}
      closing="La CER positionne SIT comme partenaire des décideurs nationaux, compagnons pour la performance."
      icon={Target}
      color="#ffdf00"
    />
  );
}
