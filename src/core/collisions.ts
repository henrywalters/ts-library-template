import { VectorMath } from "../math/vectorMath";
import { Circle } from "../renderables/circle";

export class Collisions {
    public static checkCircles(circleA: Circle, circleB: Circle): boolean {
        return VectorMath.subtract(circleA.center, circleB.center).magnitude() < circleA.radius + circleB.radius;
    }
}