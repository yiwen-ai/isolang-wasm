import assert from 'node:assert/strict';
import { ISOLang } from "isolang-wasm";

let all = ISOLang.all();
console.log(all);

let lang = ISOLang.from_str('zho');
console.log(lang.to_name());    // Chinese
console.log(lang.to_autonym()); // 中文
console.log(lang.to_639_3());   // zho

let lang2 = ISOLang.from_str(all[0]);
console.log(lang2.to_name());    // Afar
console.log(lang2.to_autonym()); // Qafar
console.log(lang2.to_639_3());   // aar

assert.equal(ISOLang.from_str("zh").to_name(), "Chinese");
assert.equal(ISOLang.from_str("Zho").to_name(), "Chinese");
assert.equal(ISOLang.from_str("Chinese").to_name(), "Chinese");
assert.equal(ISOLang.from_str("chinese").to_name(), "Chinese");
assert.equal(ISOLang.from_str("中文").to_name(), "Chinese");
