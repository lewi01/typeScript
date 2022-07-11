import { Coach } from "./coach";

export class GolfCoach implements Coach{

    getDailyaWorkout(): string {
        return "Hit 100 balls at golf ranch";
    }
    
}