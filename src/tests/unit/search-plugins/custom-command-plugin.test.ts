import { CustomCommandsPlugin } from "../../../ts/search-plugins/custom-commands-plugin";
import { CustomCommand } from "../../../ts/custom-command";
import { UeliHelpers } from "../../../ts/helpers/ueli-helpers";
import { Icons } from "../../../ts/icon-manager/icon-manager";

describe(CustomCommandsPlugin.name, (): void => {
    describe("getAllItems", (): void => {
        it("should prefix the execution argument ", (): void => {
            const customCommands = [
                {
                    executionArgument: "execution-argument",
                    name: "Custom Shortcut 1",
                },
                {
                    executionArgument: "execution-argument-2",
                    name: "Custom Shortcut 2",
                },
            ] as CustomCommand[];

            const plugin = new CustomCommandsPlugin(customCommands);

            plugin.getAllItems()
                .then((actual) => {
                    for (const item of actual) {
                        const customCommand = customCommands.filter((c: CustomCommand): boolean => {
                            return c.name === item.name;
                        })[0];

                        expect(customCommand).not.toBe(undefined);
                        expect(item.executionArgument).toBe(`${UeliHelpers.customCommandPrefix}${customCommand.executionArgument}`);
                    }
                });
        });

        it("should set the deafult icon if no icon is specified", (): void => {
            const customCommands = [
                {
                    executionArgument: "execution-argument",
                    name: "Custom Shortcut 1",
                },
                {
                    executionArgument: "execution-argument-2",
                    name: "Custom Shortcut 2",
                },
            ] as CustomCommand[];

            const plugin = new CustomCommandsPlugin(customCommands);

            plugin.getAllItems()
                .then((actual) => {
                    for (const item of actual) {
                        const customCommand = customCommands.filter((c: CustomCommand): boolean => {
                            return c.name === item.name;
                        })[0];

                        expect(customCommand).not.toBe(undefined);
                        expect(item.icon).toBe(Icons.CUSTOMSHORTCUT);
                    }
                });
        });

        it("should set the given icon if it is specified", (): void => {
            const customCommands = [
                {
                    executionArgument: "execution-argument",
                    icon: "another icon",
                    name: "Custom Shortcut 1",
                },
                {
                    executionArgument: "execution-argument-2",
                    icon: "another icon 2",
                    name: "Custom Shortcut 2",
                },
            ] as CustomCommand[];

            const plugin = new CustomCommandsPlugin(customCommands);

            plugin.getAllItems()
                .then((actual) => {
                    for (const item of actual) {
                        const customCommand = customCommands.filter((c: CustomCommand): boolean => {
                            return c.name === item.name;
                        })[0];

                        expect(customCommand).not.toBe(undefined);
                        expect(item.icon).toBe(customCommand.icon);
                    }
                });
        });
    });
});
