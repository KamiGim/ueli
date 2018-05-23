import { WindowHelpers } from "../../../ts/helpers/winow-helpers";

describe(WindowHelpers.name, (): void => {
    describe(WindowHelpers.calculateWindowHeight.name, (): void => {
        it("should calculate window height correctly when search result count is 0", (): void => {
            const searchResultCount = 0;
            const maxSearchResultCount = 10;
            const userInputHeight = 40;
            const searchResultHeight = 50;

            const actual = WindowHelpers.calculateWindowHeight(searchResultCount, maxSearchResultCount, userInputHeight, searchResultHeight, 0);
            expect(actual).toBe(userInputHeight);
        });

        it("should calculate window height correctly when search result count is more than 0 and less than max search result count", (): void => {
            const searchResultCount = 5;
            const maxSearchResultCount = 10;
            const userInputHeight = 40;
            const searchResultHeight = 50;

            const actual = WindowHelpers.calculateWindowHeight(searchResultCount, maxSearchResultCount, userInputHeight, searchResultHeight, 0);
            expect(actual).toBe(userInputHeight + (searchResultCount * searchResultHeight));
        });

        it("should calculate window height correctly when search result count is more than max search result count", (): void => {
            const searchResultCount = 15;
            const maxSearchResultCount = 10;
            const userInputHeight = 40;
            const searchResultHeight = 50;

            const actual = WindowHelpers.calculateWindowHeight(searchResultCount, maxSearchResultCount, userInputHeight, searchResultHeight, 0);
            expect(actual).toBe(userInputHeight + (maxSearchResultCount * searchResultHeight));
        });

        it("should calculate window height correctly when music player is up and there's no search result", (): void => {
            const searchResultCount = 0;
            const maxSearchResultCount = 10;
            const userInputHeight = 40;
            const searchResultHeight = 50;
            const musicPlayerHeight = 300;

            const actual = WindowHelpers.calculateWindowHeight(searchResultCount, maxSearchResultCount, userInputHeight, searchResultHeight, musicPlayerHeight);
            expect(actual).toBe(userInputHeight + musicPlayerHeight + (searchResultCount * searchResultHeight));
        });
    });
});
