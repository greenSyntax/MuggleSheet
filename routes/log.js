const express = require('express');
const controller = require('../controller/log.controller');
const filter = require('../filter/sheets.response');
const router = express.Router();

// GET ALL LOGS
router.get('/', (req, res) => {
    controller.readLogs()
        .then(data => {
            // Filter Response
            let filteredData = filter.filterXML(data);
            if(data != null) {
                res.status(200).json({totalRows: data.length, data:filteredData});
            } else {
                res.status(400).json({message: "Error on reading logs"});
            }
        }) 
        .catch(err => {
            res.status(400).json({message: err.message});
        });
});

// CREATE LOG
router.post('/', (req, res) => {
    let data = controller.writeLog(req.body.logs);
    if(data != null) {
        res.status(201).json({"message": "Success"});
    } else {
        res.status(400).json({message: "Error on logging"});
    }
});

module.exports = router;