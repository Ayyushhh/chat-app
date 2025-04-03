import Redis from 'ioredis';

const redisConnection = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
});

redisConnection.on("connect" , ()=>{
    console.log(`Redis Connection is Successful`);
});

redisConnection.on("error", (err) => {
    console.log(`Redis Connection Failed: ${err}`);
    
})

export {
    redisConnection
}