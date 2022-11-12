import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";
import classNames from "../index.css";
import axios from "axios";

class DrawingCanvas extends Component {
    state = {
        title: "New distribution",
        color: "#154c79",
        width: 800,
        height: 400,
        brushRadius: 5,
        lazyRadius: 12
      };

      componentDidMount() {}

    render() {
        return (
        <div>
          <p>Try it out! Draw something, hit "Save" and then "Load".</p>
            <div className={classNames.tools}>
            <button
                onClick={() => {
                localStorage.setItem(
                    "savedDrawing",
                    this.saveableCanvas.getSaveData()
                );
                console.log(this.saveableCanvas.getSaveData());

                axios.post('http://127.0.0.1:8000/draws/api', {
                    draw_title: this.state.title,
                    draw_payload: this.saveableCanvas.getSaveData()
                  })
                  .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
                }}
            >
                Save
            </button>
            <button
                onClick={() => {
                this.saveableCanvas.eraseAll();
                }}
            >
                Erase
            </button>
            <button
                onClick={() => {
                this.saveableCanvas.undo();
                }}
            >
                Undo
            </button>
            <button
                onClick={() => {
                console.log(this.saveableCanvas.getDataURL());
                alert("DataURL written to console")
                }}
            >
                GetDataURL
            </button>
            <div>
                <label>Title</label>
                <input
                type="text"
                value={this.state.title}
                onChange={e =>
                    this.setState({ title: e.target.value })
                }
                />
            </div>
            <div>
                <label>Width:</label>
                <input
                type="number"
                value={this.state.width}
                onChange={e =>
                    this.setState({ width: parseInt(e.target.value, 10) })
                }
                />
            </div>
            <div>
                <label>Height:</label>
                <input
                type="number"
                value={this.state.height}
                onChange={e =>
                    this.setState({ height: parseInt(e.target.value, 10) })
                }
                />
            </div>
            <div>
                <label>Brush-Radius:</label>
                <input
                type="number"
                value={this.state.brushRadius}
                onChange={e =>
                    this.setState({ brushRadius: parseInt(e.target.value, 10) })
                }
                />
            </div>
            <div>
                <label>Lazy-Radius:</label>
                <input
                type="number"
                value={this.state.lazyRadius}
                onChange={e =>
                    this.setState({ lazyRadius: parseInt(e.target.value, 10) })
                }
                />
            </div>
            </div>
            <CanvasDraw
                ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
                brushColor={this.state.color}
                brushRadius={this.state.brushRadius}
                lazyRadius={this.state.lazyRadius}
                canvasWidth={this.state.width}
                canvasHeight={this.state.height}
            />
            </div>
        )
    }
}

export default DrawingCanvas;