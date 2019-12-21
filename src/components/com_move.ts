import {Entity, Game} from "../game.js";
import {Vec2} from "../math/index.js";
import {Has} from "./com_index.js";

export interface Move {
    Direction: Vec2;
    Speed: number;
}

export function control_move(Direction: Vec2, Speed: number) {
    return (game: Game, entity: Entity) => {
        game.World.Mask[entity] |= Has.Move;
        game.World.Move[entity] = <Move>{
            Direction,
            Speed,
        };
    };
}
