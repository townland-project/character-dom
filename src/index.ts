import { RenderComponent } from '@townland-project/dom'
import { ICDNAssetsItem, ICharacter } from '@townland-project/interfaces'
import { CharacterComponent } from './component'

export async function GenerateCharacter(character: ICharacter, assets: ICDNAssetsItem): Promise<HTMLElement> {
    let element = await RenderComponent(CharacterComponent)

    for (let key of Object.keys(character.dress)) {
        let assets_key = `${character.gender}:${key}:${(<any>character.dress)[key]}`
        element.style.setProperty(`--${key}-url`, `url('${assets[assets_key]}')`)
    }

    return element
}