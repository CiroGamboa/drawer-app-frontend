import axios from 'axios';

const backendEndpoint = "http://localhost:8000";

const getAllDraws = (callback) => {
    axios.get(`${backendEndpoint}/draws/api`)
        .then(response => {
            callback(response.data);
        })
        .catch(error => alert(`Error: ${error}`));
}

const createDraw = (draw) => {
  axios.post(`${backendEndpoint}/draws/api`, {
      draw_title: draw.title,
      draw_payload: draw.payload
    })
    .then(function (response) {
      if(response.status === 201) {
          alert("Saved successfully");
      }
    })
    .catch(function (error) {
      alert(`Error: ${error}`);
    });
}

const updateDraw = (draw, id) => {
  axios.put(`${backendEndpoint}/draws/api/${id}/`, {
    draw_title: draw.title,
    draw_payload: draw.payload
  })
  .then(function (response) {
    if(response.status === 200) {
        alert("Updated successfully");
    }
  })
  .catch(function (error) {
    alert(`Error: ${error}`);
  });
}

const deleteDraw = (callback,id) => {
  axios.delete(`${backendEndpoint}/draws/api/${id}/`)
  .then(response => {
      if(response.status === 200) {
        alert("Deleted successfully");
        callback();
  }
  })
  .catch(error => alert(`Error: ${error}`));
}

export {getAllDraws, createDraw, updateDraw, deleteDraw};

