export interface ICategorySpecification {
    category: ICategory[];
    positionRole: string[];
}

interface ICategory {
    id: string;
    name: string;
    specialities: ISpecification[];
}

interface ISpecification {
    id: string;
    name: string;
    categoryId: string;
}
