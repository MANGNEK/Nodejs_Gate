const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) =>{

    const play = require('play-sound')({player: null});
    const soundFilePath = './Sound/hello.mp3'; 
    play.play(soundFilePath, (err) => {
      if (err) {
        res.status(401).json({
            message: 'lõi'
        });
      } else {
        res.status(200).json({
            message: 'đang chạy'
        })
      }
    }); 
});
module.exports = router;