const exec = require('child_process').exec

const lintFiles = (config) => {
  exec('ls-lint', (error /*, stdout, stderr*/) => {
    if (error) {
      config.hasErrors = true
      const [_, ...errors] = error.message.split('\n')
      console.log(
        '\x1b[31m%s\x1b[0m',
        `ls-lint: ${config.errorMessage}`,
        '❗❗❗'
      )
      console.log(errors.join('\n'))
    } else if (config.hasErrors) {
      console.log(
        '\x1b[34m%s\x1b[0m',
        'ls-lint:',
        '\x1b[38m',
        config.successMessage
      )
      config.hasErrors = false
    }
  })
}

module.exports = () => {
  const config = {
    hasErrors: true,
    successMessage: 'All files are linted 👌',
    errorMessage: 'Errors in linting detected'
  }
  return {
    name: 'ls-lint-plugin',
    apply: 'serve',
    buildStart: () => lintFiles(config),
    handleHotUpdate: () => lintFiles(config)
  }
}
