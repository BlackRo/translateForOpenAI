<template>
  <div>
    <a class="container" href="../../startComponents/Intro-page.html">
      <div class="image-container">
        <div class="icon-item-icon green-gradient-bg">
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            ></path>
          </svg>
        </div>
      </div>
      <div class="text-container">
        <div class="guideitle">
          <span>微调数据格式验证</span>
        </div>
        <div class="guidesubtitle">了解微调的数据验证</div>
      </div>
    </a>
  </div>
</template>
<script lang="ts" setup>
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.image-container {
  flex: 0 0 10%; /* 设置图像容器宽度为50% */
  padding: 0 20px; /* 可根据需要进行调整 */
}

.text-container {
  flex: 1; /* 设置文本容器宽度为剩余空间的100% */
}
.green-gradient-bg {
  background-color: #19c37d;
  background-image: url(../assets/green.svg);
  background-size: cover;
}
.icon-item-icon {
  border-radius: 8px;
  color: #fff;
  flex: 0 0 auto;
  font-size: 24px;
  line-height: 0px;
  padding: 15px;
}
.guideitle {
  color: #000;
  display: inline-block;
  margin-bottom: 2px;
  margin-top: 3px;
  transition: color 0.15s;
  font-weight: 700;
  font-size: 16px;
}
.guidesubtitle {
  color: #6e6e80;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  font-size: 14px;
}
a {
  text-decoration: none;
}
.purple-gradient-bg {
  background-color: #5436da;
  background-image: url(../assets/purple.svg);
  background-size: cover;
}
.orange-gradient-bg {
  background-color: #f4ac36;
  background-image: url(../assets/orange.svg);
  background-size: cover;
}
.red-gradient-bg {
  background-color: #ef4146;
  background-image: url(../assets/red.svg);
  background-size: cover;
}
.pink-gradient-bg {
  background-color: #dd5ce5;
  background-image: url(../assets/pink.svg);
  background-size: cover;
}
</style>