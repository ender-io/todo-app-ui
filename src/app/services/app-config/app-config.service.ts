import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private env = environment

  // Get endpoint api
  public getEndPoint(name?: string): string {
    switch(name){
      case 'BASE_API':
        return this.env._URL_BASE_API + '/api'
      case 'AUTH_API':
        return this.env._URL_AUTH_API + '/api'
      case 'REPORT_API':
        return this.env._URL_REPORT_API + '/api'
      case 'MAIL_API':
        return this.env._URL_MAIL_API + '/api'
      default:
        return this.env._URL_BASE_API + '/api'
    }
  }

  // Get url
  public getURL(name: string): string {
    switch(name){
      case 'BASE_API': return this.env._URL_BASE_API
      default: return this.env._URL_BASE_API
    }
  }
}
