# 编程皆可中文命名
## 本项目提供转换工具,能够使不支持中文用作变量,函数名之类的英语编程语言间接支持中文,中西结合,谁用谁知道
## 提高了代码可读性,可维护性
## 减少了起名的困惑

环境相关: 需要安装好node 和 gulp

安装依赖
npm install
npm install gulp

运行监听 保存文件即替换
gulp watch

以$开头的中文直接替换 不以$开头的中文不替换

示例用法 zh 转 python2
根目录下建立一个.zh的文件名
打开文件输入中文变量 保存后 自动生成 对应的 py