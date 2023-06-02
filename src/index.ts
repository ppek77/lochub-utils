import yargs from 'yargs/yargs';

const argv = yargs(process.argv.slice(2)).options({
    lochub: { type: 'string', demandOption: true, choices: ['dev', 'demo', 'humana'] },
    action: { type: 'string', demandOption: true, choices: ['create-test-job', 'deliver-job'] },
    projectId: { type: 'string', demandOption: false },
    jobId: { type: 'string', demandOption: false }
}).argv;
