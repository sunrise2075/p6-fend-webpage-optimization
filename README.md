

# 在开发流程安装gulp构建工具
1. 安装gulp依赖

``
npm install --save-dev gulp gulp-uglify jshint gulp-jshint gulp-rename
npm install --save-dev gulp-plumber gulp-connect jshint-stylish gulp-csslint
``

2. 安装clean-css依赖

``npm install gulp-clean-css  --save-dev
``

3. 运行gulp命令

``
gulp
``

# Part 1: 优化 index.html 的 PageSpeed Insights 得分

## 把外部CSS全局放到index.html

## 使用压缩版本js文件

    此处特指名称为“perfmatters.js”的压缩文件
    
## 异步加载Google Font

    具体请查看index.html第72行

## 异步加载Google Analytics API 类库

    具体请参考index.html第87行

## 为外网请求提供压缩版图片

    把PageSpeed站点处理过的压缩版图片放到img目录下面，主要有：
    
    profilepic.jpg


## 使用http-server启动项目
    
    设定HTTP响应头的缓存控制时间足够长，比如说31天

   1. 计算公式：3600sec * 24 *30 = 22678400sec
   2. 在命令行输入以下命令：

``
http-server -c22678400
``

# Part 2: 优化 pizza.html 的FPS (每秒帧数)

## 优化窗口滚动事件

## 优化resizePizza过程


