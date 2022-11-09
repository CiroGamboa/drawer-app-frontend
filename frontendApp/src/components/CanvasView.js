import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";
import classNames from "../index.css";

class CanvasView extends Component {
    state = {
        color: "#ffc600",
        width: 400,
        height: 400,
        brushRadius: 10,
        lazyRadius: 12,
        backgroundImg: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Nepalese_Mhapuja_Mandala.jpg",
        imgs: [
          "https://upload.wikimedia.org/wikipedia/commons/a/a1/Nepalese_Mhapuja_Mandala.jpg",
          "https://i.imgur.com/a0CGGVC.jpg"
        ]
      };

      componentDidMount() {
        // let's change the color randomly every 2 seconds. fun!
        window.setInterval(() => {
          this.setState({
            color: "#" + Math.floor(Math.random() * 16777215).toString(16)
          });
        }, 2000);
    
        // let's change the background image every 2 seconds. fun!
        window.setInterval(() => {
          if (
            this.state.imgs &&
            this.state.imgs.length &&
            this.state.backgroundImg
          ) {
            let img = '';
            let imgs = this.state.imgs;
            for (let i = 0; i < imgs.length; i++) {
              if (this.state.backgroundImg !== imgs[i]) {
                img = imgs[i];
              }
            }
    
            this.setState({
              backgroundImg: img,
            });
          }
        }, 2000);
    }

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
            <p>
            The following is a disabled canvas with a hidden grid that we use to
            load & show your saved drawing.
            </p>
            <button
            onClick={() => {
                this.loadableCanvas.loadSaveData(
                localStorage.getItem("savedDrawing")
                );
            }}
            >
            Load what you saved previously into the following canvas. Either by
            calling `loadSaveData()` on the component's reference or passing it
            the `saveData` prop:
            </button>
            <CanvasDraw
            disabled
            hideGrid
            ref={canvasDraw => (this.loadableCanvas = canvasDraw)}
            saveData={localStorage.getItem("savedDrawing")}
        /></div>
        )
    }

}

export default CanvasView;