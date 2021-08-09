<template>
  <div>
    <!-- 命令工具 start -->
    <input v-focus />
    <input v-permission="['user']" />
    <!-- 命令工具 start -->

    <!-- 不属于 tailwind 的变体命令 start -->
    <!-- width: 100px; height: 100px; -->
    <div v-size="100" />
    <!-- font-weight: 100px; -->
    <div v-font:weight="100" />
    <!-- font-size: 100px; -->
    <div v-font:size="100" />
    <!-- font-size: 100px; line-height: 52px; -->
    <div v-font:size="[100, 52]" />
    <!-- color: red; -->
    <div v-color:red />
    <!-- color: red|#fff; -->
    <div v-color="true ? 'red' : '#fff'" />
    <!-- 不属于 tailwind 的变体命令 end -->

    <!-- 属于 tailwind 的变体命令 start -->
    <div v-w="100" />
    <div v-h="100" />
    <div v-min-w="100" />
    <div v-min-h="100" />
    <div v-bg:red />
    <div v-bg:#000 />
    <!-- .......以及关于数值的所有变体 -->
    <!-- 属于 tailwind 的变体命令 end -->
  </div>
</template>
