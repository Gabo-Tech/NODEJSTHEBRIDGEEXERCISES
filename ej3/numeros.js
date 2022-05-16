module.exports = {
    esPar: function(num) {
        const Logger = require('logplease');
        const logger = Logger.create('utils');
        const esPar = (num) => num % 2 == 0 ? logger.info(true + " Sí es par") : logger.error(false + " no es par");
        return esPar;
    }
 }