import EventEmitter from "node:events";
import Worker from "./workerWrapper" ;

const workerFreeEvent = Symbol("workerFreeEvent");

class WorkerPool extends EventEmitter{
    private workers: Worker[];
    private freeWorkers: Worker[];
    private taskQueue: any[];
    private readonly workerPath;

    constructor(workerPath: string, options?: any) {
        super();
        this.workerPath = workerPath;
        this.workers = [];
        this.freeWorkers = [];
        this.taskQueue = [];

        for (let i = 0; i < options.num; i++) {
            this.addNewWorker();
        }

        this.on(workerFreeEvent, () => {
            if (this.taskQueue.length > 0) {
                const task = this.taskQueue.shift();
                this.dispatch(task);
            }
        });
    }

    public runTask(payload: any) {
        return new Promise((res, rej) => {
            const task = {
                res,
                rej,
                payload
            }

            this.dispatch(task);
        })
    }

    private dispatch(task: any) {
        if (!this.freeWorkers.length) {
            this.taskQueue.push(task);
            return;
        }

        const worker = this.freeWorkers.pop();

        if (!worker) {
            task.rej(new Error('No worker found.'));
            return;
        }

        worker.currentTask = task;
        worker.postMessage({ payload: task.payload });
    }

    private addNewWorker() {
        const worker = new Worker(this.workerPath);

        worker.on('message', (msg) => {
            const { result } = msg;
            console.log(
                `${new Date().toISOString()} -`, 
                `Received response from thread id: ${worker.threadId} -`, 
                'Result: ', result
            );
            const task = worker.currentTask;

            worker.currentTask = null;
            this.freeWorkers.push(worker);
            this.emit(workerFreeEvent);
            task.res(result);
        });

        worker.on('error', (err) => {
            this.handleWorkerFailure(worker, err);
        });

        worker.on('exit', (code) => {
            if (code !== 0) {
                this.handleWorkerFailure(worker, new Error(`Worker exited with code ${code}`));
            }
        });

        this.workers.push(worker);
        this.freeWorkers.push(worker);
        this.emit(workerFreeEvent);
    }

    private handleWorkerFailure(worker: Worker, cause: unknown) {
        const task = worker.currentTask;
        worker.currentTask = null;

        const err = cause instanceof Error ? cause : new Error(String(cause));
        if (task) task.rej(err);

        this.workers = this.workers.filter(w => w !== worker);
        this.freeWorkers = this.freeWorkers.filter(w => w !== worker);

        this.addNewWorker();
    }

    public close() {
        for (let worker of this.workers) worker.terminate();
    }
}

export default WorkerPool;
