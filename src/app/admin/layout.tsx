import React from "react";
import AdminNav from "./_components/AdminNav";

export const metadata = {
  title: "Tarno Admin",
  description: "Tarno Admin Dashboard",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNav />
      {children}
    </div>
  );
};

export default AdminLayout;
