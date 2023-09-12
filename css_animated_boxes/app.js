const wrapper = document.getElementById('wrapper')

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

setInterval( () => {
    wrapper.dataset.configuration = rand(1, 2)
    wrapper.dataset.roundness = rand(1, 2)
}, 3000)