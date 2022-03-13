---
name: render/overlay
category: 'vue-utils'
---

## renderInstance

渲染当前实例到指定容器中

```typescript
import Component from 'xxx.vue'
const { vanish } = renderInstance(
  // 渲染的组件
  Component,
  // 组件可传入 props
  { title: 'xxx' },
  {
    // 挂载在那个节点
    root: document.body,
    // 包装层 setup, 可用于注入些东西
    setup: () => provide('zzz', 'xxx')
  }
)

// 销毁组件实例
vanish()
```

## createImperativeOverlay

创建命令式弹出层 Api

```tsx
const props = {
  title: String
}
const Component = defineComponent({
  props,
  setup: (props) => {
    // 获取弹出层元信息与方法
    const { visible, resolve } = useOverlayMeta()
    return () =>
    // 此处可以包装弹出层组件, 类似于 el-drawer / el-dialog 等
    // 也可以完全自定义一个弹出层
    // 点击 resolve 则自动将值返回, 且销毁模态框
    <div v-show={visible.value}>
      <div>title: {props.title}</div>
      <div  onClick={() => resolve('xxx')}>点我确认关闭</div>
    </div>
  }
})

// 创建弹出层, animation 是用于弹出层关闭时持续的动画事件
// ts 可传入两个泛型, Props 和 Result
const MyOverlay = createImperativeOverlay<typeof props, string>(Component, { animation: 300 })
```