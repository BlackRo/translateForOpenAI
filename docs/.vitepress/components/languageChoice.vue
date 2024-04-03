<template>
  <el-tabs v-model="activeName" class="demo-tabs">
    <el-tab-pane label="Curl" name="Curl">
      <div>
        Curl是一种流行的命令行工具，开发人员用它来向API发送HTTP请求。它需要很少的设置时间，但功能不如Python或JavaScript这样的完整编程语言强大。
      </div>
      <div class="steptitle">步骤1：设置 curl</div>
      <div class="steptitle">
        <el-collapse v-model="activeNames">
          <el-collapse-item title="安装 curl" name="1">
            <div class="stepcontent">
              许多操作系统默认安装了curl。您可以通过打开终端或命令行，然后输入以下命令来检查是否已安装curl：
            </div>
            <div class="stepcontent">
              <div class="py_demo1">
                <MarkdownRender :source="curl_demo1" />
              </div>
            </div>
            <div class="stepcontent">
              如果curl已设置并且已连接到互联网，它将发送一个HTTP请求,以获取
              **platform.openai.com** 的内容。
            </div>
             <div class="stepcontent">
              如果您收到找不到curl的错误消息，您可以按照 <el-link type="primary" href="https://everything.curl.dev/get" :underline="false" target="_blank">curl官网</el-link> 上的说明进行安装。
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="steptitle">步骤2：设置你的 API Key</div>
      <div class="stepcontent">
        既然我们已经使curl工作正常，下一步是在您的终端或命令行中设置API密钥。您可以选择跳过此步骤，并且只需在请求中包含您的API密钥，就像在第3步中所讨论的那样。
      </div>
      <div class="steptitle">
        <el-collapse v-model="curlStep2Names">
          <el-collapse-item title="MacOS" name="1">
            <div class="stepcontent">
              1.
              打开终端：您可以在“应用程序”文件夹中找到它，或者使用Spotlight（Command
              + Space）进行搜索。
            </div>
            <div class="stepcontent">
              2. 编辑bash配置文件：使用命令nano ~/.bash_profile或nano
              ~/.zshrc（适用于较新的MacOS版本）来在文本编辑器中打开配置文件。
            </div>
            <div class="stepcontent">
              3.
              添加环境变量：在编辑器中添加下面的一行，将"your-api-key-here"替换为您的实际API密钥：
            </div>
            <div class="stepcontent">
              <MarkdownRender :source="curl_API_macOS" />
            </div>
            <div class="stepcontent">
              4. 保存并退出：按下Ctrl+O来保存更改，然后按下Ctrl+X来关闭编辑器。
            </div>
            <div class="stepcontent">
              5. 加载您的配置文件：使用命令source ~/.bash_profile或source
              ~/.zshrc来加载更新后的配置文件。
            </div>
            <div class="stepcontent">
              6. 验证设置：在终端中输入echo
              $OPENAI_API_KEY来验证设置。它应该显示您的API密钥。
            </div>
          </el-collapse-item>
          <el-collapse-item title="Windows" name="2">
            <div class="stepcontent">
              1. 打开命令提示符：您可以在开始菜单中搜索“cmd”来找到它。
            </div>
            <div class="stepcontent">
              2.
              在当前会话中设置环境变量：要在当前会话中设置环境变量，请使用以下命令，将"your-api-key-here"替换为您的实际API密钥：
            </div>
           <div class="stepcontent">
              <MarkdownRender :source="curl_API_windows" />
            </div>
            <div class="stepcontent">
              这个命令将为当前会话设置OPENAI_API_KEY环境变量。
            </div>
            <div class="stepcontent">
              <div>
                3.
                永久设置：要使设置永久生效，请通过系统属性按以下方式添加变量：
              </div>
              <ul class="">
                <li>右键单击“此电脑”或“我的电脑”，然后选择“属性”。</li>
                <li>点击“高级系统设置”。</li>
                <li>点击“环境变量”按钮。</li>
                <li>
                  在“系统变量”部分，点击“新建...”，然后输入OPENAI_API_KEY作为变量名，您的API密钥作为变量值。
                </li>
              </ul>
            </div>
            <div class="stepcontent">
              4.
              验证设置：为了验证设置，请重新打开命令提示符并输入以下命令。它应该显示您的API密钥：
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="steptitle">步骤3：发送你的第一个请求</div>
      <div class="steptitle">
        <el-collapse v-model="curlStep3Names">
          <el-collapse-item title="发送请求" name="1">
            <div class="stepcontent">
              一旦您设置好了 API 密钥，最后一步就是发送您的第一个 API
              请求。为此，下面包含了对 Chat Completions、Embeddings 和 Images
              API 发送示例请求的样本。由于在步骤 2 中设置了 API
              密钥，它应该会自动通过您的终端或命令行中的 $OPENAI_API_KEY
              引用。您也可以手动将 $OPENAI_API_KEY 替换为您的 API
              密钥，但请确保在 curl 命令中隐藏您的 API 密钥（如果有的话）。
            </div>
            <div class="demoBox">
              <el-select
                v-model="curlVal"
                placeholder="Select"
                @change="curlChange"
                class="seletRight"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <div class="demoContent">
                <MarkdownRender :source="markText_curl" />
              </div>
            </div>
            <div class="stepcontent">
              <el-link type="primary" href="../markdown-examples.html" :underline="false">Chat Completions</el-link>示例突出了我们模型的一个优势：创造能力。用格式良好的诗歌来解释递归（编程主题），这是最优秀的开发者和最优秀的诗人都会遇到困难的事情。在这种情况下，gpt-3.5-turbo毫不费力地完成了任务。
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Python" name="Python">
      <div>
        Python是一种流行的编程语言，广泛用于数据应用、网页开发和许多其他编程任务，因为它易于使用。OpenAI提供了一个定制的<el-link type="primary" href="https://github.com/openai/openai-python" :underline="false" target="_blank">Python库</el-link>，使得在Python中使用OpenAI
        API变得简单高效。
      </div>
      <div class="steptitle">步骤1：设置 Python</div>
      <div class="steptitle">
        <el-collapse v-model="py_activeNames">
          <el-collapse-item title="安装 Python" name="1">
            <div class="stepcontent">
              要使用OpenAI的Python库，您需要确保已经安装了Python。有些计算机可能预装了Python，而其他计算机可能需要您自己进行设置。要测试是否安装了Python，您可以打开终端或命令行界面：
            </div>
            <ul class="">
              <li>
                在MacOS上，打开终端：您可以在"应用程序"文件夹中找到它，或者使用Spotlight（Command
                + Space）进行搜索。
              </li>
              <li>
                在Windows上，打开命令提示符：您可以通过在开始菜单中搜索"cmd"来找到它。
              </li>
            </ul>
            <div class="stepcontent">
              接下来，输入单词"python"，然后按回车/确定键。如果您进入了Python解释器，那么您的计算机已经安装了Python，您可以进行下一步。如果您看到类似于"Error:
              command python not
              found"的错误消息，那么您可能需要安装Python并在终端/命令行中设置其可用。
            </div>
            <div class="stepcontent">
              要下载Python，请前往<el-link type="primary" href="https://www.python.org/downloads/" :underline="false" target="_blank">Python官网</el-link> 并下载最新版本。要使用OpenAI的Python库，您至少需要Python
              3.7.1或更新的版本。如果您是首次安装Python，可以按照<el-link type="primary" href="https://wiki.python.org/moin/BeginnersGuide/Download" :underline="false" target="_blank">官方Python安装指南(面向初学者)</el-link>进行操作。
            </div>
          </el-collapse-item>
          <el-collapse-item title="设置虚拟环境（可选）" name="2">
            <div class="stepcontent">
              一旦您安装了Python，建议创建一个虚拟Python环境来安装OpenAI的Python库。虚拟环境为您的Python包提供了一个干净的工作空间,以防止与其他项目安装的库发生冲突。虽然不是必需的,但使用虚拟环境是一个良好的实践。如果您不想设置虚拟环境，请跳到第3步。
            </div>
            <div class="stepcontent">
              要创建一个虚拟环境，Python提供了一个内置的<el-link type="primary" href="https://docs.python.org/3/tutorial/venv.html" :underline="false" target="_blank">Venv模块</el-link>，它提供了设置虚拟环境所需的基本功能。运行以下命令将在您在终端/命令行中选择的当前文件夹中创建一个名为"openai-env"的虚拟环境：
            </div>
            <div class="py_demo1">
              <MarkdownRender :source="py_demo1" />
            </div>
            <div class="stepcontent">
              一旦您创建了虚拟环境，您需要激活它。在Windows上，运行以下命令来激活虚拟环境：
            </div>
            <div class="py_demo1">
              <MarkdownRender :source="py_demo1" />
            </div>
            <div class="stepcontent">
              在MacOS和Linux上，激活虚拟环境的命令略有不同，请运行以下命令：
            </div>
            <div class="py_demo1">
              <MarkdownRender :source="py_demo1" />
            </div>
            <div class="stepcontent">
              当您激活虚拟环境后，终端或命令行界面会稍微变化，光标输入区域的左侧会显示"openai-env"。有关虚拟环境的更多详细信息，请参考<el-link type="primary" href="https://docs.python.org/3/tutorial/venv.html#creating-virtual-environments" :underline="false" target="_blank">Python官方文档</el-link>。
            </div>
          </el-collapse-item>
          <el-collapse-item title="安装OpenAI Python库" name="3">
            <div class="stepcontent">
              在安装了Python
              3.7.1或更新版本并（可选）设置了虚拟环境之后，可以安装OpenAI
              Python库。从终端或命令行中运行以下命令进行安装：
            </div>
            <div class="py_demo1">
              <MarkdownRender :source="py_demo4" />
            </div>
            <div class="stepcontent">
              安装完成后，运行"pip
              list"命令将显示您当前环境中已安装的Python库，这将确认OpenAI
              Python库已成功安装。
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="steptitle">步骤2：设置你的 API Key</div>
      <div class="steptitle">
        <el-collapse v-model="py_curlStep2Names">
          <el-collapse-item title="为所有项目设置API密钥（推荐）" name="1">
            <div class="stepcontent">
              将API密钥设置为所有项目的主要优势是，Python库会自动检测并使用它，而无需编写任何代码。
            </div>
            <el-collapse v-model="py_Step21Names">
              <el-collapse-item title="MacOS" name="1">
                <div class="stepcontent">
                  1.打开终端：您可以在应用程序文件夹中找到它，或者使用Spotlight（Command
                  + Space）进行搜索。
                </div>
                <div class="stepcontent">
                  2.编辑Bash配置文件：使用命令nano
                  ~/.bash_profile或nano~/.zshrc（较新的MacOS版本）打开配置文件并进入文本编辑器。
                </div>
                <div class="stepcontent">
                  3.添加环境变量：在编辑器中添加下面的一行，将"your-api-key-here"替换为您的实际API密钥：
                </div>
                <div class="py_demo1">
                  <MarkdownRender :source="py_Step21demo1" />
                </div>
                <div class="stepcontent">
                  4.
                  保存并退出：按下Ctrl+O来保存更改，然后按下Ctrl+X来关闭编辑器。
                </div>
                <div class="stepcontent">
                  5. 加载您的配置文件：使用命令source ~/.bash_profile或source
                  ~/.zshrc来加载更新后的配置文件。
                </div>
                <div class="stepcontent">
                  6. 验证设置：在终端中输入echo
                  $OPENAI_API_KEY来验证设置。它应该显示您的API密钥。
                </div>
              </el-collapse-item>
              <el-collapse-item title="Windows" name="2">
                <div class="stepcontent">
                  1. 打开命令提示符：您可以在开始菜单中搜索“cmd”来找到它。
                </div>
                <div class="stepcontent">
                  2.
                  在当前会话中设置环境变量：要在当前会话中设置环境变量，请使用以下命令，将"your-api-key-here"替换为您的实际API密钥：
                </div>
                <div class="py_demo1">
                  <MarkdownRender :source="py_API_windows" />
                </div>
                <div class="stepcontent">
                  这个命令将为当前会话设置OPENAI_API_KEY环境变量。
                </div>
                <div class="stepcontent">
                  <div>
                    3.
                    永久设置：要使设置永久生效，请通过系统属性按以下方式添加变量：
                  </div>
                  <ul class="">
                    <li>右键单击“此电脑”或“我的电脑”，然后选择“属性”。</li>
                    <li>点击“高级系统设置”。</li>
                    <li>点击“环境变量”按钮。</li>
                    <li>
                      在“系统变量”部分，点击“新建...”，然后输入OPENAI_API_KEY作为变量名，您的API密钥作为变量值。
                    </li>
                  </ul>
                </div>
                <div class="stepcontent">
                  4.
                  验证设置：为了验证设置，请重新打开命令提示符并输入以下命令。它应该显示您的API密钥：
                </div>
              </el-collapse-item>
            </el-collapse>
          </el-collapse-item>
          <el-collapse-item title="为单个项目设置API密钥" name="2">
            <div class="stepcontent">
             如果您只希望将API密钥用于单个项目，您可以创建一个本地的.env文件，其中包含API密钥，并在后续步骤中的Python代码中明确使用该API密钥。
            </div>
            <div class="stepcontent">
              首先，进入您希望在其中创建.env文件的项目文件夹。
            </div>
            <div class="stepcontent">
              为了使您的.env文件在版本控制中被忽略，需要在项目目录的根目录中创建一个.gitignore文件。在文件中添加一行包含.env的内容，确保您的API密钥或其他机密信息不会通过版本控制意外地共享出去。
            </div>
            <div class="stepcontent">
              在终端或集成开发环境（IDE）中创建了.gitignore和.env文件后，将您的密钥复制并设置为.env文件中的OPENAI_API_KEY。如果您尚未创建密钥，请在API密钥页面上创建。
            </div>
            <div class="stepcontent">
              .env文件的内容应如下所示:
            </div>
            <div class="py_demo1">
                  <MarkdownRender :source="py_Step22demo1" />
            </div>
            <div class="stepcontent">
              可以通过运行以下代码导入API密钥：
            </div>
            <div class="py_demo1">
                  <MarkdownRender :source="py_Step22demo2" />
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="steptitle">步骤3：发送你的第一个请求</div>
      <div class="steptitle">
        <el-collapse v-model="py_curlStep3Names">
          <el-collapse-item title="发送请求" name="1">
            <div class="stepcontent">
              在配置好Python和设置API密钥之后，最后一步是使用Python库向OpenAI API发送请求。为此，请使用终端或IDE创建一个名为openai-test.py的文件。
            </div>
            <div class="demoBox">
              <el-select
                v-model="py_value"
                placeholder="Select"
                @change="pythonChange"
                class="seletRight"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <div class="demoContent">
                <MarkdownRender :source="py_markText" />
              </div>
            </div>
            <div class="stepcontent">
              要运行该代码，请在终端或命令行中输入"python openai-test.py"。
            </div>
            <div class="stepcontent">
              <el-link type="primary" href="../markdown-examples.html" :underline="false">Chat Completions</el-link>示例突出了我们模型的一个优势：创造能力。用格式良好的诗歌来解释递归（编程主题），这是最优秀的开发者和最优秀的诗人都会遇到困难的事情。在这种情况下，gpt-3.5-turbo毫不费力地完成了任务。
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Node.js" name="Node">
        <div>
        Node.js是一种流行的JavaScript框架，常用于Web开发。OpenAI提供了一个定制的<el-link type="primary" href="https://github.com/openai/openai-node" target="_blank" :underline="false">Node.js/TypeScript库</el-link>，可以简化和高效地在JavaScript中使用OpenAI API。
      </div>
      <div class="steptitle">步骤1：设置 Node</div>
      <div class="steptitle">
        <el-collapse v-model="node_activeNames">
          <el-collapse-item title="安装 Node" name="1">
            <div class="stepcontent">
              要使用OpenAI的Node.js库，您需要确保已安装了Node.js。
            </div>
            <div class="stepcontent">
             要下载Node.js，请访问<el-link type="primary" href="https://nodejs.org/en/download" target="_blank" :underline="false">Node官网</el-link>并下载LTS版本。如果您是第一次安装Node.js，可以按照<el-link type="primary" href="https://nodejs.org/api/synopsis.html#usage" :underline="false" target="_blank">Node.js使用指南</el-link>开始使用。
            </div>
          </el-collapse-item>
          <el-collapse-item title="安装OpenAI的Node.js库" name="2">
            <div class="stepcontent">
             安装Node.js后，可以安装OpenAI的Node.js库。在终端或命令行中运行以下命令：
            </div>
            <div class="py_demo1">
              <MarkdownRender :source = "node_demo1"/>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="steptitle">步骤2：设置你的 API Key</div>
      <div class="steptitle">
        <el-collapse v-model="node_Step2Names">
          <el-collapse-item title="为所有项目设置API密钥（推荐）" name="1">
            <div class="stepcontent">
             将您的API密钥对所有项目都可访问的主要优势是，我们的SDK将自动检测并使用它，无需编写任何代码。
            </div>
            <el-collapse v-model="node_Step21Names">
              <el-collapse-item title="MacOS" name="1">
                <div class="stepcontent">
                  1.打开终端：您可以在应用程序文件夹中找到它，或者使用Spotlight（Command
                  + Space）进行搜索。
                </div>
                <div class="stepcontent">
                  2.编辑Bash配置文件：使用命令nano
                  ~/.bash_profile或nano~/.zshrc（较新的MacOS版本）打开配置文件并进入文本编辑器。
                </div>
                <div class="stepcontent">
                  3.添加环境变量：在编辑器中添加下面的一行，将"your-api-key-here"替换为您的实际API密钥：
                </div>
                <div class="py_demo1">
                  <MarkdownRender :source="node_Step21demo1" />
                </div>
                <div class="stepcontent">
                  4.
                  保存并退出：按下Ctrl+O来保存更改，然后按下Ctrl+X来关闭编辑器。
                </div>
                <div class="stepcontent">
                  5. 加载您的配置文件：使用命令source ~/.bash_profile或source
                  ~/.zshrc来加载更新后的配置文件。
                </div>
                <div class="stepcontent">
                  6. 验证设置：在终端中输入echo
                  $OPENAI_API_KEY来验证设置。它应该显示您的API密钥。
                </div>
              </el-collapse-item>
              <el-collapse-item title="Windows" name="2">
                <div class="stepcontent">
                  1. 打开命令提示符：您可以在开始菜单中搜索“cmd”来找到它。
                </div>
                <div class="stepcontent">
                  2.
                  在当前会话中设置环境变量：要在当前会话中设置环境变量，请使用以下命令，将"your-api-key-here"替换为您的实际API密钥：
                </div>
                <div class="py_demo1">
                  <MarkdownRender :source="node_API_window" />
                </div>
                <div class="stepcontent">
                  这个命令将为当前会话设置OPENAI_API_KEY环境变量。
                </div>
                <div class="stepcontent">
                  <div>
                    3.
                    永久设置：要使设置永久生效，请通过系统属性按以下方式添加变量：
                  </div>
                  <ul class="">
                    <li>右键单击“此电脑”或“我的电脑”，然后选择“属性”。</li>
                    <li>点击“高级系统设置”。</li>
                    <li>点击“环境变量”按钮。</li>
                    <li>
                      在“系统变量”部分，点击“新建...”，然后输入OPENAI_API_KEY作为变量名，您的API密钥作为变量值。
                    </li>
                  </ul>
                </div>
                <div class="stepcontent">
                  4.
                  验证设置：为了验证设置，请重新打开命令提示符并输入以下命令。它应该显示您的API密钥：
                </div>
              </el-collapse-item>
            </el-collapse>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="steptitle">步骤3：发送你的第一个请求</div>
      <div class="steptitle">
        <el-collapse v-model="node_Step3Names">
          <el-collapse-item title="发送请求" name="1">
            <div class="stepcontent">
              在配置好Node.js和设置API密钥之后，最后一步是使用Node.js库向OpenAI API发送请求。为此，请使用终端或IDE创建一个名为openai-test.js的文件。
            </div>
            <div class="stepcontent">
              在文件中，复制并粘贴以下示例之一：
            </div>
            <div class="demoBox">
              <el-select
                v-model="node_value"
                placeholder="Select"
                @change="nodeChange"
                class="seletRight"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <div class="demoContent">
                <MarkdownRender :source="node_markText" />
              </div>
            </div>
            <div class="stepcontent">
                要运行该代码，请在终端或命令行中输入"node openai-test.js"。
              </div>
              <div class="stepcontent">
              <el-link type="primary" href="../markdown-examples.html" :underline="false">Chat Completions</el-link>示例突出了我们模型的一个优势：创造能力。用格式良好的诗歌来解释递归（编程主题），这是最优秀的开发者和最优秀的诗人都会遇到困难的事情。在这种情况下，gpt-3.5-turbo毫不费力地完成了任务。
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>

    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import MarkdownRender from "./markdownRenderer.vue";
