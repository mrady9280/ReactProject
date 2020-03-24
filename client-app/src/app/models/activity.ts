export interface IActivity {
    id: string;
    title: string;
    description: string;
    category: string;
    date: "";
    city: string;
    venue: string;
}

export class Activity implements IActivity{
    constructor() {
        this.id="";
        this.title = "";
        this.category = "";
        this.city = "";
        this.description = "";
        this.venue = "";
        this.date = "";
    }
    id: string;
    title: string;
    description: string;
    category: string;
    date: "";
    city: string;
    venue: string;
}