
var videoArray = [
'<iframe width="560" height="315" src="//www.youtube.com/embed/6YZWbgV_jIM" frameborder="0" allowfullscreen></iframe>',
'<iframe width="560" height="315" src="//www.youtube.com/embed/BIVTBL5r1Hg" frameborder="0" allowfullscreen></iframe>',
'<iframe width="560" height="315" src="//www.youtube.com/embed/tbUzR6blVk4" frameborder="0" allowfullscreen></iframe>',
'<iframe width="560" height="315" src="//www.youtube.com/embed/_5Fb2lvL8tg" frameborder="0" allowfullscreen></iframe>',
'<iframe src="//player.vimeo.com/video/113408348" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
'<iframe width="560" height="315" src="//www.youtube.com/embed/PiF5HHkHvX0" frameborder="0" allowfullscreen></iframe>',
'<iframe width="420" height="315" src="//www.youtube.com/embed/RPEhIoKeTg0" frameborder="0" allowfullscreen></iframe>',
'<iframe width="560" height="315" src="//www.youtube.com/embed/xWO4JnP2T40" frameborder="0" allowfullscreen></iframe>',
'<iframe width="420" height="315" src="//www.youtube.com/embed/ji5_MqicxSo" frameborder="0" allowfullscreen></iframe>',
'<iframe width="560" height="315" src="//www.youtube.com/embed/z5AzvOLUtOI" frameborder="0" allowfullscreen></iframe>']

var randomnumber = Math.floor(Math.random() * (videoArray.length - 0 + 1));

var uRL = videoArray[randomnumber]

console.log(uRL);


/* videoArray: where the videos live
   randomnumber: generator of the number selecting the video to queue up
   uRL: composes the embed documentation
