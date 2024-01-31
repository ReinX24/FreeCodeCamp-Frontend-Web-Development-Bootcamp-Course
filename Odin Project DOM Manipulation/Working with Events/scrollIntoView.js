const btn = document.querySelector('.btn')
const specialElement = document.querySelector('.special')

btn.addEventListener('click', () => {
    specialElement.scrollIntoView(true, { behavior: 'smooth' })
})