import { World } from './World/World'

function main() {
    const container = document.querySelector('#scene-container')
    const button = document.querySelector('#startButton')

    
    const world = new World(container)
    button.addEventListener('click', () => {
        world.render()
    })


}

main()