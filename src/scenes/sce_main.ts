import {collide} from "../components/com_collide.js";
import {control_ball} from "../components/com_control_ball.js";
import {control_brick} from "../components/com_control_brick.js";
import {control_paddle} from "../components/com_control_paddle.js";
import {draw_rect} from "../components/com_draw.js";
import {control_move} from "../components/com_move.js";
import {Game} from "../game.js";
import {Vec2} from "../math/index.js";
import {World} from "../world.js";

const colors = ["green", "blue", "red", "orange", "pink"];

export function scene_main(game: Game) {
    game.World = new World();

    game.Add({
        Translation: [game.ViewportWidth / 2, game.ViewportHeight - game.ViewportHeight / 8],
        Using: [
            collide([100, 20]),
            control_paddle(),
            control_move(<Vec2>[0, 0], 300),
            draw_rect(100, 20, "green"),
        ],
    });

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 7; j++) {
            game.Add({
                Translation: [100 + i * 120, 100 + 60 * j],
                Using: [collide([80, 20]), draw_rect(80, 20, "blue"), control_brick()],
            });
        }
    }

    for (let i = 0; i < 1; i++) {
        const color = Math.round(Math.random() * colors.length);
        game.Add({
            Translation: [game.ViewportWidth / 2, game.ViewportHeight / 2],
            Using: [
                control_ball(),
                control_move(<Vec2>[Math.random() * 100, Math.random() * 100], 300),
                draw_rect(20, 20, colors[color]),
                collide([20, 20]),
            ],
        });
    }
}
