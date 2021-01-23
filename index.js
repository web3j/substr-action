const core = require('@actions/core');
const github = require('@actions/github');

try {
  const value = core.getInput('value');
  const start = core.getInput('start');
  const end = core.getInput('end');

  if (end == null || end.length == 0) {
      end = value.length
  }

  console.log(`Substring '${value}' from ${start} to ${end}`);

  const result = value.substring(start, end)
  core.setOutput("result", result);

  console.log(`Substring result: ${result}`);
  
} catch (error) {
  core.setFailed(error.message);
}
