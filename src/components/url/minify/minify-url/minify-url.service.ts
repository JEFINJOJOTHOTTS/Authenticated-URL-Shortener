import { Injectable } from '@nestjs/common';
import { UrlService } from 'src/dbsrvs/srv/url/url.service';
import {nanoid} from 'nanoid'

@Injectable()
export class MinifyUrlService {
    constructor(private urlService: UrlService) { }

    async getUser() {
        // const abc=nanoid()
        return this.urlService.findUrls('userId')
    }

    async postUrl(userId, url) {
        return this.urlService.addNewUrl(userId, url)
    }

    async getUrl(userId,miniUrl) {
        return this.urlService.findUrl(userId,miniUrl)
    }

    async deleteUrl(userId, miniUrl) {
        return this.urlService.removeUrl(userId, miniUrl)
    }
}
