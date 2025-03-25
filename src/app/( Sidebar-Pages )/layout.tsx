import Layout from "@/app/_components/Layout";
import styles from "@/app/( Sidebar-Pages )/mainContent.module.css"

import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Layout/>
      <main className={styles.MainContent}>
      {children}
      </main>
        
     
    </>
  );
}
