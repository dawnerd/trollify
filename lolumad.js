/**
 * Trollify.js - u mad?
 *
 * Copyright Troy Whiteley - http://troywhiteley.com
 * @dawnerd
 */

!function(){
  //These can be anything you want ;)
  var images = [
    'http://picchore.com/wp-content/uploads/2010/08/hasselhoff.jpg',
    'http://c580019.r19.cf2.rackcdn.com/wp-content/uploads/2007/10/hasselhoff-thumbs.jpg',
    'http://www.topnews.in/files/David-Hasselhoff_0.jpg'
  ]

  //let the trolling begin
  var img = document.getElementsByTagName('IMG');
  for(var i = img.length; i--;) img[i].src = images[~~(Math.random()*images.length)]
}()