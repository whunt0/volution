"use strict";
import { co as CO} from 'co';
import rp from "request-promise";

//console.log(window.location.pathname);
//console.log(window.location.href);

function get(url, headers, overwriteURL = false){
    var options = {
        method :  "GET",
        uri : window.location.origin + url,
        json : true
    };

    if(overwriteURL){
        options.uri = url;
    }

    console.log("GET:" + options.uri);
    return rp.get(options);
}

export {get};
