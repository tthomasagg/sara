import { HelloCommand } from "../hello";
import { Command } from "../command";

describe("HelloCommand", () => {
  let helloCommand: HelloCommand;

  beforeEach(() => {
    helloCommand = new HelloCommand();
  });

  test("should be an instance of Command", () => {
    expect(helloCommand).toBeInstanceOf(Command);
  });

  test("run() method should return 'olleH!'", () => {
    const result: string = helloCommand.run({});
    expect(result).toBe("olleH!");
  });
});
