import { Circle } from "../renderables/circle";
import { Renderable } from "./renderable";
import { Vector } from "./vector";

export class Canvas {
    public readonly container: HTMLDivElement;
    public readonly canvas: HTMLCanvasElement;
    public readonly ctx: CanvasRenderingContext2D;

    constructor(container: HTMLDivElement, public readonly width: number, public readonly height: number) {
        this.container = container;
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.container.append(this.canvas);
        this.ctx = this.canvas.getContext('2d');
    }

    public clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.beginPath();
    }

    public draw(renderable: Renderable) {
        this.ctx.beginPath();
        renderable.draw(this.ctx);
    }

    public drawCircle(center: Vector, radius: number) {
        this.ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI, false);
        this.ctx.fill();
        this.ctx.stroke();
    }

    public drawLine(p1: Vector, p2: Vector) {
        this.ctx.moveTo(p1.x, p2.y);
        this.ctx.lineTo(p2.x, p2.y);
        this.ctx.stroke();
    }
}