let sayHi = function(){
    setTimeout(() => { console.log('timeout'); }, 0);
 process.nextTick(()=> console.log('nexttick'));
   setImmediate(() => { console.log('immediate'); });
    }
    