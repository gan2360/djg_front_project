const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                pathRewrite: { '^/api': '' },
                target: 'http://localhost:8000'

            }
        }
    }
})