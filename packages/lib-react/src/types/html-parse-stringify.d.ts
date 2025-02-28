declare module 'html-parse-stringify' {
  export type Token =
    { type: 'text', content: string } |
    { type: 'tag', name: string, attrs: Record<string, string>, children: Token[], voidElement: boolean }
  export function parse(text: string): Token[]
}
