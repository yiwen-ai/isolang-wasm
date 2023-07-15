use isolang::Language;
use std::str::FromStr;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct ISOLanguage {
    inner: Language,
}

#[wasm_bindgen]
impl ISOLanguage {
    pub fn all() -> JsValue {
        let out = js_sys::Array::new();
        for l in isolang::languages() {
            if let Some(name) = l.to_autonym() {
                out.push(&JsValue::from_str(name));
            }
        }
        out.into()
    }

    pub fn from_str(name: &str) -> Self {
        let lang = Language::from_str(&name.to_ascii_lowercase()).unwrap_or(Language::Und);
        ISOLanguage { inner: lang }
    }

    pub fn to_name(&self) -> String {
        self.inner.to_name().to_string()
    }

    pub fn to_autonym(&self) -> String {
        self.inner
            .to_autonym()
            .map_or("".to_string(), |s| s.to_string())
    }

    pub fn to_639_3(&self) -> String {
        self.inner.to_639_3().to_string()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn isolang_works() {
        let lang = ISOLanguage::from_str("zho");
        assert_eq!(lang.to_name(), "Chinese");
        assert_eq!(lang.to_autonym(), "中文");
        assert_eq!(lang.to_639_3(), "zho");

        assert_eq!(ISOLanguage::from_str("zh").to_name(), "Chinese");
        assert_eq!(ISOLanguage::from_str("Zho").to_name(), "Chinese");
        assert_eq!(ISOLanguage::from_str("Chinese").to_name(), "Chinese");
        assert_eq!(ISOLanguage::from_str("chinese").to_name(), "Chinese");
        assert_eq!(ISOLanguage::from_str("中文").to_name(), "Chinese");
    }
}
