import { WebSearch } from "./web-search";
import { CustomCommand } from "./custom-command";

export interface ConfigOptions {
    applicationFileExtensions: string[];
    applicationFolders: string[];
    autoStartApp: boolean;
    colorTheme: string;
    customCommands: CustomCommand[];
    maxSearchResultCount: number;
    musicPlayerHeight: number;
    musicPlayerType: string;
    musicPlayerWebSocketPort: number;
    musicPlayerLocalName: string;
    rescanInterval: number;
    searchEngineThreshold: number;
    searchOperatingSystemSettings: boolean;
    searchResultExecutionArgumentFontSize: number;
    searchResultHeight: number;
    searchResultNameFontSize: number;
    userInputHeight: number;
    userInputFontSize: number;
    webSearches: WebSearch[];
    windowWith: number;
}
