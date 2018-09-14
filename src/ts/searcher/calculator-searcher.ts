import { Searcher } from "./searcher";
import { Icons } from "../icon-manager/icon-manager";
import { SearchResultItem } from "../search-result-item";
import * as math from "mathjs";

export class CalculatorSearcher implements Searcher {
    public readonly needSort = false;
    public readonly shouldIsolate = true;

    public async getSearchResult(userInput: string): Promise<SearchResultItem[]> {
        const result = math.eval(userInput);
        let resultString: string = result.toString();

        if (resultString === "[object Object]") {
            resultString = JSON.stringify(result);
        }

        resultString = resultString.replace(/\^(\d+)/g, (_, num: string) => num.sup());

        return [
            {
                executionArgument: resultString,
                icon: Icons.CALCULATOR,
                hideDescription: true,
                name: `= ${resultString}`,
            } as SearchResultItem,
        ];
    }
}
