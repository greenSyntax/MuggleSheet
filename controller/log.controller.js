const spreadsheet = require('../manager/sheets/google.sheets.manager');
const googleConfig = require('../google_sheet_config.json');

module.exports = {
    writeLog:( async (payload) => {
        let isConnected = await spreadsheet.connect(googleConfig);
        if(isConnected) {
            payload.forEach(async log => {
                let hasWritten = await spreadsheet.write(log);
            });
            return {status: "Successfully Logged"};
        }
    }),
    readLogs:(async () => {
        console.log("Start..");
        //if(payload.body.row == null) return null;
        let isConnected = await spreadsheet.connect(googleConfig);
        if(isConnected) {
            return await spreadsheet.read(1);
        }
    })
}