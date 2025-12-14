import React from 'react';
import { motion } from 'framer-motion';

interface Order {
  productname?: string;
  product?: {
    name?: string;
  };
  status?: string;
  buyername?: string;
  customer?: {
    name?: string;
  };
  transaction?: string;
  transaction_id?: number;
  tarih?: string;
  ordertotal?: number;
}

const OrderCard = ({ order }: { order: Order }) => {
  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'pending': return 'bg-warning';
      case 'cut': return 'bg-accent';
      case 'ready': return 'bg-secondary';
      case 'shipped': return 'bg-primary';
      default: return 'bg-text-secondary';
    }
  };

  return (
    <motion.div
      className="glass-card p-lg rounded-lg cursor-pointer"
      whileHover={{
        scale: 1.03,
        borderColor: 'rgb(var(--color-primary))',
        transition: { duration: 0.15, ease: "easeInOut" }
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.1 }
      }}
    >
      <div className="flex flex-col gap-sm">
        <div className="flex justify-between items-start">
          <h4
            title={order.productname || order.product?.name || 'Unknown Product'}
            className="text-sm font-semibold text-text leading-tight m-0"
          >
            {order.productname || order.product?.name || 'Unknown Product'}
          </h4>
          <span className={`px-xs py-xs rounded-sm text-xs font-medium uppercase text-white ${getStatusColor(order.status || 'pending')}`}>
            {order.status || 'pending'}
          </span>
        </div>

        <p className="text-xs text-text-secondary font-medium m-0">
          {order.buyername || order.customer?.name || 'Unknown Customer'}
        </p>

        <div className="text-xs text-text-secondary leading-normal">
          <div>Order: #{order.transaction || order.transaction_id}</div>
          <div>Date: {order.tarih ? new Date(order.tarih).toLocaleDateString() : 'Unknown'}</div>
          {order.ordertotal && (
            <span className="font-semibold text-success">${order.ordertotal}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default OrderCard;
