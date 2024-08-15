import * as console from "node:console";

type BotParams = {
  commandTokens: string[];
};

export class Bot {
  public commandTokens: string[];

  constructor({ commandTokens }: BotParams) {
    this.commandTokens = commandTokens;
  }
  readMessage(message: string): void {
    // TODO: inject the Command class to deal with commands stuff
    // TODO: introduce dependency injection
    // TODO: review dependency schema
    if (this.hasCommandToken(message)) {
      const commandName = message.replace(
        new RegExp(`^(${this.commandTokens.join("|")})`),
        "",
      );
      this.executeCommand(commandName);
    }
  }

  executeCommand(command: string): void {}

  hasCommandToken(message: string): boolean {
    return this.commandTokens.some((token) => message.startsWith(token));
  }
}
