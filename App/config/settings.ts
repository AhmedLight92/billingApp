import Constants from 'expo-constants';

const apiUrl = 'http://192.168.1.4:4000';

const settings = {
    dev: {
        apiUrl
    },
    staging: {
        apiUrl
    },
    prod: {
        apiUrl
    }
};

const getCurrentSettings = () => {
    // eslint-disable-next-line no-undef
    if (__DEV__) return settings.dev;
    if (Constants.manifest.releaseChannel === 'staging')
        return settings.staging;
    return settings.prod;
};

export default getCurrentSettings();
