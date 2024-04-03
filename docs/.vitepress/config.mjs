import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "文档",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '研究',
        items: [
          { text: "概述", link: '/markdown-examples' },
          { text: "研究索引", link: '/markdown-examples' },
          { text: "GPT-4", link: '/markdown-examples' },
          { text: "DALL·E3", link: '/markdown-examples' },
        ]
      },
      {
        text: '接口',
        items: [
          { text: "概述", link: '/markdown-examples' },
          { text: "数据隐私", link: '/markdown-examples' },
          { text: "产品价格", link: '/markdown-examples' },
          { text: "接口文档", link: '/markdown-examples' },
        ]
      },
      {
        text: 'xxxx',
        items: [
          { text: "概述", link: '/markdown-examples' },
          { text: "企业", link: '/markdown-examples' },
          { text: "尝试ChatGPT", link: '/markdown-examples' },
        ]
      },
      { text: '安全相关', link: '/markdown-examples' },
      {
        text: '公司介绍',
        items: [
          { text: "关于我们", link: '/markdown-examples' },
          { text: "联系我们", link: '/markdown-examples' },
          { text: "赞助支持", link: '/markdown-examples' },
        ]
      },
    ],

    sidebar: [

      {
        text: '说明文档',
        collapsed: true,
        items: [
          {
            text: '开始使用',
            collapsed: true,
            items: [
              { text: '介绍', link: '/document/startComponents/Intro-page' },
              { text: '快速开始', link: '/document/startComponents/quickstart' },
              {
                text: '模型', link: '/document/startComponents/models-overview'
              },
              { text: '教程', link: '/document/startComponents/tutorials' },
              { text: '更新日志', link: '/document/startComponents/changeLog' }
            ]
          },
          {
            text: '能力',
            collapsed: true,
            items: [
              { text: 'Text generation 文本生成', link: '/document/capabilityComponents/textGeneration' },
              { text: 'Function calling 函数调用', link: '/document/functionCalling/functionCall' },
              { text: 'Embeddings 嵌入', link: '/document/embeddings/embeddingsPage' },
              { text: 'Fine-tuning 微调', link: '/document/fineTuning/fineTuning' },
              { text: 'Image generation 图像生成', link: '/document/imageGeneration/imageGeneration' },
              { text: 'Vision 视觉', link: '/document/visionPage/visionPage' },
              { text: 'Text to speech 文本转语音', link: '/document/textSpeech/textSpeech' },
              { text: 'Speech to text 语音转文本', link: '/document/speechText/speechText' },
              { text: 'Moderation 限制', link: '/document/moderation/moderation' },
            ]
          },
          {
            text: '助手',
            collapsed: true,
            items: [
              { text: '概述', link: '/document/assistants/assistants' },
              { text: '助手工作原理', link: '/document/assistants/howToWork' },
              { text: '工具', link: '/document/assistants/Tools' }
            ]
          },
          {
            text: '指南',
            collapsed: true,
            items: [
              { text: '快速工程', link: '/document/promptEngineering/promptEngineering' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          },
          {
            text: 'chat GPT',
            collapsed: true,
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          },
        ]

      },
      {
        text: 'API 指引',
        collapsed: true,
      }

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Hua Mao'
    }
  }
})
