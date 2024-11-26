<template>
  <div class="card">
    <Chart type="line" :data="chartData" :options="chartOptions" class="h-[30rem]" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import Chart from 'primevue/chart';


onMounted(() => {
  chartData.value = setChartData()
  chartOptions.value = setChartOptions()
})

const chartData = ref()
const chartOptions = ref()
      
const setChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement);

  return {
    labels: ['01.24', '02.24', '03.24', '04.24', '05.24', '06.24', '07.24'],
    datasets: [
      {
        label: 'Kaspi',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "red",
        tension: 0.5
      },
      {
        label: 'Halyk',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: "green",
        tension: 0.4
      }
    ]
  }
}

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement)
  const textColor = documentStyle.getPropertyValue('--p-text-color')
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color')
  const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color')

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: textColor
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder
        }
      },
      y: {
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder
        }
      }
    }
  }
}
</script>
