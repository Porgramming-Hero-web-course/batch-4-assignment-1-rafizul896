{

    type Person = {
        name: string;
        age: number;
    }

    function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key];
    }
    
}