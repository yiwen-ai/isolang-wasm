# options
ignore_output = &> /dev/null

.PHONY: build test lint fix

# https://rustwasm.github.io/docs/wasm-bindgen/reference/deployment.html
build:
	@rm -rf pkg
	@wasm-pack build --target bundler

test:
	@cargo test -- --nocapture

lint:
	@cargo clippy --all-targets --all-features --tests

fix:
	@cargo clippy --fix --tests
