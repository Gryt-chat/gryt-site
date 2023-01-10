import JsFileDownloader from 'js-file-downloader';
import { downloadLinks } from '../config/constants';

export function download(os: string) {
    const s = downloadLinks[os.toLowerCase()] ? downloadLinks[os.toLowerCase()] : false
    console.log(`Attempt to download for ${os}, is available: ${s}`);
    
    if (s)
    new JsFileDownloader({url: s})
    .then(function () {
        console.log('Finished downloading!');
        
    })
    .catch(function (error: any) {
        console.error(error);
        
    });
}