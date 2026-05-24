import { Order } from "../models/order.model.js";

export const createOrder = async (req, res) => {
  try {
    const orderData = req.body;
    const newOrder = await Order.create(orderData);
    return res.status(201).json({
      message: "Order placed successfully",
      success: true,
      order: newOrder,
    });
  } catch (error) {
    console.error("Create order error:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    return res.status(200).json({
      orders,
      success: true,
    });
  } catch (error) {
    console.error("Get orders error:", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { paymentStatus, fulfillmentStatus } = req.body;

    const updateFields = {};
    if (paymentStatus !== undefined) updateFields.paymentStatus = paymentStatus;
    if (fulfillmentStatus !== undefined) updateFields.fulfillmentStatus = fulfillmentStatus;

    const updatedOrder = await Order.findOneAndUpdate(
      { id: id },
      updateFields,
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({
        message: "Order not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Order updated successfully",
      success: true,
      order: updatedOrder,
    });
  } catch (error) {
    console.error("Update order error:", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
