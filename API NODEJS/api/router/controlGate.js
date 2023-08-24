const express = require('express');
const router = express.Router();
let lockgatein = false;
let lockgateout = false;
var Gpio = require('onoff').Gpio;

//Chân GPIO 22
const gpio22 = new Gpio(22, 'out');

// Chân GPIO 18
const gpio18 = new Gpio(18, 'out');

    router.get('/openin',(req,res,next) => {
        if(lockgatein == false)
        {
        gpio22.writeSync(1);
            res.status(200).json({
                message: 'mở cổng vào'
        });
        }else
        {
            res.status(200).json({
                message: 'cổng vào đang bị khóa'
        });
        }
        
    });

    router.get('/closein',(req,res,next) => {
        gpio22.writeSync(0);
        res.status(200).json({
            message: 'đóng cổng vào'
    });
    });

    router.get('/lockin',(req,res,next) => {
        lockgatein = true;
        gpio22.writeSync(0);
        res.status(200).json({
            message: 'khóa công vào'
    });
    });

    router.get('/unlockin',(req,res,next) => {
        lockgatein = false;
        res.status(200).json({
            message: 'mở khóa cổng vào'
    });
    });
module.exports = router;