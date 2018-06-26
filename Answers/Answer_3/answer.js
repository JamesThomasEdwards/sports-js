class PubSub {
    constructor() {
        this.topics = {};
    }

    publish(namespace, payload) {
        let logs = this.topics[namespace];
        if (!logs) return;
        logs.forEach(log => {
            log.call(this, payload);
        });
    };

    subscribe(namespace, callback) {
        // subscribe to a publisher;
        let logs = this.topics[namespace];
        if (!!logs === false) {
            logs = this.topics[namespace] = [];
        };
        logs.push(callback);
    };

    unsubscribe(namespace, callback) {
        // unsubscribe to a publisher;
        let logs = this.topics[namespace];
        if (!!logs === false) return;
        var logsInd = logs.indexOf(callback);
        logs.splice(logsInd, 1);
    };
};

module.exports = PubSub;