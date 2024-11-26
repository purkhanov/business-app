<template>
  <div class="card">
    <h3 class="font-bold mt-2">{{ title }}</h3>

    <DataTable :value="data" stripedRows tableStyle="min-width: 15rem">
      <Column field="name" header="Name"></Column>
      <Column field="selled" header="Selled"></Column>
      <Column field="in_stok" header="In Stock"></Column>
      <Column field="margin" header="Margin"></Column>
    </DataTable>

  </div>
</template>

<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

defineProps({
  title: String,
  data: Array
})

</script>
