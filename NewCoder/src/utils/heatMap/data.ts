
const option = {
    title: {
        top: 30,
        left: 'center',
        text: '个人活跃度'
    },
    tooltip: {},
    visualMap: {
        type: 'piecewise',
        align: "auto",
        itemWidth: 15,
        pieces: [
            { gte: 10, lt: 30, label: "less ", color: '#00e600' },
            { gte: 30, lt: 60, label: " ", color: '#00bf00' },
            { gte: 60, label: "more", color: '#009a00' }
        ],

        orient: 'horizontal',
        left: 'center',
        top: 65,
    },
    calendar: {
        top: 120,
        left: 30,
        right: 30,
        cellSize: [15, 15],
        range: '',
        dayLabel: {
            nameMap: ['Sun', '', '', '', '', '', ''],
            fontStyle: 'italic'
        },
        monthLabel: {
            nameMap: 'EN'
        },
        itemStyle: {
            borderWidth: 1.5,
            borderCap: "round",
        },
        yearLabel: { show: false }
    },
    series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: {},
    }
};

export default option;
