<template>
  <div>
    <a class="container" href="../../startComponents/quickstart.html">
      <div class="image-container">
        <div class="icon-item-icon green-gradient-bg">
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
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div class="text-container">
        <div class="guideitle">带嵌入的网站问答</div>
        <div class="guidesubtitle">
          了解如何构建一个可以回答有关您网站问题的人工智能。
        </div>
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
        <div class="guideitle">使用Whisper转录会议记录</div>
        <div class="guidesubtitle">
          了解如何使用Whisper和GPT-4创建自动会议记录生成器
        </div>
      </div>
    </a>
    <a class="container" href="../../startComponents/Intro-page.html">
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
            <path
              fill-rule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div class="text-container">
        <div class="guideitle">
          <span>即将推出</span>
        </div>
        <div class="guidesubtitle">了解如何构建和部署一个了解多个知识库的人工智能聊天机器人</div>
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