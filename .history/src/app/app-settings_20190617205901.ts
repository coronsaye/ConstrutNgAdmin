
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class AppSettings {

    public static API_ENDPOINT = 'http://localhost:3030/api/v1';

    public static HTTP_OPTIONS = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

}
