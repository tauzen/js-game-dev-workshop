import {Has} from "../components/com_index.js";
import {Entity, Game} from "../game.js";

const QUERY = Has.Transform2D | Has.ControlBall | Has.Move | Has.Collide;

export function sys_control_ball(game: Game, delta: number) {
    for (let i = 0; i < game.World.Mask.length; i++) {
        if ((game.World.Mask[i] & QUERY) == QUERY) {
            update(game, i, delta);
        }
    }
}

function update(game: Game, entity: Entity, delta: number) {
    let move = game.World.Move[entity];
    let transform = game.World.Transform2D[entity];
    let collide = game.World.Collide[entity];

    collide.Collisions.forEach(collision => {
        if (collision.Hit[0]) {
            transform.Translation[0] += collision.Hit[0];
            move.Direction[0] *= -1;
        }

        if (collision.Hit[1]) {
            transform.Translation[1] += collision.Hit[1];
            move.Direction[1] *= -1;
        }
    });

    if (transform.Translation[0] > game.ViewportWidth) {
        transform.Translation[0] = game.ViewportWidth;
        move.Direction[0] *= -1;
    }

    if (transform.Translation[0] < 0) {
        transform.Translation[0] = 0;
        move.Direction[0] *= -1;
    }

    if (transform.Translation[1] > game.ViewportHeight) {
        transform.Translation[1] = game.ViewportHeight;
        move.Direction[1] *= -1;
    }

    if (transform.Translation[1] < 0) {
        transform.Translation[1] = 0;
        move.Direction[1] *= -1;
    }
}
