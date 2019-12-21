const enum Component {
    Collide,
    ControlPaddle,
    Draw,
    Transform2D,
    ControlBall,
    Move,
    ControlBrick,
}

export const enum Has {
    Collide = 1 << Component.Collide,
    ControlPaddle = 1 << Component.ControlPaddle,
    Draw = 1 << Component.Draw,
    Transform2D = 1 << Component.Transform2D,
    ControlBall = 1 << Component.ControlBall,
    Move = 1 << Component.Move,
    ControlBrick = 1 << Component.ControlBrick,
}
