import { VectorMath } from "../math/vectorMath";
import { Vector } from "./vector";

export interface InputState {
    leftAxis: Vector;
    rightAxis: Vector;
    mousePos: Vector;
    globalMousePos: Vector;
    up: boolean,
    upPressed: boolean,
    right: boolean,
    rightPressed: boolean,
    down: boolean,
    downPressed: boolean,
    left: boolean,
    leftPressed: boolean,
    fire: boolean,
    firePressed: boolean,
    fireAlt: boolean,
    fireAltPressed: boolean
}

export class Input {

    
    private prevMousePos: Vector;
    private prevState: InputState;
    public readonly state: InputState;
    
    constructor(private readonly container: HTMLElement) {

        this.state = {
            leftAxis: Vector.zero(2),
            rightAxis: Vector.zero(2),
            mousePos: Vector.zero(2),
            globalMousePos: Vector.zero(2),
            up: false,
            upPressed: false,
            right: false,
            rightPressed: false,
            down: false,
            downPressed: false,
            left: false,
            leftPressed: false,
            fire: false,
            firePressed: false,
            fireAlt: false,
            fireAltPressed: false
        }

        this.prevState = {...this.state};

        this.prevMousePos = Vector.zero(2);

        this.container.addEventListener("contextmenu", function(e){
            e.preventDefault();
        }, false);

        this.container.addEventListener('mousemove', (e: MouseEvent) => {
            this.state.mousePos.set(0, e.offsetX);
            this.state.mousePos.set(1, e.offsetY);
            this.state.globalMousePos.set(0, e.offsetX + this.container.clientLeft);
            this.state.globalMousePos.set(1, e.offsetY + this.container.clientTop);
        });

        this.container.addEventListener('mousedown', (e) => {
            if (e.button === 0) {
                this.state.fire = true;
            }

            if (e.button === 2) {
                this.state.fireAlt = true;
            }
        })

        this.container.addEventListener('mouseup', (e) => {
            if (e.button === 0) {
                this.state.fire = false;
            }

            if (e.button === 2) {
                this.state.fireAlt = false;
            }
        })

        window.addEventListener('keydown', (e) => {
            if (e.key === 'w') this.state.up = true;
            else if (e.key === 'd') this.state.right = true;
            else if (e.key === 's') this.state.down = true;
            else if (e.key === 'a') this.state.left = true;
        })

        window.addEventListener('keyup', (e) => {
            if (e.key === 'w') this.state.up = false;
            else if (e.key === 'd') this.state.right = false;
            else if (e.key === 's') this.state.down = false;
            else if (e.key === 'a') this.state.left = false;
        })
    }

    public poll() {
        this.state.upPressed = this.state.up && !this.prevState.up
        this.state.rightPressed = this.state.right && !this.prevState.right
        this.state.downPressed = this.state.down && !this.prevState.down;
        this.state.leftPressed = this.state.left && !this.prevState.left;
        this.state.firePressed = this.state.fire && !this.prevState.fire;
        this.state.fireAltPressed = this.state.fireAlt && !this.prevState.fireAlt;
        this.prevState = {...this.state};

        this.state.rightAxis.x = this.state.mousePos.x - this.prevMousePos.x;
        this.state.rightAxis.y = this.state.mousePos.y - this.prevMousePos.y;
        this.prevMousePos.setAll(this.state.mousePos);

        this.state.leftAxis.x = (this.state.left ? -1 : 0) + (this.state.right ? 1 : 0);
        this.state.leftAxis.y = (this.state.up ? -1 : 0) + (this.state.down ? 1 : 0);
    }
    

    public onClick(fn: (e: MouseEvent) => void) {
        this.container.addEventListener('click', (e) => {
            fn(e);
        })
    }

    public get globalMousePos(): Vector {
        return this.state.globalMousePos.copy();
    }

    public hideCursor() {
        this.container.style.cursor = 'none';
    }

    public showCursor() {
        this.container.style.cursor = 'default';
    }
}