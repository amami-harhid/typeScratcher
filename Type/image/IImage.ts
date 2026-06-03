/**
 * Image(イメージ)
 */
export interface IImage {
    skinId: number;
    name: string;
    image: string;
    loadCompleted: boolean;
    load(): Promise<void>;

}