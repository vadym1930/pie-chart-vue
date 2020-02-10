<template>
  <div class="pie-chart-container">
    <template v-if="$apollo.loading">
      loading
    </template>
    <div v-else>
      <div class="list" v-for="(chart, i) in charts" :key="i">
        <div class="pie-chart-holder field" v-html="pieSvg(chart)" />
        <div class="description field">
          <div class="item" v-for="item in chart" :key="item.color">
            <span
              class="legend-color"
              :style="{ backgroundColor: item.color }"
            ></span>
            <span> {{ item.value }}% {{ item.label }}</span>
          </div>
          <template v-if="chart[0][`desc-${i}`]">
            <div v-html="chart[0][`desc-${i}`]" class="ck"></div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { chartQuery } from "./pieChartQuery";
import Helpers from "../../helpers";

export default {
  props: {
    chartId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      charts: []
    };
  },
  apollo: {
    chartData: {
      query: chartQuery,
      variables() {
        return {
          nid: this.chartId
        };
      },
      update({
        nodeQuery: {
          entities: [{ fieldPieChart }]
        }
      }) {
        this.charts = fieldPieChart.map((chart, j) => {
          return chart.entity.fieldColors.map((color, i) => {
            return {
              color,
              value: chart.entity.fieldValues[i],
              label: chart.entity.fieldLabels[i],
              [`desc-${j}`]: chart.entity.fieldDescription.processed
            };
          });
        });
        return this.charts;
      }
    }
  },
  methods: {
    pieSvg(arr) {
      return new window.ConicGradient({
        stops: Helpers.generateStyle(arr),
        size: 400
      }).svg;
    }
  }
};
</script>

<style scoped lang="scss">
.pie-chart-container {
  font-size: 20px;
}

.item {
  display: flex;

  + .item {
    margin-top: 15px;
  }
}

.list {
  display: flex;
  flex-wrap: wrap;

  + .list {
    margin-top: 50px;
  }
}

.field {
  margin: 20px;
}

.pie-chart-holder {
  margin-top: 0;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;

  /deep/ svg {
    width: 100%;
    height: 100%;
  }
}

.legend-color {
  display: block;
  width: 30px;
  height: 20px;
  margin-right: 10px;
}

/deep/ .ck {
  text-align: left;
}
</style>
