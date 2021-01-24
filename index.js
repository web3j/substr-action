const core = require('@actions/core');
const github = require('@actions/github');

try {
  const value = core.getInput('value');
  const start = parseInt(core.getInput('start'));
  var length = core.getInput('length');

  var result;
  if (length == null || length.length == 0) {
    console.log(`Substring '${value}' from position ${start} to end`);
    result = value.substr(start);
  } else {
    console.log(`Substring '${value}' with ${length} chars from position ${start}`);
    result = value.substr(start, parseInt(length));
  }

  core.setOutput("result", result);
  console.log(`Substring result: ${result}`);
  
} catch (error) {
  core.setFailed(error.message);
}
