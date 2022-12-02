export default class CountApiService {
    url = "https://api.countapi.xyz";
    key = "1ccb732e-b55a-4404-ad3f-0f99c02fe44e";

    async getCount() {
        try {
            const requestOptions = {
                method: 'GET',
            }
            const response = await fetch(`${this.url}/get/${this.key}`, requestOptions);
            const data = await response.json();
            if (data.error) {
                console.log(data.error);
                return null
            }
            return data;
        } catch (err) {
            console.log(err);
            return err;
        }
    }
}