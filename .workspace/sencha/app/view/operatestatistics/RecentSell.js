Ext.define('VisLeader.view.operatestatistics.RecentSell', {
    extend: 'Ext.chart.Chart',
  requires: [
    'Ext.chart.interactions.PanZoom',
    'Ext.chart.series.Bar', 
    'Ext.chart.axis.Numeric', 
    'Ext.chart.axis.Category',
    'Ext.chart.interactions.ItemHighlight',
    //'BcpBoss.model.RecentSellModel'
    'VisLeader.model.RecentSellModel'
  ],
  xtype: 'recentsell',
  config: {
  	colors: ['#9A97FE'],
    //background: 'white',
    minHeight: 200,
  	series: [{
  		type: 'bar',
        //stacked: false,//该属性每项显示多条用
        xField: 'sell_date',//x轴
        yField: ['current_sell'],//y轴字段
        label: {
          field: ['current_sell'],//item顶端数据字段
          display: 'insideEnd',//outside.insideEnd
          color: '#000',
        },
        
        style: {//item样式
          // stroke: 'rgb(0,200,40)',
          lineWidth: 0,
          
          //shadowColor: 'black',//阴影
          //shadowOffsetX: 3,//偏移量
          //shadowOffsetY: 3,
          //minGapWidth: 30,
          maxBarWidth: 25,
        },
  	}],
  	axes: [{//y轴比例尺
      type: 'numeric',
      position: 'left',
      fields: ['current_sell'],
      grid: {
        odd: {
            fill: '#e8e8e8'
        }
      },
      label: {
        rotate: {
            degrees: -30
        }
      }
    }, {//标题+横坐标
      type: 'category',
      position: 'bottom',
      // fields: 'sell_date',
      // title: {
      //   text: '近七天开单量'
      // },
      visibleRange: [0, 1],//全部数据在一个页面展示
    }]
  }
});