import commonFunc from "../hooks/common";
import curlFunc from "../hooks/curl";
import pythonFunc from "../hooks/python";
import nodeFunc from "../hooks/nodejs";

import {
  ElTabs,
  ElTabPane,
  ElCollapse,
  ElCollapseItem,
  ElSelect,
  ElOption,
  ElLink
} from "element-plus";
const { options } = commonFunc();
const {
  curlVal,
  curlChange,
  curl_API_macOS,
  markText_curl,
  activeName,
  activeNames,
  curlStep2Names,
  curlStep3Names,
  curl_demo1,
  curl_API_windows
} = curlFunc();
const {
  py_markText,
  py_activeName,
  py_activeNames,
  py_curlStep2Names,
  py_curlStep3Names,
  py_value,
  py_demo1,
  py_demo2,
  py_demo3,
  py_demo4,
  py_Step21Names,
  py_Step21demo1,
  py_Step22demo1,
  py_Step22demo2,
  py_API_windows,
  pythonChange
} = pythonFunc();
const {
    node_demo1,
    node_markText,
    node_activeName,
    node_activeNames,
    node_Step2Names,
    node_step3Names,
    node_value,
    node_Step21demo1,
    node_API_window,
    nodeChange
} = nodeFunc()
</script>
<style >
.py_demo1 {
  background: #aaa;
}
.seletRight {
  top: 5px;
  right: -5px;
  border: 0px;
}
.demoContent {
  background: rgb(32, 33, 35);
}
.demoBox {
  background: rgb(53, 55, 64);
}
.steptitle {
  font-size: 18px;
  font-weight: 550;
  margin: 20px 0px;
}
.el-collapse-item__header {
  font-size: 18px;
  font-weight: 550;
}
.stepcontent {
  margin: 10px 0px;
  font-size: 15px;
  font-weight: 400;
  color: #1c1e21;
  font-family: "Chinese Quotes", "Inter var", "Inter", ui-sans-serif, system-ui,
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
    Helvetica, Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
</style>