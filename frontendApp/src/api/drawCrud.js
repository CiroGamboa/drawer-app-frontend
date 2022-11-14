import axios from 'axios';

const backendEndpoint = "http://localhost:8000";

const getAllDraws = (callback) => {
    axios.get(`${backendEndpoint}/draws/api`)
        .then(response => {
            callback(response.data);
        })
        .catch(error => alert(`Error: ${error}`));
}

const saveDraw = (draw) => {
    console.log(draw);
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

const updateDraw = () => {

}

const deleteDraw = () => {

}

export {getAllDraws, saveDraw, updateDraw, deleteDraw};

