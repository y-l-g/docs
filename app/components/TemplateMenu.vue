<template>
  <UDropdownMenu
    :modal="false"
    :items="[{
      label: 'Queue',
      to: '/extensions/queue',
      icon: 'i-lucide-list-checks'
    }, {
      label: 'Scheduler',
      to: '/extensions/scheduler',
      icon: 'i-lucide-calendar-clock'
    }, {
      label: 'Pogo',
      to: '/extensions/pogo',
      icon: 'i-lucide-split'
    }, {
      label: 'WebSocket',
      to: '/extensions/websocket',
      icon: 'i-lucide-radio'
    }]"
    :content="{ align: 'start' }"
    :ui="{ content: 'min-w-fit' }"
  >
    <UButton
      label="Extensions"
      variant="subtle"
      trailing-icon="i-lucide-chevron-down"
      size="xs"
      class="-mb-[6px] font-semibold rounded-full truncate"
    />
  </UDropdownMenu>
</template>
