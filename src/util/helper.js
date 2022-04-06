 
 let datenow= new Date();
 let current_date=datenow.getDate()

 let month=datenow.getMonth()+1

 let getBatchInfo=function(){
     console.log('Batch: Urenium, W2D3, the topic for today is Nodejs module system,import-export ')
 }
 module.exports.current_date=current_date
 module.exports.month=month
 module.exports.getBatchInfo=getBatchInfo