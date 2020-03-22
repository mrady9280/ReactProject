export interface IActivity {
    id: string;
    title: string;
    description: string;
    category: string;
    date: Date;
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
        this.date = new Date();
    }
    id: string;
    title: string;
    description: string;
    category: string;
    date: Date;
    city: string;
    venue: string;
}