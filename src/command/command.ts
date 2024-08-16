import { Message } from "../message/message";

export abstract class Command {
  // private _commandTokens: string[] | null;
  private _message: Message | null; // TODO: refactor to its own class

  protected constructor() {
    // this._commandTokens = null;
    this._message = null;
  }

  set message(value: Message) {
    this._message = value;
  }

  get message(): Message | null {
    return this._message;
  }

  // get commandTokens(): string[] | null {
  //   return this._commandTokens;
  // }

  // set commandTokens(value: string[] | null) {
  //   this._commandTokens = value;
  // }

  abstract run<T, P>(params?: P): T;
}
