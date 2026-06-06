"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumb = () => {
  const pathname = usePathname();
  
  // Don't show breadcrumb on home page
  if (pathname === "/") return null;

  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  
  return (
    <nav className="flex items-center gap-2 text-[#000d48]/70 text-xs font-bold uppercase tracking-widest mb-8">
      <Link 
        href="/" 
        className="flex items-center gap-1.5 hover:text-[#000d48] transition-colors group"
      >
        <Home className="w-3.5 h-3.5" />
        <span className="sr-only">Accueil</span>
      </Link>
...
      {pathSegments.map((segment, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
        const isLast = index === pathSegments.length - 1;
        
        // Format segment name: replace hyphens with spaces and capitalize
        const label = segment.replace(/-/g, " ");

        return (
          <React.Fragment key={href}>
            <ChevronRight className="w-3 h-3 text-[#000d48]/20" />
            {isLast ? (
              <span className="text-[#000d48] font-black">{label}</span>
            ) : (
              <Link 
                href={href} 
                className="hover:text-[#000d48] transition-colors"
              >
                {label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
