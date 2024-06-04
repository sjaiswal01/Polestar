export class environmentConstants {
    
    private static readonly _APIBaseUrl = "https://reqres.in"
    private static readonly _UIBaseUrl = "https://www.polestar.com/se/developer/get-started/"
    private static readonly _HomeBaseUrl = "https://www.polestar.com/global/"
    
    public static get APIBaseUrl() {
        return environmentConstants._APIBaseUrl;
    }
    public static get UIBaseUrl() {
        return environmentConstants._UIBaseUrl;
    }
    public static get HomePageURL() {
        return environmentConstants._HomeBaseUrl;
    }
}

export enum Constants {

    getStartedPageTitle = "Pure progressive performance | Polestar",
    homePageTitle = "Polestar – Electric cars | Polestar"
   
}

export const Items = 
["Polestar 3", "Polestar 4", "Additionals shop", "Charging", "Polestar locations", "News", "Sustainability", "About Polestar", "Home"]
