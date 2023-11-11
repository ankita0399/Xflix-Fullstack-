mongoimport --uri "mongodb://ac-haspn5x-shard-00-00.5hoadye.mongodb.net:27017,ac-haspn5x-shard-00-01.5hoadye.mongodb.net:27017,ac-haspn5x-shard-00-02.5hoadye.mongodb.net:27017/xflix?authSource=admin&compressors=disabled&gssapiServiceName=mongodb&replicaSet=atlas-gzfpp0-shard-0" --ssl --authenticationDatabase admin --username ankitakumari --password ankita123456 --drop --collection datas --file backend/datas.json


