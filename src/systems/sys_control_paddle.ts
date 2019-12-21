import {Has} from "../components/com_index.js";
import {Entity, Game} from "../game.js";
import {Vec2} from "../math/index.js";

const QUERY = Has.Transform2D | Has.ControlPaddle;

export function sys_control_paddle(game: Game, delta: number) {
    for (let i = 0; i < game.World.Mask.length; i++) {
        if ((game.World.Mask[i] & QUERY) == QUERY) {
            update(game, i, delta);
        }
    }
}

function update(game: Game, entity: Entity, delta: number) {
    let x_direction = 0;
    if (game.InputState.ArrowLeft) {
        x_direction -= 1;
    }
    if (game.InputState.ArrowRight) {
        x_direction += 1;
    }

    let y_direction = 0;
    if (game.InputState.ArrowUp) {
        y_direction -= 1;
    }
    if (game.InputState.ArrowDown) {
        y_direction += 1;
    }

    let direction = <Vec2>[x_direction, y_direction];
    let speed = 300;

    let transform = game.World.Transform2D[entity];
    transform.Translation[0] += direction[0] * speed * delta;
    transform.Translation[1] += direction[1] * speed * delta;
    transform.Dirty = true;
}
