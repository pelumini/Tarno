import getGraphData from "@/actions/getGraphData";
import { getOrders } from "@/actions/getOrders";
import { getProducts } from "@/actions/getProducts";
import getUsers from "@/actions/getUsers";
import React from "react";
import Summary from "./Summary";
import BarGraph from "./BarGraph";

const Admin = async () => {
  const products = await getProducts({ category: null });
  const orders = await getOrders();
  const users = await getUsers();
  const graphData = await getGraphData();

  return (
    <div className="pt-8">
      <div className="container">
        <Summary products={products} orders={orders} users={users} />
        <div className="mt-4 mx-auto max-w-[1150px]">
          <BarGraph data={graphData} />
        </div>
      </div>
    </div>
  );
};

export default Admin;
