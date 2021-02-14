import { VectorMath } from "../math/vectorMath";
import { Component } from "./component";
import { Vector } from "./vector";

export class GameObject {
    static _totalGameObjects: number;

    public readonly id: number;
    public name: string;
    public parent: GameObject | null = null;
    public readonly children: GameObject[];
    public readonly components: Component[];
    public pos: Vector;

    constructor() {
        if (typeof GameObject._totalGameObjects === 'undefined') {
            GameObject._totalGameObjects = 0;
        }

        this.id = GameObject._totalGameObjects;
        this.name = `GameObject_${this.id}`;
        this.pos = Vector.zero(2);
        this.children = [];
        this.components = [];

        GameObject._totalGameObjects += 1;
    }

    public setPos(pos: Vector) {
        this.pos = pos;
        return this;
    }

    // Preorder traverse the game object
    public static traverse(root: GameObject, fn: (gameObject: GameObject) => void) {
        fn(root);
        for (const child of root.children) {
            GameObject.traverse(child, fn);
        }
    }

    public get globalPos(): Vector {
        if (this.parent) {
            return VectorMath.add(this.parent.globalPos, this.pos);
        } else {
            return this.pos.copy();
        }
    }

    public setGlobalPos(pos: Vector): GameObject {
        if (this.parent) {
            this.pos = VectorMath.subtract(pos, this.parent.globalPos);
        } else {
            this.pos = pos;
        }
        return this;
    }

    public move(offset: Vector) {
        this.pos.add(offset);
        return this;
    }

    public add(): GameObject {
        const go = new GameObject();
        go.parent = this;
        this.children.push(go);
        return go;
    }

    public addComponent<T extends Component>(component: T): GameObject {
        this.components.push(component);
        return this;
    }

    public getComponent<T extends Component>(): T {

    }
}