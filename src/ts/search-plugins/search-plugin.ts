import { SearchResultItem } from "../search-result-item";

export interface SearchPlugin {
    getAllItems(): Promise<SearchResultItem[]>;
}
