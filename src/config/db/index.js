const mongoose=require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/buyme');
            console.log('Kết nối MongoDB thành công');
        
    }
    catch(error){
        console.error('Lỗi kết nối MongoDB:', error);
    };
  };
module.exports={connect}