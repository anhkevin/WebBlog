<template>
<iframe width="560" height="315" src="video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</template>

<script>
export default {
  props: {
    video: {
      type: String,
      default: 'video'
    },
    title: {
      type: String,
      default: 'YouTube video player'
    }
  }
}
</script>