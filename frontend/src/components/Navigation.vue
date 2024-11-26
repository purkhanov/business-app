<template>
  <div class="bg-sky-400">
    <ul class="flex justify-around justify-items-center">

      <li class="p-2 hover:text-green-600">
        <router-link to="/">
          <IconTimeline size="32" stroke={2} />
        </router-link>
      </li>

      <li class="p-2 hover:text-green-600">
        <router-link to="/clients">
          <IconLicense size="32" stroke={2} />
        </router-link>
      </li>

      <li class="p-2 hover:text-green-600">
        <router-link to="/companies">
          <IconBuildings size="32" stroke={2} />
        </router-link>
      </li>

    </ul>
  </div>
</template>

<script setup>
import { IconTimeline } from '@tabler/icons-vue'
import { IconLicense } from '@tabler/icons-vue'
import { IconBuildings } from '@tabler/icons-vue'
</script>
