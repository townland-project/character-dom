import { Caches } from '@townland-project/cache'
import { GenerateCharacter } from '.';

async function create() {
    try {        
        let res = await Caches.Character.GetJson('https://cdn.townland.xyz/character.json')        
        let assets = await res?.json()        
        let element = await GenerateCharacter({
            username: '',
            dna: '',
            access: 'root',
            gender: 'male',
            dress: {
                body: 'white-male-body',
                hair: 'long-black-hair',
                eyes: 'male-blue-eyes',
                mouth: 'male-smile',
                tops: 'blue-graphic-t',
                bottoms: 'dark-skinny-jean',
                shoes: 'white-sneakers',
                accessories: 'male-aviators'
            },
        }, assets.item)
        document.body.appendChild(element)
    } catch (error) {
        console.error(error)
    }
}
Caches.Character.OnOpen(()=> {
    create()
})