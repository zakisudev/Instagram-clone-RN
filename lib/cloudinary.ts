import { Cloudinary } from '@cloudinary/url-gen';
import { upload } from 'cloudinary-react-native';
import { UploadApiResponse } from 'cloudinary-react-native/lib/typescript/src/api/upload/model/params/upload-params';

export const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME,
  },
  url: {
    secure: true,
  },
});

export const uploadImage = async (file: string) => {
  const options = {
    upload_preset: 'instagram-preset',
    unsigned: true,
  };

  return new Promise<UploadApiResponse>(async (resolve, reject) => {
    await upload(cld, {
      file,
      options: options,
      callback: (error: any, response: any) => {
        //.. handle response
        if (error || !response) {
          console.log(error);
          reject(error);
          return;
        }

        resolve(response);
      },
    });
  });
};