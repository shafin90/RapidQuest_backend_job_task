const mongoose = require('mongoose');
const Order = mongoose.model('Order');  // Assuming you have an Order model defined

// Total Sales Grouped by Day
const totalSalesByDay = async () => {
    return await Order.aggregate([
        {
            $group: {
                _id: { $dateToString: { format: "%Y-%m-%d", date: "$created_at" } },
                totalSales: { $sum: { $toDouble: "$total_price" } },
                count: { $sum: 1 }
            }
        },
        { $sort: { _id: 1 } }
    ]);
};

// Total Sales Grouped by Month
const totalSalesByMonth = async () => {
    return await Order.aggregate([
        {
            $group: {
                _id: { $dateToString: { format: "%Y-%m", date: "$created_at" } },
                totalSales: { $sum: { $toDouble: "$total_price" } },
                count: { $sum: 1 }
            }
        },
        { $sort: { _id: 1 } }
    ]);
};

// Total Sales Grouped by Quarter
const totalSalesByQuarter = async () => {
    return await Order.aggregate([
        {
            $group: {
                _id: {
                    year: { $year: "$created_at" },
                    quarter: { $ceil: { $divide: [{ $month: "$created_at" }, 3] } }
                },
                totalSales: { $sum: { $toDouble: "$total_price" } },
                count: { $sum: 1 }
            }
        },
        { $sort: { "_id.year": 1, "_id.quarter": 1 } }
    ]);
};

// Total Sales Grouped by Year
const totalSalesByYear = async () => {
    return await Order.aggregate([
        {
            $group: {
                _id: { $year: "$created_at" },
                totalSales: { $sum: { $toDouble: "$total_price" } },
                count: { $sum: 1 }
            }
        },
        { $sort: { _id: 1 } }
    ]);
};



module.exports = { totalSalesByDay, totalSalesByMonth, totalSalesByQuarter, totalSalesByYear }

