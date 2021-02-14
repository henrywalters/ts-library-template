import { EPSILON } from "../math/constants";
import { VectorMath } from "../math/vectorMath";
import { Circle } from "../renderables/circle";
import { Line } from "../renderables/line";
import { Game } from "./game";
import { Vector } from "./vector";

export class Bot {

    private target: Vector | null = null;
    private targetReachFn: () => void | null = null;
    public readonly pos: Vector = Vector.zero(2);
    private cursor: Circle = new Circle(this.pos, 10, "blue", "blue");

    constructor(
        private readonly moveSpeed: number,
        private readonly game: Game,
    ) {}

    public setTarget(target: Vector, onReach: () => void) {
        this.target = target;
        this.targetReachFn = onReach;
    }

    public update(dt: number) {

        this.cursor.center.setAll(this.pos);
        this.game.canvas.draw(this.cursor);

        if (this.target) {
            const diff = VectorMath.subtract(this.target, this.pos);
            if (diff.magnitude() < this.moveSpeed * dt * 2) {
                const tmp = this.targetReachFn;
                this.target = null;
                this.targetReachFn = null;
                tmp();
            } else {
                this.pos.add(diff.normalize().multScalar(this.moveSpeed * dt));
            }
        }
    }
}