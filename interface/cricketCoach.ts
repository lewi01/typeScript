import { Coach } from "./coach";

export class CricketCoach implements Coach{

    getDailyaWorkout(): string {
       return "practice your spin bowling technique,";
    }
    
}