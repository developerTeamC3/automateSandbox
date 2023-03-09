var cron = require('node-cron');
var shell = require('shelljs');
require('dotenv').config();

var user = process.env.USER;
var passw = process.env.PASSW;
var secret = process.env.SECRET


//execute every 00 11 every day
var task = cron.schedule('00 11 * * *', function(){
    shell.echo('task Started');
    shell.exec( `sfcc-ci auth:login ${secret} ${user} ${passw}`)
    shell.exec('sfcc-ci sandbox:start -s "d99949de-000d-421a-8a4b-97e4f04b4a1a"')   
    shell.exec('sfcc-ci sandbox:start -s "41244908-8de2-4f3e-b1ab-6761a5df39d1"') 
    shell.exec('sfcc-ci sandbox:start -s "9d8160db-9ddc-4fd1-a394-f3104ad127b6"') 
    shell.exec('sfcc-ci sandbox:start -s "4b126dc0-1867-45c6-93b3-cb0a4fc8c811"')  
    shell.exec('sfcc-ci sandbox:start -s "0a7cd203-e49e-445f-ae94-2f78c704660b"') 
    shell.exec('sfcc-ci sandbox:start -s "4785d16e-12d9-4b26-bb7c-a3326a60f5d7"')
    shell.exec('sfcc-ci sandbox:start -s "0dcbbdec-2d5c-4afc-8dfa-6e808e7d466e"') 
    shell.exec('sfcc-ci sandbox:start -s "fbef4022-fb0a-4552-aef9-be1e115bf8c7"')
    shell.exec('sfcc-ci sandbox:list')                                                                        
    console.log('done')
    

}, false );
task.start();
 