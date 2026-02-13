import { parentPort, threadId } from 'node:worker_threads';
console.log(`${new Date().toISOString()} - `, 'Thread initialized, id: ' + threadId);

if (!parentPort)
    throw new Error('This module must run inside a Worker Thread.');

parentPort.on('message', (msg) => {
    console.log(`${new Date().toISOString()} - `, 'Received message on thread id: ' + threadId);
    const { payload, taskId } = msg;
    const result = fib(payload);
    parentPort!.postMessage({ taskId, result });
});


function fib(num: number): number {
    if (num <= 1) return 0;
    if (num === 2) return 1;
    return fib(num - 1) + fib(num - 2);
}
