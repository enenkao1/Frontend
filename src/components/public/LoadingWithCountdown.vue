<template>
  <div v-if="isVisible" class="loading-overlay">
    <div class="loading-spinner"></div>
    <div class="countdown-text">Please wait for {{ countdown }} seconds...</div>
  </div>
</template>

<script>
export default {
  props: {
    duration: {
      type: Number,
      required: true,
    },
    isVisible: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      countdown: this.duration,
      intervalId: null,
    };
  },
  watch: {
    isVisible(newVal) {
      if (newVal) {
        this.startCountdown();
      } else {
        this.resetCountdown();
      }
    },
  },
  methods: {
    startCountdown() {
      this.countdown = this.duration;
      this.intervalId = setInterval(() => {
        this.countdown -= 1;
        if (this.countdown <= 0) {
          clearInterval(this.intervalId);
        }
      }, 1000);
    },
    resetCountdown() {
      this.countdown = this.duration;
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
    },
  },
  beforeDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
};
</script>

<style scoped>
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 1000;
}

.loading-spinner {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid #000;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}

.countdown-text {
  margin-left: 30px;
  margin-top: 20px;
  font-size: 18px;
  color: #333;
}
</style>
