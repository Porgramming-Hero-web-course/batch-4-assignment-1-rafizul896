{

    interface Profile {
        name: string;
        age: number;
        email: string;
    };

    type updatesType<T> = {
        [K in keyof T]?: T[K]
    }

    const updateProfile = (profile: Profile, updates: updatesType<Profile>) : Profile => {
        return { ...profile, ...updates };
    }

}