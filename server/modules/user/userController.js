/*
*	
*/
'use strict';

const log4js = require('log4js'),
      log = log4js.getLogger("userController"),
      path = require('path');

exports.doLogin = function(reqObject, resObject) {
    log.debug("******do login******", reqObject.body);
    

    try{        
    			var user = {
    				userName : "Abc1234",
                    loggedIn : true,
    				certification : 'B00RWSC2MW',
    				consortium : '100kg',
    				userProfile : {
                        id : 'PROD',
                        profile : 'producer'
                    }
    			}
                resObject.json(user);
   
    }catch(err){
        log.error("Error occurred while authenticating user", err);
        resObject.json({errMsg : constants.SERVICE_ERROR});
    }
};

exports.doRegistration = function(reqObject, resObject) {
    log.debug("******do registering******", reqObject.body);
    

    try{        
                var user = {
                    userName : "Abc1234",
                    loggedIn : true,
                    certification : 'B00RWSC2MW',
                    consortium : '100kg',
                    userProfile : {
                        id : 'PROD',
                        profile : 'producer'
                    }
                }
                resObject.json(user);
   
    }catch(err){
        log.error("Error occurred while registering user", err);
        resObject.json({errMsg : constants.SERVICE_ERROR});
    }
};