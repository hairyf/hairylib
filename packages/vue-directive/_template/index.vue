<template>
  <div>
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
    <div v-max-w="100" />
    <div v-max-h="100" />
    <div v-max-h="100" />
    <div v-inset="-100" />
    <div v-inset="100" />
    <div v-inset-x="100" />
    <div v-inset-y="100" />
    <div v-top="100" />
    <div v-bottom="100" />
    <div v-right="100" />
    <div v-left="100" />
    <div v-bg:red />
    <div v-bg="'red'" />
    <div v-m="5" />
    <div v-ml="5" />
    <div v-mr="5" />
    <div v-mt="5" />
    <div v-mb="5" />
    <div v-mx="5" />
    <div v-my="5" />
    <div v-p="5" />
    <div v-pl="5" />
    <div v-pr="5" />
    <div v-pt="5" />
    <div v-pb="5" />
    <div v-px="5" />
    <div v-py="5" />
    <!-- 属于 tailwind 的变体命令 end -->
  </div>
</template>
