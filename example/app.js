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