const webrtc2images = require('webrtc2images')

const rtc = new webrtc2images({
	width : 200,
	heigth : 200,
	frames : 10,
	type : 'image/jpeg',
	quality : 0.4,
	interval : 200
})

rtc.startVideo(function(err){

})

const record = document.querySelector('#record')

record.addEventListener('click', function (e) {
  e.preventDefault()

  //indicamos que grabe 
  rtc.recordVideo(function(err, frames){
  	console.log(frames)
  })
}, false)
