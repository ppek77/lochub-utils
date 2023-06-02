class LocHubConfig {
    baseUrl: string;
    username: string;
    password: string;

    constructor(url: string, user: string, password: string) {
        this.baseUrl = url;
        this.username = user;
        this.password = password;
    }
}
