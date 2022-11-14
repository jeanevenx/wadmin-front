import http from "../http-common";

class CoinDataService {

    getAll(){
        return  http.get("/coins");
    }

    createCoin(coin){
        return http.post("/coins",coin);
    }

    getOne(id){
        return http.get(`/coins/${id}`);
    }

    updateData(id, coinData){
        return http.put(`/coins/${id}`, coinData);
    }

    deleteCoin(id){
        return http.delete(`/coins/${id}`);
    }


}

export default new CoinDataService();