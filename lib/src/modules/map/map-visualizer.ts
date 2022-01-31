import { DownloadFormat } from "../../shared/download-format";
import { VisualizationConfiguration } from "../../shared/visualization-configuration";
import { VisualizationLayout } from "../../shared/visualization-layout";
declare let mapboxgl: any;

export class MapVisualization {
    private _data: any;
    private _config: VisualizationConfiguration;
    private _id: string;
    private _layout: VisualizationLayout;
    private _chart: any;
  
    setId(id: string) {
      this._id = id;
      return this;
    }
  
    // setType(type: ChartType) {
    //   this._type = type;
    //   return this;
    // }
  
    setData(data: any) {
      this._data = data;
      return this;
    }
  
    setConfig(config: VisualizationConfiguration) {
      this._config = config;
      return this;
    }
  
    draw() {
        try {

            console.log("Rendering Map1");
            console.log(this._config);
            let style = 'https://api.maptiler.com/maps/eef16200-c4cc-4285-9370-c71ca24bb42d/style.json?key=CH1cYDfxBV9ZBu1lHGqh';
            //declare let mapboxgl: any;
            mapboxgl.accessToken = 'pk.eyJ1IjoiaWJyYWhpbXdpY2thbWEiLCJhIjoiY2txM3Y2bXJ1MTJoZjJ2cXI1ZW9pdGg2biJ9.RZjlqK5FxQkQuFrh5lZm_g';
            let map = new mapboxgl.Map({
              container: this._id,
              style: style,
              center: [this._config.longitude, this._config.latitude],
              zoom: this._config.zoom,
            });
            // Add zoom and rotation controls to the map.
            map.addControl(new mapboxgl.NavigationControl());
            //this.map = map;
          } catch (e) {
            console.log(e);
          }
    }
  
    download(downloadFormat: DownloadFormat) {
      const filename = this._config?.name || 'chart-data';
      switch (downloadFormat) {
        case 'PNG':
          this._chart.exportChart({ filename, type: 'image/png' });
          break;
        case 'CSV':
          this._chart.getCSV();
          break;
      }
    }
  }
  