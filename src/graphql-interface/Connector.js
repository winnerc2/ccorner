


class Connector {
    endpoint;
    client;
    constructor(uri=null) {
        if (uri == null) {
            const DEFAULTCONNECTION = require('./endpoint.js');
            console.log("THE VALUE OF DEFAULTCONNECTION IS: ")
            console.log(DEFAULTCONNECTION)
            this.endpoint = DEFAULTCONNECTION;
        } else {
            this.endpoint = uri;
        }
        
        const c = new ApolloClient({
            uri: this.endpoint
          });
        this.client = c;
    }
}