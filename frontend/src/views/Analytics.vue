<template>
  <div class="flex flex-col gap-4">

    <div class="text-center">
      <SelectButton v-model="value" :options="options" />
    </div>
    
    <Chart :chart-data="chartData" />
    
    <DataRows :title="rowTitle" :data="products" />
    <DataRows :title="rowTitle2" :data="products" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SelectButton from 'primevue/selectbutton'
import Chart from '@/components/Chart.vue'
import DataRows from '@/components/DataRows.vue'

const value = ref('Zama');
const options = ref(['Zama', 'PCode', 'Coffe'])

const chartData = ref({
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
        label: 'Наличка',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: "green",
        tension: 0.4
      }
    ]
  })

const rowTitle = ref('Sales in last month')
const rowTitle2 = ref('Sales in last year')
const products = ref([
  { name: 'P001', selled: 5, in_stok: 4, margin: 1260 },
  { name: 'P002', selled: 5, in_stok: 4, margin: 526 },
  { name: 'P003', selled: 5, in_stok: 4, margin: 826 },
  { name: 'P003', selled: 5, in_stok: 4, margin: 826 },
  { name: 'P003', selled: 5, in_stok: 4, margin: 826 },
])
</script>

