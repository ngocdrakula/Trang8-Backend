
const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: 'ngocdrakula',
    api_key: '143468887975713',
    api_secret: "djPJ1bP4VSXopkCDrlZ9cOCLYWk"
    });
exports.uploads = (file) =>{
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, (result) => {
            resolve({url: result.url, id: result.public_id})
        },
        {resource_type: "auto"})
    })
}