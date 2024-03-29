const { Schema, model } = require("mongoose");
const { common } = require("../utils/constants");

// Define Sales Order Schema
const salesOrderSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    customerId: { type: Schema.Types.ObjectId, ref: "Customer" },
    transactionId: { type: String, required: true },
    invoiceDate: { type: Date, required: true },
    invoiceNumber: { type: Number, required: true },
    dueDate: { type: Date, required: true },
    products: [
        {
            name: { type: String, required: true },
            quantity: { type: Number, required: true },
            sellPrice: { type: Number, required: true },
            gstValue: { type: Number, required: true },
            discount: { type: Number, required: true }, //In Percent
            netAmount: { type: Number, required: true }
        }
    ],
    appliedOfferCode: { type: String },
    totalDiscount: { type: Number },
    totalAmount: { type: Number, required: true },
    remainingAmount: { type: Number, required: true },
    // paymentMode: { type: String, default: 'PENDING', enum: common.paymentMode },
    // paymentStatus: { type: String, default: 'PENDING', enum: common.paymentStatus },
    payments: [
        {
            paymentID: { type: Schema.Types.ObjectId, ref: 'Payment' },
            amount: { type: Number, required: true },
            paymentDate: { type: Date, required: true },
            paymentMode: { type: String, required: true, enum: common.paymentMode },
            paymentType: { type: String, required: true, enum: common.paymentType }
        }
    ],
    isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = model("SalesOrder", salesOrderSchema);