<template>
  <div>
    <pie-chart :data="chartData"></pie-chart>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      chartData: {
        'Click': 5,
        'DurationTime': 115,
        'Likes': 70
      }
    }
  }
}
</script>
