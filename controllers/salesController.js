const { totalSalesByDay, totalSalesByMonth, totalSalesByQuarter, totalSalesByYear } = require("../utilityFunctions/totalSales")

const salesController = {
    totalSalesOverTime: async (req, res) => {
        try {
            const salesPerDay = totalSalesByDay();
            const salesPerMonth = totalSalesByMonth();
            const salesByQuarter = totalSalesByQuarter();
            const salesByYearly = totalSalesByYear()

            res.json({
                success: true,
                salesPerDay,
                salesPerMonth,
                salesByQuarter,
                salesByYearly
            })

        } catch (error) {
            res.json({ success: false, error })
        }
    }
}

module.exports = { salesController }