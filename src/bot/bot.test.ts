import { expect, jest } from "@jest/globals";
import { Bot } from "./bot";
import { HelloCommand } from "../command/hello";
import Registry from "../command/registry";
import { Message } from "../message/message";

jest.mock("../command/hello");

describe("bot", () => {
  const commandTokens = ["/", "."];
  const commandRegistry = new Registry();
  const helloCommand = new HelloCommand();
  commandRegistry.register("hello", helloCommand);
  const bot = new Bot({
    commandRegistry,
  });
  const message = new Message("heelp", commandTokens);

  it("should execute command", () => {
    const executeCommandSpy = jest.spyOn(bot, "executeCommand");

    message.message = `${commandTokens[0]}command`;
    bot.readMessage(message);

    expect(executeCommandSpy).toHaveBeenCalled();
  });

  it("should call the right command", () => {
    const executeCommandSpy = jest.spyOn(bot, "executeCommand");

    message.message = `${commandTokens[0]}command`;
    bot.readMessage(message);

    expect(executeCommandSpy).toHaveBeenCalledWith("command");
  });

  it("should call hellp command", () => {
    const HelloCommandMock = HelloCommand as jest.Mock;

    message.message = `${commandTokens[0]}hello`;
    bot.readMessage(message);

    expect(HelloCommandMock).toHaveBeenCalled();
  });
});
