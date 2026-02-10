FROM gcr.io/distroless/cc-debian12
COPY dist/anthropic-repro-linux-arm64 /dist/agent-sdk
ENTRYPOINT ["/dist/agent-sdk"]
