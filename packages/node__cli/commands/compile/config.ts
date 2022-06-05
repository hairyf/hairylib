const config = {
  input: '.',
  mode: 'development',
  output: 'dist',
  type: false,
  meta: false,
  logger: false,
  ignore: [] as string[],
  globalName: '',
  esllpkg: false,
  pmode: ['cjs', 'esm', 'iife', 'iife-minify'] as const
}

export default config
