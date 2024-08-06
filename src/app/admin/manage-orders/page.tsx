import React from "react";
import { getCurrentuser } from "@/actions/getCurrentUser";
import NullData from "@/components/NullData";
import { getOrders } from "@/actions/getOrders";
import ManageOrdersClient from "./ManageOrdersClient";

const ManageOrdersPage = async () => {
  const orders = await getOrders();
  const currentUser = await getCurrentuser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Oops! Access Denied" />;
  }

  return (
    <div className="pt-8">
      <div className="container">
        <ManageOrdersClient orders={orders} />
      </div>
    </div>
  );
};

export default ManageOrdersPage;
