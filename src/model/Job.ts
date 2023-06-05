import BaseEntity from "./BaseEntity";

export default class Job extends BaseEntity {
    constructor(
        protected id: string,
        protected name: string,
        protected description: string,
        protected createdAt: Date,
        protected updatedAt: Date,
        protected metadata: [string, string][],
        protected projectId: string,
        protected taskIds: string[],
        protected inputIds: string[],
        protected deliverablesIds: string[]
    ) {
        super(id, name, description, createdAt, updatedAt, metadata);
    };
}