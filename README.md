

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
    
    img/profilepic.jpg
    
    views/images/pizzeria.jpg


## 使用http-server启动项目
    
    设定HTTP响应头的缓存控制时间足够长，比如说31天

   1. 计算公式：3600sec * 24 *30 = 22678400sec
   2. 在命令行输入以下命令：

``
http-server -c22678400
``

# 优化 pizza.html 的FPS (每秒帧数)

## 1. 高效地查询页面元素

    mian.js文件主要用到了下面的方法选取页面元素：
    
    elementList = document.querySelectorAll(selectors);
    
    更好的方法是：
    
    element = document.getElementById(idString)
    
    和
    
    element = document.getElementsByClassName(className)

## 2.优化窗口滚动事件

## 2.1 优化Scroll 处理性能

    使用 window.requestAnimationFrame 优化Scroll 处理性能
    
    
## 2.2 避免在for循环里面反复查询同一个DOM元素

    把movingPizzaItems元素查询移出for循环
    
## 2.3 减少发生在for循环里的计算量

    新建phaseArr，在for循环外一次完成phase参数计算
    
## 2.4 缓存movingPizzaItems集合length属性

## 2.5 在pizza.html中修改movingPizzas1元素位置：

    修改后的样子是：
    
    
        <!-- move movingPizzas1 to its own row in grid system -->
        <div  class="row">
          <div id="movingPizzas1" class="col-md-12">
          </div>
        </div>

## 2.6 更新对象位置:用style.transform属性替换style.left

    修改后的样子是：
    
    
    movingPizzaItems[i].style.transform = "translate("+ leftOffSet + ")";


## 3.优化resizePizza过程

### 3.1 优化比萨饼创建方法

    把原来用字符串拼接innerHTML的方法改为直接用javascript方法创建DOM节点

### 3.2 修改pizzaElementGenerator方法

    为比萨饼设置默认尺寸的className属性

### 3.3 为三种尺寸的比萨饼分别定义样式

    具体参考views\css\style.css文件56行~69行
    
### 3.4 优化披萨饼图片尺寸切换动画

    使用window.requestAnimationFrame调用changePizzaImageSizes函数
    
### 3.5 用className控制比萨饼尺寸

    具体参考\views\js\main.js第474行

    


