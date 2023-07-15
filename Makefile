# options
ignore_output = &> /dev/null

.PHONY: build test lint fix

# https://rustwasm.github.io/docs/wasm-bindgen/reference/deployment.html
build:
	@wasm-pack build --target web

test:
	@cargo test -- --nocapture

lint:
	@cargo clippy --all-targets --all-features --tests

fix:
	@cargo clippy --fix --tests
