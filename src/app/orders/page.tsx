import OrdersClient from "./OrderClient";
import getOrdersByUserId from "@/actions/getOrdersByUserId";
import { getCurrentuser } from "@/actions/getCurrentUser";
import NullData from "@/components/NullData";

const Orders = async () => {
  const currentUser = await getCurrentuser();

  if (!currentUser) {
    return <NullData title="Oops! Access denied" />;
  }

  const orders = await getOrdersByUserId(currentUser.id);

  if (!orders) {
    return <NullData title="No orders yet..." />;
  }

  return (
    <div className="pt-8">
      <div className="container">
        <OrdersClient orders={orders} />
      </div>
    </div>
  );
};

export default Orders;
