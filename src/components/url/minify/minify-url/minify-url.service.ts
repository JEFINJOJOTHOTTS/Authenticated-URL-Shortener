import { Injectable, BadRequestException } from '@nestjs/common';
import { UrlService } from 'src/dbsrvs/srv/url/url.service';

@Injectable()
export class MinifyUrlService {
    constructor(private urlService: UrlService) { }

    async getUser(userId) {
        // const abc=nanoid()
        const data = await this.urlService.findUser(userId)
        console.log("sdsaffsga", data)
        return data
    }

    async postUrl(userId, url) {
        const user = await this.urlService.findUser(userId)
        if (user === null) {
            this.urlService.createNewUserAndAddNewUrl(userId, url)
        } else {
            const urls = user.urls;
            
            const doesUrlExist = await urls.findIndex(o => o.url === url);
            if (doesUrlExist !== -1) {
                throw new BadRequestException('Url already Minified');
            }
            
            this.urlService.addNewUrl(userId,url)
        

        }
        console.log("hdhdhhd")
        return this.urlService.addNewUrl(userId, url)
    }

    async getUrl(userId, miniUrl) {
        return this.urlService.findUrl(userId, miniUrl)
    }

    async deleteUrl(userId, miniUrl) {
        return this.urlService.removeUrl(userId, miniUrl)
    }
}
