const {defineConfig} = require('@vue/cli-service')
const WebpackObfuscator = require('webpack-obfuscator');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Muieay^网址导航'
                return args
            })
    },
    productionSourceMap: false,
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            // 启用Webpack Obfuscator插件进行代码加密
            config.plugins.push(
                new WebpackObfuscator({
                    rotateUnicodeArray: true, // 打乱Unicode数组顺序
                })
            );
            // 启用Terser插件进行代码混淆
            config.optimization.minimizer.push(
                new TerserPlugin({
                    terserOptions: {
                        mangle: true, // 开启变量名混淆
                    },
                })
            );
        }
    },
})
