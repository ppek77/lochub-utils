export default abstract class BaseEntity {
    constructor(
        protected id: string,
        protected name: string,
        protected description: string,
        protected createdAt: Date,
        protected updatedAt: Date,
        protected metadata: [string, string][]
    ) {}
}
