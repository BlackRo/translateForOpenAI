<template>
  <div>
    <a class="container" href="https://platform.openai.com/docs/guides/vision">
      <div class="image-container">
        <div class="icon-item-icon purple-gradient-bg">
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
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
            <path
              fill-rule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div class="text-container">
        <div class="guideitle">使用图像输入探索GPT-4</div>
        <div class="guidesubtitle">查看vision指南了解更多详细信息。</div>
      </div>
    </a>
    <a class="container" href="../../startComponents/Intro-page.html">
      <div class="image-container">
        <div class="icon-item-icon pink-gradient-bg">
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
              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div class="text-container">
        <div class="guideitle">GPT-4 Turbo</div>
        <div class="guidesubtitle">
          在线尝试GPT-4 Turbo
        </div>
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