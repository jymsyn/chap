import mongoose = require('mongoose');
const GetIGPic = require('get-instagram-photo');

let HairstyleSchema = new mongoose.Schema({
  name: {type: String},
  price: {type: String},
  duration: {type: Number},
  description: {type: String},
  igimg: {type: String},
  img: {type: String},
  createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
}, { 
  timestamps: {createdAt: 'created_at'}
});

HairstyleSchema.method('getInstagramImage', function(url){
  GetIGPic(url).then(image=>{
    if(image !== undefined || image !== null || image !== "") {
      console.log(`Successfully retrieved image: ${image}`)
      return this.igimg = image;
    } else {
      console.log("cannot save image because you are trying to save a private image. Please make your profile public")
    }
  }).catch((err) => {
    console.error("there is an error ho", err);
  });
})

export default mongoose.model('Hairstyle', HairstyleSchema);