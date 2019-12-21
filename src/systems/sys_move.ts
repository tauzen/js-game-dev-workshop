import {Has} from "../components/com_index.js";
import {Entity, Game} from "../game.js";
import {normalize} from "../math/vec2.js";

const QUERY = Has.Transform2D | Has.Move;

export function sys_control_move(game: Game, delta: number) {
    for (let i = 0; i < game.World.Mask.length; i++) {
        if ((game.World.Mask[i] & QUERY) == QUERY) {
            update(game, i, delta);
        }
    }
}

function update(game: Game, entity: Entity, delta: number) {
    const speed = 300;
    let direction = game.World.Direction[entity];
    let transform = game.World.Transform2D[entity];

    normalize(direction.Direction, direction.Direction);
    transform.Translation[0] += direction.Direction[0] * speed * delta;
    transform.Translation[1] += direction.Direction[1] * speed * delta;
    transform.Dirty = true;
}
