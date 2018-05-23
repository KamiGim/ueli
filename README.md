![ueli logo](img/doc/readme-header.png)

# ueli

This is an alt+space launcher for Windows and macOS.

![musicplayer](https://i.imgur.com/1pxCNYB.png)

![ueli screenshot](img/doc/ueli-example.jpg)

## Table of contents

* [Installation](#installation)
* [Quick tutorial](#quick-tutorial)
* [Features](#features)
* [Customization](#customization)
* [Roadmap](#roadmap)
* [Development](#development)
* [Alternatives](#alternatives)
* [License](#license)

## Installation

### Installer / Zip

> Note: because the executables are not signed Windows will probably prevent you from executing the installer or the program itself. You can click "Run anyway" to install/run the program.

* Download the latest version [here](https://github.com/oliverschwendener/ueli/releases)
* Run the installer or unzip
* Run the application

## Quick tutorial

* Press `alt+space` to show/hide the window
* Start typing a program name
* Press Enter to launch the program

## Features

### Program search

![Feature Program search](img/doc/features/ueli-feature-program-search.png)

* You can search for installed programs
* Use the arrow keys to scroll up and down
* Presss Enter to launch the selected program

### Files and folder search

![Feature home folder](img/doc/features/ueli-feature-home-folder.png)

* You can search files and folders in your home folder
* Press Enter to open the selected file/folder

### Open URLs with your default web browser

![Feature URL](img/doc/features/ueli-feature-url.png)

* Type in a URL
* Press enter to open the URL with your default web browser

### Open default mail program

* Type in a email address
* Press enter to open your default mail program with an empty email to the specified email address

![Feature email](img/doc/features/ueli-feature-email.png)

### Web search engines

![Feature web search engines](img/doc/features/ueli-feature-web-search.png)

* You can [customize](#customization) web search engines like this:

``` json
"webSearches": [
    {
        "icon": "<svg>...</svg>",
        "name": "Google",
        "prefix": "g",
        "url": "https://google.com/search?q="
    }
]
```

Now you can type in `g?{your search term}` to launch the web search engine in your default browser.

Default web search engines:

|Prefix|Web Search Engine|
|---|---|
|`d`|[DuckDuckGo](https://duckduckgo.com)|
|`g`|[Google](https://google.com)|
|`gi`|[Google Images](https://images.google.com)|
|`l`|[Linguee](https://www.linguee.de)|
|`w`|[Wikipedia](https://wikipedia.org)|
|`yt`|[YouTube](https://youtube.com)|

### Execute commandline tools

![Feature commandline](img/doc/features/ueli-feature-commandline.png)

* Start a commandline tool with the `>` prefix
    * Example: `>ipconfig /all`
* Stop an executing commandline tool with `Ctrl+c`

> Note: you can **not** interact with the commandline tool. You only see the output.

### Browse file system

![Feature file browser](img/doc/features/ueli-feature-file-browser.png)

* You can browse your file system by typing in a filepath
    * Example: `C:\Users` or `/Applications`
* Press `Enter` to open the file or folder
* Press `Tab` for autocompletion

### Calculator

![Feature calculator](img/doc/features/ueli-feature-calculator.png)

* Calculate simple math, matrix, symbolic function, convert unit and a lot more.
   * Example: 
      * `23 * 24 / 2 + (6 * 7) ^ 2`
      * `1 km/h to mile/h`
      * `a = [1, 2, 3]; a * 2`

### Custom commands

![Feature custom commands](img/doc/features/ueli-feature-custom-commands.png)

* You can [customize](#customization) custom commands to
    * Start command line tools
    * Open files/folders
    * Launch programs

``` json
"customCommands": [
    {
        "name": "ping",
        "executionArgument": "start ping 8.8.8.8 -t",
        "icon": "<svg>...</svg>"
    },
    {
        "name": "Data",
        "executionArgument": "start \"\" \"C:\\Data\""
    },
    {
        "name": "code",
        "executionArgument": "start \"\" \"C:\\My-Programs\\Visual Studio Code\\Visual Studio Code.lnk\""
    },
]
```

### Keyboard shortcuts

|Keyboard shortcut|Description|
|---|---|
|`Ctrl+o`|Open the selected program or file at it's location|
|`ArrowUp`|Scroll up|
|`ArrowDown`|Scroll down|
|`F6`, `Ctrl+l`|Set focus on user input|
|`F1`|Get help|

### Updater

To check if a new version is available right click on the tray icon. The first item in the context menu shows you if there is an update available or if you are running the latest version. If there is an update available click on "Download and install update".

![Updater](img/doc/ueli-updater.png)

## Customization

All settings are stored in `~/ueli.config.json`. You can modify this file to change the default values.

### Options

* `applicationFileExtensions` Array of string - Represents the file extensions which are used to find applications in the specified folders
* `applicationFolders` Array of string - Represents the folders which are scanned for applications
* `autoStartApp` Boolean - If the app should be started automatically when you log in
* `colorTheme` String - Defines the [color theme](#color-themes).
* `customCommands` Arraay of customCommand objects - A list of [custom commands](#custom-commands)
    * `executionArgument` String - Represents the execution argument for the custom command
    * `name` String - Represents the displayed name for the custom command
    * `icon` String - (Optional) Represents the svg icon for the custom command. If no icon is set default icon is used.
* `maxSearchResultCount` Number - Maximum number of search results to be displayed
* `rescanInterval` Number - Interval in seconds to rescan the application folders
* `searchOperatingSystemSettings` Boolean - If operting system settings and commands should appear in the search results
* `searchResultExecutionArgumentFontSize` Number - Represents the font size of the search result execution argument in pixels
* `searchResultHeight` Number - Represents the height of a search result box in pixels
* `searchResultNameFontSize` Number - Represents the font size of the search result name in pixels
* `userInputFontSize` Number - Represents the font size of the user input in pixels
* `userInputHeight` Number - Represents the height of the user input box in pixels
* `webSearches` Array of webSearch Objects - A list of [web search engines](#web-search-engines)
    * `webSearch` Object - Defines a web search engine
        * `icon` String - Represents the svg icon for the specific web search engine
        * `name` String - Represents the name of the web search engine
        * `prefix` String - Represents the prefix for your web search engine. For example if the prefix is `g` you can type in `g?{your search term}` to search
        * `url` String - Represents the url for the search engine to which the search term is appended to. For example `https://google.com/search?q=`
* `windowWith`: Number - Represents the width of the main window in pixels

### Color themes

![Color themes](/img/doc/color-themes.png)

* `atom-one-dark`
* `dark`
* `dark-mono`
* `light`
* `light-mono`

## Roadmap

* List frequently executed programs/files/settings higher
* Add option to add custom shortcuts
* Add input history browsing
* Add nice GUI to modifiy configuration
* Notify user when update is available
* Use vue components

## Development

### Build status

|Platform|Build status|
|---|---|
|Windows|[![Build status](https://ci.appveyor.com/api/projects/status/c208tgdb97rrx9i3?svg=true)](https://ci.appveyor.com/project/oliverschwendener/ueli)|
|macOS|![Build status](https://travis-ci.org/oliverschwendener/ueli.svg?branch=migration-to-typescript)|

### Code coverage

[![Coverage Status](https://coveralls.io/repos/github/oliverschwendener/ueli/badge.svg?branch=master)](https://coveralls.io/github/oliverschwendener/ueli?branch=master)

### Requirements

* Git
* Node.js
* Yarn

### Setup

```
$ git clone https://github.com/oliverschwendener/ueli
$ cd ueli
$ yarn
```

### Run

```
$ yarn build
$ yarn start
```

> Note: there is also a watch task `$ yarn build:watch` which watches the stylesheets and typescript files and transpiles them automatically if there are any changes.

### Debug

> Note: for debugging you need Visual Studio Code

Choose one of these debug configurations:

![Debug configurations](img/doc/debug-configurations.png)

### Run tests

```
$ yarn test:unit
$ yarn test:integration
```

### Code coverage

```
$ yarn test:unit --coverage
```

### Package

```
$ yarn package
```

## Alternatives

* [Launchy](https://www.launchy.net/)
* [Wox](https://github.com/Wox-launcher/Wox)
* [Alfred](https://www.alfredapp.com/)
* [Hain](https://github.com/hainproject/hain)
* [Zazu App](http://zazuapp.org/)
* [Cerebro](https://cerebroapp.com/)

## License

Copyright (c) Oliver Schwendener. All rights reserved.

Licensed under the [MIT](LICENSE) License.
