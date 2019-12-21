import {control_ball} from "../components/com_control_ball.js";
import {control_paddle} from "../components/com_control_paddle.js";
import {draw_rect} from "../components/com_draw.js";
import {Game} from "../game.js";
import {World} from "../world.js";

export function scene_main(game: Game) {
    game.World = new World();

    game.Add({
        Translation: [game.ViewportWidth / 2, game.ViewportHeight - game.ViewportHeight / 8],
        Using: [control_paddle(), draw_rect(100, 20, "green")],
    });

    game.Add({
        Translation: [game.ViewportWidth / 2, game.ViewportHeight / 2],
        Using: [control_ball(), draw_rect(20, 20, "red")],
    });
}
