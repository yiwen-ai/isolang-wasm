# isolang-wasm
> A WebAssembly module base on https://github.com/humenda/isolang-rs

## Usage
https://github.com/yiwen-ai/isolang-wasm/blob/main/example/index.html

```js
let all = ISOLanguage.all();
console.log(all);

let lang = ISOLanguage.from_str('zho');
console.log(lang.to_name());
console.log(lang.to_autonym());
console.log(lang.to_639_3());

let lang = ISOLanguage.from_str(all[0]);
console.log(lang.to_name());
console.log(lang.to_autonym());
console.log(lang.to_639_3());
```

## Webpack-specific
https://rustwasm.github.io/docs/wasm-bindgen/examples/hello-world.html