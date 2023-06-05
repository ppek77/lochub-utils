import yargs from 'yargs/yargs';
import LocHubApiClient from './services/LocHubClient';
import LocHubUtils from './utils/LocHubUtils';

const args = yargs(process.argv.slice(2)).options({
    tenant: { type: 'string', demandOption: true },
    username: { type: 'string', demandOption: true },
    password: { type: 'string', demandOption: true },
    action: { type: 'string', demandOption: true, choices: ['create-test-job', 'deliver-job'] },
    projectId: { type: 'string', demandOption: false },
    jobId: { type: 'string', demandOption: false }
}).parseSync();

const baseUrl = `https://${args.tenant}.lochub.com`;
const client = new LocHubApiClient(baseUrl, args.username, args.password);

if (args.action === 'create-test-job') {
    const projectId = getProjectIdArg(args);
    LocHubUtils.createOneHumanaLikeTestingJob(client, projectId);
}

function getProjectIdArg(args: any): string {
    const id = args.projectId;

    if (id === undefined || id === null || id.length === 0) {
        console.log("Action create-test-job requires additional parameter projectId.");
        process.exit(1);
    }

    return id;
}