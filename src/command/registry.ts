import { Command } from "./command";

class Registry {
  private commands: Map<string, Command>;

  constructor() {
    this.commands = new Map<string, Command>();
  }

  register(name: string, command: Command): void {
    this.commands.set(name, command);
  }

  getCommand(name: string): Command | undefined {
    return this.commands.get(name);
  }

  execute(name: string): void {
    const command = this.getCommand(name);
    if (command) {
      command.run();
    } else {
      console.log(`Command "${name}" not found.`);
    }
  }
}

export default Registry;
