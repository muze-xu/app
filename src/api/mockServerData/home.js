// Mock数据模拟
import Mock from "mockjs"

// 图表数据
let List = []
export default {
    getStatisticalData: () => {
        for (let i = 0; i < 7; i++) {
            List.push(
                Mock.mock(
                    {
                        "苹果": Mock.Random.float(100, 8000, 0, 0),
                        "vivo": Mock.Random.float(100, 8000, 0, 0),
                        "oppo": Mock.Random.float(100, 8000, 0, 0),
                        "魅族": Mock.Random.float(100, 8000, 0, 0),
                        "三星": Mock.Random.float(100, 8000, 0, 0),
                        "小米": Mock.Random.float(100, 8000, 0, 0),
                    }
                )
            )
        }
        return {
            videoData: [
                { name: "小米", value: "2999" },
                { name: "苹果", value: "5999" },
                { name: "oppo", value: "1500" },
                { name: "vivo", value: "1999" },
                { name: "魅族", value: "2200" },
                { name: "三星", value: "4500" },
            ],
            userData: [
                { date: "周一", new: "1689", active: 89 },
                { date: "周二", new: "2468", active: 138 },
                { date: "周三", new: "1945", active: 211 },
                { date: "周四", new: "1247", active: 158 },
                { date: "周五", new: "1568", active: 95 },
                { date: "周六", new: "2486", active: 188 },
                { date: "周日", new: "1874", active: 133 },
            ],
            orderData: {
                date: ["201901", "201902", "201903", "201904", "201905", "201906", "201907",],
                data: List
            },
            tableData: [
                {
                    name: "小米",
                    todayBuy: "100",
                    monthBuy: "3000",
                    totalBuy: "5000",
                },
                {
                    name: "华为",
                    todayBuy: "300",
                    monthBuy: "4000",
                    totalBuy: "6000",
                },
                {
                    name: "苹果",
                    todayBuy: "200",
                    monthBuy: "2500",
                    totalBuy: "3000",
                },
                {
                    name: "vivo",
                    todayBuy: "150",
                    monthBuy: "1000",
                    totalBuy: "3000",
                },
                {
                    name: "oppo",
                    todayBuy: "100",
                    monthBuy: "900",
                    totalBuy: "2000",
                },
                {
                    name: "魅族",
                    todayBuy: "160",
                    monthBuy: "800",
                    totalBuy: "1700",
                },
            ]
        }
    }
}