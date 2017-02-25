

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
    

## 2.2 为updatePositions函数增加参数

    updatePositions函数将从外界接收一个代表当前窗口滚动的数字参数
    
## 2.3 避免在for循环里面反复查询同一个DOM元素

    把movingPizzaItems元素查询移出for循环
    
## 2.4 减少发生在for循环里的计算量

    新建phaseArr，在for循环外一次完成phase参数计算
    
## 2.5 缓存movingPizzaItems集合length属性

## 2.6 在pizza.html中修改movingPizzas1元素位置：

    修改后的样子是：
    
    
        <!-- move movingPizzas1 to its own row in grid system -->
        <div  class="row">
          <div id="movingPizzas1" class="col-md-12">
          </div>
        </div>

## 2.7 更新对象位置:用style.transform属性替换style.left

    修改后的样子是：
    
    
    movingPizzaItems[i].style.transform = "translate("+ leftOffSet + ")";


## 优化resizePizza过程


