import { query } from "@anthropic-ai/claude-agent-sdk";

console.log("Running with anthropic key:", process.env.ANTHROPIC_API_KEY)

for await (const message of query({ prompt: "hi there" })) {
  console.log(message);
}

console.log("done")
