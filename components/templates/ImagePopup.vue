<template>
    <div>
      <!-- Modal Container -->
      <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <img :src="imageSrc" alt="Popup Image" />
          <button class="close-button" @click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImagePopup',
    props: {
      imageSrc: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        showModal: false,
      };
    },
    methods: {
      openModal() {
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .modal-content {
    position: relative;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
  }
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }
  </style>