<template>
    <div class="share-wrapper">
        <span class="share-label text-muted mr-1">Share</span> 
        <span class="share-icons">
            <ShareNetwork
            v-for="network in networks"
            :network="network.network"
            :key="network.network"
            :url="sharing.url"
            :title="sharing.title"
            :description="sharing.description"
            :quote="sharing.quote"
            :hashtags="sharing.hashtags">
            <i :class="network.class"></i>
            </ShareNetwork>
        </span>
    </div>
</template>

<script>
export default {
  name: 'Share',
  props: {
    sharing: {
      type: Object,
      required: true
    }
  },
  computed: {
    networks() {
        return [
            { network: 'facebook', class: 'fa-fw fab fa-facebook-square' },
            { network: 'twitter', class: 'fa-fw fab fa-twitter' },
            { network: 'telegram', class: 'fa-fw fab fa-telegram' },
            { network: 'messenger', class: 'fa-fw fab fa-facebook-messenger' },
            { network: 'pinterest', class: 'fa-fw fab fa-pinterest' },
            { network: 'whatsapp', class: 'fa-fw fab fa-whatsapp' },
        ]
    }
  }
}
</script>