import http from "../http-common";

class DishesDataService {
  getAll() {
    return http.get("/dishes");
  }

  getOne(id) {
    return http.get(`/dishes/${id}`);
  }

  createDish(data) {
    return http.post("/dishes", data);
  }

  updateDish(id, data) {
    data = JSON.stringify(data);
    return http.put(`/dishes/${id}`, data);
  }

  deleteDish(id) {
    return http.delete(`/dishes/${id}`);
  }

}

export default new DishesDataService();
