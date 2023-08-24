const express = require('express');
const router = express.Router();
const raspiInfo = require('raspi-info');

    router.get('/getinfopi',(req,res,next) => {
        const serial = raspiInfo.getSerial();
        if(serial != null)
        {
            res.status(200).json({
                message : ' Serial : ${serial}'
            });
        }else
        {
            res.status(401).json({
                message : 'không lấy được serial'
            });
        }
    });