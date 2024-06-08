# Muieay`网址导航

###### 一个纯静态的网址导航

服务器太LOW，写一个纯静态的网址导航，依靠免费CDN部署。

[导航](https://nav.muieay.link)

## 使用
配置环境变量
```
# 用户名
VUE_APP_USER = 'Muieay'
# 密码(加密)
VUE_APP_PWD = 'Muieay'
# 仓库名
VUE_APP_REPO = 'MuiNav'
# 密钥(加密)
VUE_APP_TOKEN = 'github-token'
VUE_APP_KEY = '1'
```
大前端没有服务器，又想使用在线编辑功能。所以采用了GitHub提供的API接口实现假后端功能。

注意!!!此加密并保证安全，在申请GitHub-token时请注意限定权限，避免token泄露造成危害。

在`\admin`下提供简单的明文加密。
`key`为环境变量配置的`VUE_APP_KEY`
