mongo xflix --eval "db.dropDatabase()" 
mongoimport -d xflix -c datas --file backend/datas.json
