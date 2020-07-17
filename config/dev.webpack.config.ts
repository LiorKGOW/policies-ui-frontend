import { resolve } from 'path';
import config from '@redhat-cloud-services/frontend-components-config';
import { patchConfig } from './patch';

const { config: webpackConfig, plugins } = config({
    rootFolder: resolve(__dirname, '../'),
    debug: true,
    https: true
});

patchConfig(webpackConfig);

module.exports = {
    ...webpackConfig,
    plugins
};
