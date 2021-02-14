import { GameObject } from "./gameObject";

export class ComponentManager {
    static bitmap: Int8Array;
}

export class Component {
    public static _componentMap: {[name: string]: number};
    public static _totalComponents: number;
    public static _totalComponentInstances: number;

    public readonly id: number;
    public readonly instanceId: number;

    constructor() {
        if (typeof Component._totalComponents === 'undefined') {
            Component._totalComponents = 0;
            Component._totalComponentInstances = 0;
            Component._componentMap = {};
        }

        if (!Component._componentMap.hasOwnProperty(this.constructor.name)) {
            Component._componentMap[this.constructor.name] = Component._totalComponents;
            Component._totalComponents += 1;
        }

        this.id = Component._componentMap[this.constructor.name];
        this.instanceId = Component._totalComponentInstances;

        Component._totalComponentInstances += 1;
    }
}