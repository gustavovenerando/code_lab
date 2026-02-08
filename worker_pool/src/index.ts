import 'dotenv/config';
import { isMainThread } from "node:worker_threads";
// import WorkerPool from './pool';

// const x = new WorkerPool();

console.log(process.env.HELLO + ' World');
