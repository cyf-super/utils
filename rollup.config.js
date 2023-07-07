import { defineConfig } from 'rollup'
import ts from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import babelPlugin from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import globals from 'rollup-plugin-node-globals'
import builtins from 'rollup-plugin-node-builtins'
import dts from 'rollup-plugin-dts'


const config = defineConfig([
	{
		input: ['src/index.ts'],
    output: [
      {
        dir: 'dist/esm',
        format: 'esm',
        preserveModules: true, // 开启这个选项会将每个模块单独打包，有利于摇树优化
      },
      {
        dir: 'dist/cjs',
        format: 'cjs',
        preserveModules: true,
      }
    ],
    plugins: [
      ts(),
      babelPlugin({ exclude: '**/node_modules/**' }),
      commonjs(),
    ]
	},
  // 打包类型声明
  {
    input: 'src/index.ts',
    output: {
        dir: 'dist/types',
        format: 'esm',
        preserveModules: true,
    },
    plugins: [
      dts()
    ]
  }
])

export default config