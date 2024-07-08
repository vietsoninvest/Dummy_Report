console.log("Starting SalesPie.js...");

function updatePieChart(data, selectedOutlets) {
    const pieChart = echarts.init(document.getElementById('pie-chart'));
    const outletSales = selectedOutlets.map(outlet => {
        return {
            name: outlet,
            value: data.filter(item => item.Outlet === outlet)
                        .reduce((sum, item) => sum + item.Revenue, 0)
        };
    });

    const pieOption = {
        title: {
            text: 'Sales Contribution by Outlet',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                return `${params.seriesName} <br/>${params.name}: ${params.value.toFixed(2)} (${params.percent}%)`;
            }
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: 'Sales',
                type: 'pie',
                radius: '50%',
                data: outletSales,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    pieChart.setOption(pieOption);
}

console.log("SalesPie.js executed...");
