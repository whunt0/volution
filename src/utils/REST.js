"use strict";
import { co as CO} from 'co';
import rp from "request-promise";

//console.log(window.location.pathname);
//console.log(window.location.href);

function get(url, headers){
    var options = {
        method :  "GET",
        uri : window.location.origin + url,
        json : true
    };
    console.log("GET:" + window.location.origin + url);
    return rp.get(options);
}
 
export {get};
