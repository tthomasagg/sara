type CommandTokenType = string[];

export class Message {
  message: string;
  commandTokens: CommandTokenType;

  constructor(message: string, commandTokens: CommandTokenType) {
    this.message = message;
    this.commandTokens = commandTokens;
  }

  messageIncludesCommandToken(): boolean {
    return !!this.commandTokens?.some((token) =>
      this.message?.startsWith(token),
    );
  }

  extractCommandName(): string {
    return this.message.replace(
      new RegExp(`^(${this.commandTokens.join("|")})`),
      "",
    );
  }
}
