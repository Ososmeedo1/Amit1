const imaginary = document.getElementById("imaginary")
const main = document.getElementById("main")

const images = document.querySelectorAll(".mini")



images.forEach(image => {
  image.addEventListener('click', (e) => {
    const imageSrc = e.target.src
    main.src = `${imageSrc}`
    main.classList.add('common')
  })
})