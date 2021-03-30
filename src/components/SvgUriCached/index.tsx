import _ from 'lodash';
import hash from 'object-hash';
import React, {useCallback, useEffect, useState} from 'react';
import RNFS from 'react-native-fs';
import {SvgXml, UriProps} from 'react-native-svg';

type Props = UriProps;

export const SvgUriCached: React.FC<Props> = ({uri: REMOTE_URL, ...props}) => {
  const [data, setData] = useState<string | undefined>();

  const CACHE_KEY = hash({uri: REMOTE_URL});
  const LOCAL_URL = `${RNFS.CachesDirectoryPath}/${CACHE_KEY}.svg`;

  useEffect(() => {
    let downloadResult: RNFS.DownloadResult;
    const _download = async () => {
      if (!REMOTE_URL) {
        return _.identity;
      }

      const cachedFile = await RNFS.readFile(LOCAL_URL, 'utf8');
      if (!cachedFile) {
        const result = RNFS.downloadFile({
          fromUrl: REMOTE_URL,
          toFile: LOCAL_URL,
          background: true,
          cacheable: false,
        });

        downloadResult = await result.promise;
      } else {
        setData(cachedFile.substr(cachedFile.indexOf('?>') + 3));
      }
    };

    _download();
    return () => {
      if (downloadResult.jobId) {
        RNFS.stopDownload(downloadResult.jobId);
      }
    }
  }, [REMOTE_URL]);

  if (!data) {
    return null;
  }

  return <SvgXml {...props} xml={data} />;
};

export default SvgUriCached;
