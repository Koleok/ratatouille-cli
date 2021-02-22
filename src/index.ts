import ratatouille from '@koleok/ratatouille'
import { format } from 'prettier'
import { Command, flags } from '@oclif/command'

import toMarkdown from './toMarkdown'

class RatatouilleCli extends Command {
  static description = 'scrape an allrecipies.com recipie'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: 'v' }),

    help: flags.help({ char: 'h' }),

    // flag with a value (-m, --markdown=VALUE)
    markdown: flags.boolean({
      char: 'm',
      description: 'output recipie parsed to simple markdown',
    }),

    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
  }

  static args = [{ name: 'url' }]

  async run() {
    const { args, flags } = this.parse(RatatouilleCli)

    const url = /^[0-9]*$/.test(args.url)
      ? // if a recipie id was passed try it assuming it is valid
        `https://www.allrecipes.com/recipe/${args.url}`
      : args.url

    ratatouille(url)
      .then(res =>
        flags.markdown ? format(toMarkdown(res), { parser: 'markdown' }) : res
      )
      .then(console.log)
  }
}

export = RatatouilleCli
