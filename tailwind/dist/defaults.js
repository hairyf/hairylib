"use strict";
/*
 * @Author: Mr.Mao
 * @Date: 2021-06-18 14:00:57
 * @LastEditTime: 2021-06-18 14:54:26
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaults = void 0;
const utils_1 = require("./utils");
/** 默认配置 */
exports.defaults = {
    /** 生产环境下, 需清除样式的文件列表 */
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    /** 前缀 */
    prefix: '',
    /**
     * 类名是否标记 !important
     */
    important: true,
    /**
     * 深色模式
     * @param value 'media'(自动切换), 'class'(手动切换), false(关闭)
     */
    darkMode: false,
    /**
     * 主题配置
     * @link https://www.tailwindcss.cn/docs/theme
     */
    theme: {
        /**
       * 断点配置 class="sm:text-center"
       * @template {sm: '640px'}
       * @link https://www.tailwindcss.cn/docs/breakpoints
       */
        screens: {
            xs: { min: '0' },
            sm: { min: '576px' },
            md: { min: '768px' },
            lg: { min: '922px' },
            xl: { min: '1200px' },
            xxl: { min: '1600px' },
            xxxl: { min: '1920px' }
        },
        boxShadow: {
            DEFAULT: '0px 0px 10px rgba(0, 0, 0, 0.05), 0px 0px 20px rgba(0, 0, 0, 0.02)'
        },
        spacing: utils_1.getSpacing(2000),
        minWidth: ((theme) => ({
            ...theme('spacing'),
            ...utils_1.getPercentage(),
            screen: '100vw'
        })),
        maxWidth: ((theme) => ({
            ...theme('spacing'),
            ...utils_1.getPercentage(),
            screen: '100vw'
        })),
        minHeight: ((theme) => ({
            ...theme('spacing'),
            ...utils_1.getPercentage(),
            screen: '100vh'
        })),
    },
    /**
     * 自定义 theme 中的变体顺序
     * @link https://www.tailwindcss.cn/docs/configuration#variant-order
     */
    variants: {
        extend: {}
    },
    plugins: [],
};
