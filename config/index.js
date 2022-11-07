const { MONGO_USER, MONGO_PASSWORD } = process.env;

const config = {
    production: {
        MONGO_URI: `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@ac-aoixpjs-shard-00-00.tcyz5x9.mongodb.net:27017,ac-aoixpjs-shard-00-01.tcyz5x9.mongodb.net:27017,ac-aoixpjs-shard-00-02.tcyz5x9.mongodb.net:27017/?ssl=true&replicaSet=atlas-h9krpm-shard-0&authSource=admin&retryWrites=true&w=majority`
        // MONGO_URI: `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@employee-api.tcyz5x9.mongodb.net/?retryWrites=true&w=majority`
    }
};

module.exports = config.production;
