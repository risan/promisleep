const promisleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default promisleep;
