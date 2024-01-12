import { Injectable } from '@nestjs/common';
import { urlModel } from '../../models/url.model';

@Injectable()
export class UrlService {
    async findUser(userId: string) {
        try {
            return await urlModel.findOne({ userId });
        } catch (err) {
            console.log(err);
        }
    }

    async createNewUserAndAddNewUrl(userId: string, url: URL) {
        try {
            const newAddedUrl = new urlModel({
                userId: userId,
                urls: [
                    {
                        url: url,
                    },
                ],
            });
            return newAddedUrl.save();

        }
        catch (err) {
            console.log(err)
        }
    }
    async addNewUrl(userId: string, url: URL) {
        try {
            const userUrls = await this.findUser(userId)

            userUrls.urls.push({
                url: url,
            });
            return await userUrls.save();

        }
        catch (err) {
            console.log(err)
        }
    }

    async findUrl(userId: string, miniUrl: string) {
        const result = await urlModel.find(
            {
                userId: userId,
                'urls.miniUrl': miniUrl,
            },
            {
                _id: 0,
                'urls.$': 1,
            }
        );
        
        return result;
    }

    async removeUrl(userId: string, miniUrl: string) {
        return await urlModel.updateOne({
            userId: userId,
            $pull: {
                urls: {
                    miniUrl: miniUrl,
                },
            },
        });
    }


}
