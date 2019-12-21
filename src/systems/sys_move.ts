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
    let move = game.World.Move[entity];
    let transform = game.World.Transform2D[entity];

    normalize(move.Direction, move.Direction);
    transform.Translation[0] += move.Direction[0] * move.Speed * delta;
    transform.Translation[1] += move.Direction[1] * move.Speed * delta;
    transform.Dirty = true;
}
