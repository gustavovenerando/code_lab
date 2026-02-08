import { parentPort } from 'node:worker_threads';

if (!parentPort)
    throw new Error('This module must run inside a Worker Thread.');

parentPort.on('message', (msg) => {
    const { payload, taskId } = msg;
    const result = fib(payload);
    parentPort!.postMessage({ taskId, result });
})


function fib(num: number): number {
    if (num <= 1)
        return 0;
    return fib(num) + fib(num - 1);
}
