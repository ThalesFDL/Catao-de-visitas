function changeMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //document.documentElement.classList.toggle('light')

  /*//pegar a tag img
  const img = document.querySelector("#profile img")

  //trocar imagem
  if (html.classList.contains('light')) {
  //se tiver no modo light, trocar a imagem
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
  //se não tiver no modo light, voltar pra imagem original
    img.setAttribute('src', './assets/avatar.png')
  }*/
}
