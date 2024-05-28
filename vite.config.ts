import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver, VantImports } from '@vant/auto-import-resolver';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),AutoImport({
    // 注释此选项，可正常导入函数式组件的样式
    imports:[VantImports()],
    resolvers:[VantResolver()]
  }),
  Components({
    resolvers:[VantResolver()]
  })],
  server:{
    open:true
  }
})
