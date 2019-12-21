import {Has} from "../components/com_index.js";
import {Entity, Game} from "../game.js";
import {normalize} from "../math/vec2.js";

const QUERY = Has.Transform2D | Has.ControlBall;

export function sys_control_ball(game: Game, delta: number) {
    for (let i = 0; i < game.World.Mask.length; i++) {
        if ((game.World.Mask[i] & QUERY) == QUERY) {
            update(game, i, delta);
        }
    }
}

function update(game: Game, entity: Entity, delta: number) {
    let direction = game.World.Direction[entity];
    let transform = game.World.Transform2D[entity];

    if (transform.Translation[0] > game.ViewportWidth || transform.Translation[0] < 0) {
        direction.Direction[0] = -direction.Direction[0];
    }

    if (transform.Translation[1] > game.ViewportHeight || transform.Translation[1] < 0) {
        direction.Direction[1] = -direction.Direction[1];
    }

    normalize(direction.Direction, direction.Direction);
}
