import { Worker as NodeWorker } from "node:worker_threads";

class Worker extends NodeWorker {
    public currentTask: any;

    constructor(...args: ConstructorParameters<typeof NodeWorker>){
        super(...args);
    }
}

export default Worker;
