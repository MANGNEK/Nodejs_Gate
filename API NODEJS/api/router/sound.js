const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) =>{

  const { exec } = require('child_process');

function playMP3WithVLC(filePath) {
  const command = `vlc "${filePath}" --play-and-exit in --intf dummy`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing VLC: ${error}`);
    }
  });
}

const mp3FilePath = "./Sound/Tambiet.mp3"; // Đường dẫn tới file mp3 bạn muốn chạybooj aam
playMP3WithVLC(mp3FilePath);
res.status(200).json({
          message: 'đang chạy'
       })

});
router.get('/serial',(req,res,next) =>{
  const SerialPort = require('serialport');

// Liệt kê các cổng serial đang kết nối
  SerialPort.list().then(ports => {
  console.log('Các cổng serial đang kết nối:');
  ports.forEach(port => {
    console.log(`${port.path} - ${port.manufacturer || 'Không rõ'}`);
  });
}).catch(err => {
  console.error('Lỗi khi liệt kê cổng serial:', err);
});
  res.status(200).json({
    message: 'đang chạy'
 });
});
module.exports = router;