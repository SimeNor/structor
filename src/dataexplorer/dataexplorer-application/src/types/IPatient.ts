export interface IPatient {
    id: string;
    name: IName[];
    birthDate: string;
    gender: string;
    map(data: any): any;
    address: IAddress[];
    telecom: ITelecom[];
}

export interface IName {
    family: string;
    given: string[];
}

export interface IAddress {
    use: string;
    line: string[];
}

export interface ITelecom {
    value: number;
}
