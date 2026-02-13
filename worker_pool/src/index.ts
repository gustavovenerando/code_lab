import 'dotenv/config';
import WorkerPool from './pool';

const workerPool = new WorkerPool(__dirname + '/worker.ts', { num: 2 });

const tasks = [44, 40, 6, 10, 20, 30, 2];

(async () => {
    const result = await Promise.all(tasks.map((payload) => workerPool.runTask(payload)));
    console.log("result:", result);
})()
