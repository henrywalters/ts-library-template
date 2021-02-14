import { Renderable } from "../core/renderable";
import { Vector } from "../core/vector";

export class Circle extends Renderable {
    constructor(
        public readonly center: Vector,
        public readonly radius: number,
        public readonly fillColor: string = '#FFFFF',
        public readonly strokeColor: string = '#FFFFF',
        public readonly strokeWidth: number = 1
    ) {
        super();

    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.arc(this.center.get(0), this.center.get(1), this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.fillColor;
        ctx.fill();
        ctx.lineWidth = this.strokeWidth;
        ctx.strokeStyle = this.strokeColor;
        ctx.stroke();
    }
}