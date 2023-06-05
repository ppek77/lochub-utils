import AccessToken from "../model/AccessToken";

export default class LocHubApiClient {

    private accessToken = '';
    private tokenExpiresAt = new Date();

    constructor(
        private baseUrl: string,
        private username: string,
        private password: string
    ) {}

    async refreshAccessToken() {
        const token = await this.getAccessToken();
        this.accessToken = token.accessToken;
        this.tokenExpiresAt = new Date(Date.now() + token.expiresIn);
    }

    private async getAccessToken(): Promise<AccessToken> {
        const request = this.prepareOauthRequest();
    }

    private prepareOauthRequest()
    {
        return {
            method: 'POST',
            url: this.baseUrl + "/oauth/token",
            form: {
                grant_type: "password",
                client_id: "app",
                username: this.username,
                password: this.password
            },
            json: true
        };
    }
}
