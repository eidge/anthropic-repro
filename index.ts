import { query } from "@anthropic-ai/claude-agent-sdk";

for await (const message of query({ prompt: "hi there" })) {
  if (message.type === "result") {
    console.log(message.result);
  }
}
