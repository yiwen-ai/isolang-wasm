# isolang-wasm
> A WebAssembly module with ISO 639 language codes base on https://github.com/humenda/isolang-rs

## Usage
https://github.com/yiwen-ai/isolang-wasm/blob/main/example/app.js

`node --experimental-wasm-modules ./app.js`:
```js
const { ISOLang } = await import("isolang-wasm");

let all = ISOLang.all();
console.log(all);

let lang = ISOLang.from_str('zho');
console.log(lang.to_name());
console.log(lang.to_autonym());
console.log(lang.to_639_3());

let lang2 = ISOLang.from_str(all[0]);
console.log(lang2.to_name());
console.log(lang2.to_autonym());
console.log(lang2.to_639_3());
```

## Webpack-specific
https://rustwasm.github.io/docs/wasm-bindgen/examples/hello-world.html