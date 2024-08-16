// import all necessary packages
import Registry from "../registry";
import { Command } from "../command";

// mock command
class MockCommand extends Command {
  executed = false;

  constructor() {
    super();
  }

  run<T>(): T {
    this.executed = true;
    return {} as T;
  }
}

describe("Registry Class", () => {
  let registry: Registry;
  let mockCommand: MockCommand;

  beforeEach(() => {
    registry = new Registry();
    mockCommand = new MockCommand();
  });

  it("should register command", () => {
    registry.register("command1", mockCommand);
    expect(registry.getCommand("command1")).toBe(mockCommand);
  });

  it("should return undefined for non-registered commands", () => {
    expect(registry.getCommand("nonExistentCommand")).toBeUndefined();
  });

  it("should execute registered commands", () => {
    registry.register("command1", mockCommand);

    registry.execute("command1");
    expect(mockCommand.executed).toBe(true);
  });

  it("should not execute non-registered commands", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();

    registry.execute("nonExistentCommand");
    expect(consoleSpy).toHaveBeenCalledWith(
      'Command "nonExistentCommand" not found.',
    );

    consoleSpy.mockRestore();
  });
});
