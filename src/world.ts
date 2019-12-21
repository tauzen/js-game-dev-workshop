import {Collide} from "./components/com_collide";
import {Draw} from "./components/com_draw";
import {Transform2D} from "./components/com_transform2d";
import {Vec2} from "./math";

export class World {
    public Mask: Array<number> = [];

    public Collide: Array<Collide> = [];
    public Draw: Array<Draw> = [];
    public Transform2D: Array<Transform2D> = [];
    public Direction: Array<Vec2> = [];
}
