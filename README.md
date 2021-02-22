# ratatouille-cli

CLI for ratatouille nodejs all recipies scraper

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/ratatouille-cli.svg)](https://npmjs.org/package/ratatouille-cli)
[![Downloads/week](https://img.shields.io/npm/dw/ratatouille-cli.svg)](https://npmjs.org/package/ratatouille-cli)
[![License](https://img.shields.io/npm/l/ratatouille-cli.svg)](https://github.com/Koleok/ratatouille-cli/blob/master/package.json)

<!-- toc -->

- [ratatouille-cli](#ratatouille-cli)
- [Usage](#usage)
- [Commands](#commands)
  - [`rat help [COMMAND]`](#rat-help-command)
  - [`rat update [CHANNEL]`](#rat-update-channel)
  <!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g ratatouille-cli

USAGE
  $ rat [URL]

OPTIONS
  -f, --force
  -h, --help      show CLI help
  -m, --markdown  output recipie parsed to simple markdown
  -v, --version   show CLI version
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`rat help [COMMAND]`](#rat-help-command)
- [`rat update [CHANNEL]`](#rat-update-channel)

## `rat help [COMMAND]`

display help for rat

```
USAGE
  $ rat help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `rat update [CHANNEL]`

update the rat CLI

```
USAGE
  $ rat update [CHANNEL]
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v1.3.10/src/commands/update.ts)_

<!-- commandsstop -->
