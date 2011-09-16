/**
 * Trollify.js - u mad?
 *
 * Copyright Troy Whiteley - http://troywhiteley.com
 * @dawnerd
 */

!function(){
  //These can be anything you want ;)
  var images = [
    'http://28.media.tumblr.com/ei729ojaFm9ickfnHLmkACuuo1_400.jpg',
    'http://26.media.tumblr.com/ei729ojaFm9ic7489TiIUBvvo1_400.jpg',
    'http://26.media.tumblr.com/ei729ojaFm9iasuebHQjetZro1_400.jpg',
    'http://28.media.tumblr.com/ei729ojaFm9i5f8mO0DHWAu3o1_400.jpg'
  ]

  //let the trolling begin
  var img = document.getElementsByTagName('IMG');
  for(var i = img.length; i--;) img[i].src = images[~~(Math.random()*images.length)]
}()