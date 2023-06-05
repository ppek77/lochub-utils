import LocHubApiClient from "../services/LocHubClient";

export default class LocHubUtils {
    constructor() {
        throw Error('It is not allowed to instantiate this class');
    }

    static async createOneHumanaLikeTestingJob(client: LocHubApiClient, projectId: string): Promise<void> {
        console.log("Not implemented yet");
    }
}
