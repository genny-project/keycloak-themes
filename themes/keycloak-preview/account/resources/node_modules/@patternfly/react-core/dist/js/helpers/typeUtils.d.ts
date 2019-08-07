export declare type OneOf<T, K extends keyof T> = T[K];
export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
