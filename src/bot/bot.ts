import Registry from "../command/registry";
import { Message } from "../message/message";

type BotParams = {
  commandRegistry: Registry;
};

export class Bot {
  private commandRegistry: Registry;

  constructor({ commandRegistry }: BotParams) {
    this.commandRegistry = commandRegistry;
  }
  readMessage(message: Message): void {
    if (message.messageIncludesCommandToken()) {
      const commandName = message.extractCommandName();
      this.executeCommand(commandName);
    }
  }

  executeCommand(command: string): void {
    let comm;
    try {
      const commandName = command.charAt(0).toUpperCase() + command.slice(1);
      const commandObj = this.commandRegistry.getCommand(commandName);
      commandObj?.run();
    } catch (e) {}
  }
}
