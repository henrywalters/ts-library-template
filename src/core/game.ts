import { Clock } from "../utils/clock";
import { Timer } from "../utils/timer";
import { Canvas } from "./canvas";
import { Config } from "./config";
import { Input } from "./input";

export class Game {

    private lastStart: number;

    public readonly input: Input;
    public readonly canvas: Canvas;
    public readonly config: Config;
    public running: boolean;

    constructor(el: HTMLDivElement, config: Config) {
        this.config = config;
        this.input = new Input(el);
        this.lastStart = Clock.now();
        this.canvas = new Canvas(el, this.config.width, this.config.height);
    }

    private gameLoop = (t: number) => {
        this.canvas.clear();
        this.input.poll();
        this.OnUpdate((t - this.lastStart) / 1000);
        this.lastStart = t;
        window.requestAnimationFrame(this.gameLoop);
    }

    public run() {
        this.running = true;

        this.OnCreate();

        window.requestAnimationFrame(this.gameLoop);

        this.OnDestroy();
    }

    protected OnCreate() {}
    protected OnUpdate(dt: number) {}
    protected OnDestroy() {}
}