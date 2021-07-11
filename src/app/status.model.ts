export class Publication {
    public titre: string;
    public description: string;
    public categorie: string;
    public date: any
    constructor(titre: string, descripton: string, categorie: string, date: any) {
        this.titre = titre,
            this.description = descripton,
            this.categorie = categorie,
            this.date = date
    }
}