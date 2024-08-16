import { expect } from "@jest/globals";
import { Message } from "./message";

describe("Message tests", () => {
  const commandTokens = ["/", "."];
  it("should detect command tokens", () => {
    const message = new Message("!command", commandTokens);
    expect(message.messageIncludesCommandToken()).toBe(false);
    message.message = "command!";
    expect(message.messageIncludesCommandToken()).toBe(false);
    message.message = `${commandTokens[0]}command`;
    expect(message.messageIncludesCommandToken()).toBe(true);
    message.message = `${commandTokens[1]}command`;
    expect(message.messageIncludesCommandToken()).toBe(true);
  });
});
