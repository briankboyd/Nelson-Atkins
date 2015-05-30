#Configuration Folder

##Create 2 files, config.js and pem.key

config.js will look like the following

var config = {
    folderID: '',
    SERVICE_ACCOUNT_EMAIL: '@developer.gserviceaccount.com',
    CLIENT_ID: '.apps.googleusercontent.com',
    SERVICE_ACCOUNT_KEY_FILE:'./config/key.pem',
    SCOPE: ['https://www.googleapis.com/auth/drive.readonly']

}

module.exports = config;