export declare type OmitFunctions<T> = {
    // eslint-disable-next-line
    [P in keyof T as T[P] extends (...args: any[]) => any ? never : P]: T[P]
}
