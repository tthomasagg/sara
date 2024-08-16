import { Command } from "./command";

export class HelloCommand extends Command {
  constructor() {
    super();
  }

  run<T, P>(params: P): T {
    return "olleH!" as T;
  }
}
