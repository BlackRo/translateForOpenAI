<template>
  <div>
    <a class="container" href="https://cookbook.openai.com/articles/what_is_new_with_dalle_3" target="_blank">
      <div class="image-container">
        <div class="icon-item-icon red-gradient-bg">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 20 20"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div class="text-container">
        <div class="guideitle">
          <span>DALL·E 3的新功能</span>
        </div>
        <div class="guidesubtitle">在OpenAI cookbook中探索DALL·E 3的新功能</div>
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