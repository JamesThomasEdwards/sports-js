class PubSub {
    constructor() {
        this.topics = {}
    }

    publish(namespace, payload) {
        let handelers = this.topics[namespace];
        if (!handelers) return
        handelers.forEach(handeler => {
            handeler.call(this, payload)
        })

    }

    subscribe(namespace, callback) {
        let handlers = this.topics[namespace];
        if (!!handlers === false) {
            handlers = this.topics[namespace] = [];
        }
        handlers.push(callback);
    }

    unsubscribe(namespace, callback) {
        let handlers = this.topics[namespace];
        if (!!handlers === false) return;

        var handlerIdx = handlers.indexOf(callback);
        handlers.splice(handlerIdx, 1);
    }

};

module.exports = PubSub;