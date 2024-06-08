const { defineConfig } = require('@vue/cli-service');
const WebpackObfuscator = require('webpack-obfuscator');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: config => {
        // 设置 HTML 插件的标题
        config.plugin('html').tap(args => {
            args[0].title = 'Muieay^网址导航';
            return args;
        });
        
        // 设置 Terser 插件的配置，移除 console 语句
        config.optimization.minimizer('terser').tap(args => {
            args[0].terserOptions.compress.drop_console = true;
            return args;
        });
    },
    productionSourceMap: false,
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 启用 Webpack Obfuscator 插件进行代码混淆
            config.plugins.push(
                new WebpackObfuscator({
                    rotateUnicodeArray: true, // 打乱 Unicode 数组顺序
                })
            );
            
            // 启用 Terser 插件进行代码混淆
            config.optimization.minimizer.push(
                new TerserPlugin({
                    terserOptions: {
                        mangle: true, // 开启变量名混淆
                    },
                })
            );
        }
    }
});
