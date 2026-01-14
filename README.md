> ⚠ This package is primarily intended for personal use. 

# vt-vue-primitive-tags
基本タグを拡張する vueコンポーネントを管理。現状は`<Va>`のみ。

## Va
Inertia利用前提のaタグ拡張
a と Link のラッパー
```vue
<Va href="***">link</Va>
```
hrefが内部リンク（同じドメインのページ遷移）の場合は Inertiaの `<Link>` として、それ以外は通常の `<a>` タグとして機能する。



