import {control_ball} from "../components/com_control_ball.js";
import {control_paddle} from "../components/com_control_paddle.js";
import {draw_rect} from "../components/com_draw.js";
import {control_move} from "../components/com_move.js";
import {Game} from "../game.js";
import {Vec2} from "../math/index.js";
import {World} from "../world.js";

export function scene_main(game: Game) {
    game.World = new World();

    game.Add({
        Translation: [game.ViewportWidth / 2, game.ViewportHeight - game.ViewportHeight / 8],
        Using: [control_paddle(), control_move(<Vec2>[0, 0], 300), draw_rect(100, 20, "green")],
    });

    game.Add({
        Translation: [game.ViewportWidth / 2, game.ViewportHeight / 2],
        Using: [control_ball(), control_move(<Vec2>[1, 1], 600), draw_rect(20, 20, "red")],
    });
}
