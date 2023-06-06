import rp = require('request-promise');

import AccessToken from "../model/AccessToken";
import { exit } from 'process';


export default class LocHubApiClient {

    private accessToken = '';
    private tokenExpiresAt = new Date();

    constructor(
        private baseUrl: string,
        private username: string,
        private password: string
    ) {}

    private async refreshAccessTokenIfNecessary(): Promise<void> {
        if (new Date() < this.tokenExpiresAt)
            return;

        const token = await this.getAccessToken();
        this.accessToken = token.accessToken;
        this.tokenExpiresAt = new Date(Date.now() + (token.expiresIn - 60) * 1000);
        console.log(`Successfully authenticated with LocHub ${this.baseUrl}, token valid till ${this.tokenExpiresAt.toISOString()}`);
    }

    private async getAccessToken(): Promise<AccessToken> {
        try {
            const response = await rp.post(
                this.baseUrl + '/oauth/token',
                {
                    form: {
                        grant_type: "password",
                        client_id: "app",
                        username: this.username,
                        password: this.password
                    },
                    json: true
                }
            );
    
            return new AccessToken(response.access_token, response.expires_in);
        }
        catch(error) {
            console.log('LocHub authentication failed.');
            console.log(error);
            exit(1);
        }
        
    }
}
