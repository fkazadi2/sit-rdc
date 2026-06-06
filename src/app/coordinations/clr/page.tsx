"use client";

import CoordinationPageLayout from "@/components/CoordinationPageLayout";
import { Users } from "lucide-react";

export default function CLRPage() {
  return (
    <CoordinationPageLayout 
      id="CLR"
      tag="Leaders Religieux"
      title="Former les consciences pour transformer les communautés"
      description="A ce jour, la société congolaise ne peut se développer sans le concours des leaders religieux. Ce leadership influence profondément nos mentalités collectives."
      mission="Accompagner, former et équiper les serviteurs de Dieu afin d’accroître leur impact spirituel, social et organisationnel."
      axes={[
        "Formations aux leadership et pratiques",
        "Structuration administrative des ministères",
        "Coaching et mentorat",
        "Promotion d’une culture d’excellence"
      ]}
      closing="Ce modèle appelle à la maturité et contribue directement à la stabilité de la société congolaise."
      icon={Users}
      color="#00b1e0"
    />
  );
}
