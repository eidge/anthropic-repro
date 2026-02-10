# anthropic-repro

Reproducing agent-sdk failing to find claude code executable after being built.

Reproduction steps:

- Make sure bun is installed in the system
- `bun run build:all` - build the binary
- `docker compose run --rm --build app` - run the binary in linux, where claude code is not installed

The binary should throw an error as no Anthropic API key is set (same problem occurs even if key is set), instead it throws an error trying to find claude code:

```
5122 |       let t1 = JV(H), t6 = t1 ? H : W, a6 = t1 ? [...J, ...m] : [...J, H, ...m], H4 = { command: t6, args: a6, cwd: Y, env: B, signal: this.abortController.signal };
5123 |       if (this.options.spawnClaudeCodeProcess)
5124 |         N1(`Spawning Claude Code (custom): ${t6} ${a6.join(" ")}`), this.process = this.options.spawnClaudeCodeProcess(H4);
5125 |       else {
5126 |         if (!n0().existsSync(H)) {
5127 |           throw ReferenceError(S1);
                                     ^
ReferenceError: Claude Code executable not found at /$bunfs/root/cli.js. Is options.pathToClaudeCodeExecutable set?
      at initialize (/$bunfs/root/anthropic-repro-linux-arm64:5127:31)
      at new e6 (/$bunfs/root/anthropic-repro-linux-arm64:5010:70)
      at Qx (/$bunfs/root/anthropic-repro-linux-arm64:10265:12)
      at /$bunfs/root/anthropic-repro-linux-arm64:10275:31

```

The same thing happens when we build a binary for macos and attempt to use it on another macos machine without claude code installed.
