import { Renderable } from "../core/renderable";
import { Vector, Vector2D } from "../core/vector";

export class Line extends Renderable {

    constructor(
        private readonly pointA: Vector, 
        private readonly pointB: Vector, 
        private readonly color: string = '#FFF', 
        private readonly width: number = 1
    ) {
        super();
        this.pointA = pointA;
        this.pointB = pointB;
        this.color = color;
        this.width = width;
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.lineWidth = this.width;
        ctx.moveTo(this.pointA.get(0), this.pointA.get(1));
        ctx.lineTo(this.pointB.get(0), this.pointB.get(1));
        ctx.stroke();
    }
}