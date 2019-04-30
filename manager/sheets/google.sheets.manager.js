const GoogleSpreadsheet = require('google-spreadsheet');

// TODO: Keep this in config
const sheetUniqueId = "17qX9wgyPWJvn23xRMljCMeItgRDzYKO6Xi4OV54fAxA";
const spreadsheet = new GoogleSpreadsheet(sheetUniqueId);

module.exports = {
    // Connect with Google Stylesheet
    connect:((config) => {
        return new Promise((resolve, reject) => {
            spreadsheet.useServiceAccountAuth(config, (err) => {
                if(err) {
                    reject({status: "Failed Authentication", error: err});
                } else {
                    console.log("Connected.... ");
                    resolve({status:"Success Authentication"});
                }
            });
        });
    }),
    //Get Metadata of Google Stylesheet
    about: (() => {
        return new Promise((resolve, reject) => {
            spreadsheet.getInfo((err, info) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(info);
                }
            });
        });
    }),
    // Create worksheet in Googlesheet Workbook
    createWorksheet: ((worksheetName) => {
        return new Promise((resolve, reject) => {
            spreadsheet.addWorksheet({title: worksheetName}, (err, sheet) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(sheet);
                }
            });
        });
    }),
    read:((row) => {
        return new Promise((resolve, reject) => {
            spreadsheet.getRows(row, (err, rows) => {
                if(err) {
                    console.log("Error: ", err);
                    reject(err);
                } else {
                    console.log("Data: ", rows);
                    resolve(rows);
                }
            });
        });
    }),
    write:((data) => {
        return new Promise((resolve, reject) => {
            spreadsheet.addRow(1, data, (err) => {
                if(err) {
                    reject(err);
                } else {
                    resolve({status:'Successfully Written'});
                }
            });
        });
    }),
    delete:(() => {

    })
}