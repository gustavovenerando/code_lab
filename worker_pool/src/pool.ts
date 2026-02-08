import Worker from "./workerWrapper" ;

class WorkerPool {
    private workers: Worker[];
    private freeWorkers: Worker[];
    private taskQueue: any[];
    private readonly workerPath;

    constructor(workerPath: string, options: any) {
        this.workerPath = workerPath;
        this.workers = [];
        this.freeWorkers = [];
        this.taskQueue = [];

        for (let i = 0; i < options.num; i++) {
            this.addNewWorker();
        }
    }

    public runTask(payload: any) {
        return new Promise((res, rej) => {
            const task = {
                res,
                rej,
                payload
            }

            this.taskQueue.push(task);
            this.dispatch();
        })
    }

    private dispatch() {
        // tem que ser um while
        if (this.freeWorkers.length) {
            const task = this.taskQueue.shift();
            const worker = this.freeWorkers.pop();

            if (!worker) {
                task.rej(new Error('No worker found.'));
                return;
            }

            worker.currentTask = task;
            worker.postMessage({ payload: task.payload });
        }
    }

    private addNewWorker() {
        const worker = new Worker(this.workerPath);

        worker.on('message', (msg) => {
            const { result } = msg;
            const task = worker.currentTask;

            worker.currentTask = null;
            this.freeWorkers.push(worker);
            task.res(result);
        });

        worker.on('error', (err) => {

        });

        worker.on('exit', (code) => {
            if (code !== 0) throw new Error(`Worker stopped with exit code ${code}`);
        });

        this.workers.push(worker);
        this.freeWorkers.push(worker);
    }

    public close() {

    }
}
