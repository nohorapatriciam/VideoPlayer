const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')
const $progress = document.querySelector('#progress')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)
$progress.addEventListener('click', handleLoaded)

function handlePlay() {
  $video.play()
  $play.hidden = true
  $pause.hidden = false
  console.log('play')
}

function handlePause() {
  $video.pause()
  $play.hidden = false
  $pause.hidden = true
  console.log('pause')
}

function handleBackward() {
  $video.currentTime = $video.currentTime - 2
    console.log('atras 2 segundos', $video.currentTime)
}

function handleForward() {
  $video.currentTime += 2
  console.log('adelante 2 segundos', $video.currentTime)

}


$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded() {
  $progress.max = $video.duration
  /*console.log('ha cargado mi video', $video.duration)*/
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime
  /*console.log('tiempo de reproducción', $video.currentTime)*/
}

$progress.addEventListener('input', handleInput)

function handleInput() {
  $video.currentTime = $progress.value
  console.log('estoy moviendo la barra de reproducción', $progress.value)
}