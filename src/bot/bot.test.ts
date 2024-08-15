import { expect, jest } from "@jest/globals";
import { Bot } from "./bot";

describe("bot", () => {
  const commandTokens = ["/", "."];
  const bot = new Bot({
    commandTokens,
  });
  it("should execute command", () => {
    const executeCommandSpy = jest.spyOn(bot, "executeCommand");

    bot.readMessage(`${commandTokens[0]}command`);

    expect(executeCommandSpy).toHaveBeenCalled();
  });

  it("should detect command tokens", () => {
    expect(bot.hasCommandToken("!command")).toBe(false);
    expect(bot.hasCommandToken("command!")).toBe(false);
    expect(bot.hasCommandToken(`${commandTokens[0]}command`)).toBe(true);
    expect(bot.hasCommandToken(`${commandTokens[1]}command`)).toBe(true);
  });

  it("should call the right command", () => {
    const executeCommandSpy = jest.spyOn(bot, "executeCommand");

    bot.readMessage(`${commandTokens[0]}command`);

    expect(executeCommandSpy).toHaveBeenCalledWith("command");
  });
});
