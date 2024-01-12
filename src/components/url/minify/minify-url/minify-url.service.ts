import { Injectable, BadRequestException } from '@nestjs/common';
import { UrlService } from 'src/dbsrvs/srv/url/url.service';

@Injectable()
export class MinifyUrlService {
    constructor(private urlService: UrlService) { }

    async getUser(userId: string) {
        // const abc=nanoid()
        const data = await this.urlService.findUser(userId)
        console.log("sdsaffsga", data)
        return data
    }

    async postUrl(userId: string, url:URL) {
        const user = await this.urlService.findUser(userId)
        if (user === null) {
            this.urlService.createNewUserAndAddNewUrl(userId, url)
        } else {
            const urls = user.urls;

            const doesUrlExist = await urls.findIndex(o => o.url === url.toString());
            if (doesUrlExist !== -1) {
                throw new BadRequestException('Url already Minified');
            }

            return this.urlService.addNewUrl(userId, url)
        }
    }

    async getUrl(userId:string, miniUrl:IGetUrlParameters) {
        return this.urlService.findUrl(userId, miniUrl.miniUrl)
    }

    async deleteUrl(userId:string, miniUrl:string) {
        return this.urlService.removeUrl(userId, miniUrl)
    }
}


export interface Iinput {
    url: string;
    userId: string;
    miniUrl: string;
  }
  export interface IGetUrlParameters {
    miniUrl: string;
  }
  