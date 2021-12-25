import { Component } from '@townland-project/dom'

@Component({
    id: 'tl-character',
    template: `
    <div class="tl-character-item body"></div>
    <div class="tl-character-item hair"></div>
    <div class="tl-character-item eyes"></div>
    <div class="tl-character-item mouth"></div>
    <div class="tl-character-item beard"></div>
    <div class="tl-character-item tops"></div>
    <div class="tl-character-item bottoms"></div>
    <div class="tl-character-item shoes"></div>
    <div class="tl-character-item accessories"></div>
`
})
export class CharacterComponent { }