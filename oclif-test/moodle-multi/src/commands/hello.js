const {Command, flags} = require('@oclif/command')

class HelloCommand extends Command {
  static args = [
    {name: 'firstArg'},
    {name: 'secondArg'},
    {name: 'thirdArg'}
  ]

  async run() {
    const {flags, args, argv,metadata,raw} = this.parse(HelloCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from .\\src\\commands\\hello.js`)
    this.log(args.firstArg)
    this.log(args.secondArg)
    this.log(args.thirdArg)
    this.log()
    this.log(argv)
    this.log(metadata)
    this.log(argv[1])

    //this.error(argv.toString())
    //this.warn(metadata.flags)
    //this.warn(raw.toString())
  }
}


HelloCommand.description = `Describe the command here
...
Extra documentation goes here
`

HelloCommand.aliases

HelloCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = HelloCommand
