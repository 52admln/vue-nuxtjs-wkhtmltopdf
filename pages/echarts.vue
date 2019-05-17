<template>
  <div id="echarts">
    <h1>图表内容标题测试</h1>
    <p>测试时间为：2019.01.01</p>
    <div id="myChart"></div>
    <div id="myChart2"></div>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'Echarts',
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  mounted() {
    this.echartsInit()
    this.echartsInit2()
  },
  methods: {
    echartsInit() {
      // 找到容器
      const myChart = this.$echarts.init(document.getElementById('myChart'))
      // 开始渲染
      myChart.setOption({
        title: { text: '在Vue中使用echarts' },
        animation: false,
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      })
    },
    echartsInit2() {
      const myChart = this.$echarts.init(document.getElementById('myChart2'))
      myChart.setOption({
        title: { text: 'echarts 饼图' },
        animation: false,
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data: [
              { value: 235, name: '视频广告' },
              { value: 274, name: '联盟广告' },
              { value: 310, name: '邮件营销' },
              { value: 335, name: '直接访问' },
              { value: 400, name: '搜索引擎' }
            ]
          }
        ]
      })
    }
  }
}
</script>
<style scoped>
h1,
p {
  text-align: center;
  padding: 20px 0;
}
#myChart {
  width: 600px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  float: left;
}
#myChart2 {
  width: 600px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  float: right;
}
</style>
