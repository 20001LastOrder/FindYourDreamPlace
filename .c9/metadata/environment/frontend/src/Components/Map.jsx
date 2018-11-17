{"filter":false,"title":"Map.jsx","tooltip":"/frontend/src/Components/Map.jsx","undoManager":{"mark":79,"position":79,"stack":[[{"start":{"row":0,"column":0},"end":{"row":34,"column":29},"action":"insert","lines":["const { compose, withProps } = require(\"recompose\");","const {","  withScriptjs,","  withGoogleMap,","  GoogleMap,","  FusionTablesLayer,","} = require(\"react-google-maps\");","","const MapWithAFusionTablesLayer = compose(","  withProps({","    googleMapURL: \"https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places\",","    loadingElement: <div style={{ height: `100%` }} />,","    containerElement: <div style={{ height: `400px` }} />,","    mapElement: <div style={{ height: `100%` }} />,","  }),","  withScriptjs,","  withGoogleMap",")(props =>","  <GoogleMap","    defaultZoom={11}","    defaultCenter={{ lat: 41.850033, lng: -87.6500523 }}","  >","    <FusionTablesLayer","      url=\"http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml\"","      options={{","        query: {","          select: `Geocodable address`,","          from: `1mZ53Z70NsChnBMm-qEYmSDOvLXgrreLTkQUvvg`","        }","      }}","    />","  </GoogleMap>",");","","<MapWithAFusionTablesLayer />"],"id":1}],[{"start":{"row":8,"column":0},"end":{"row":34,"column":29},"action":"remove","lines":["const MapWithAFusionTablesLayer = compose(","  withProps({","    googleMapURL: \"https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places\",","    loadingElement: <div style={{ height: `100%` }} />,","    containerElement: <div style={{ height: `400px` }} />,","    mapElement: <div style={{ height: `100%` }} />,","  }),","  withScriptjs,","  withGoogleMap",")(props =>","  <GoogleMap","    defaultZoom={11}","    defaultCenter={{ lat: 41.850033, lng: -87.6500523 }}","  >","    <FusionTablesLayer","      url=\"http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml\"","      options={{","        query: {","          select: `Geocodable address`,","          from: `1mZ53Z70NsChnBMm-qEYmSDOvLXgrreLTkQUvvg`","        }","      }}","    />","  </GoogleMap>",");","","<MapWithAFusionTablesLayer />"],"id":2},{"start":{"row":7,"column":0},"end":{"row":8,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":7,"column":0},"action":"remove","lines":["const { compose, withProps } = require(\"recompose\");","const {","  withScriptjs,","  withGoogleMap,","  GoogleMap,","  FusionTablesLayer,","} = require(\"react-google-maps\");",""],"id":3},{"start":{"row":0,"column":0},"end":{"row":10,"column":52},"action":"insert","lines":["import { GoogleMap, Marker } from \"react-google-maps\"","","const MyMapComponent = (props) =>","  <GoogleMap","    defaultZoom={8}","    defaultCenter={{ lat: -34.397, lng: 150.644 }}","  >","    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}","  </GoogleMap>","","<MyMapComponent isMarkerShown />// Map with a Marker"]}],[{"start":{"row":10,"column":0},"end":{"row":10,"column":1},"action":"insert","lines":["e"],"id":4},{"start":{"row":10,"column":1},"end":{"row":10,"column":2},"action":"insert","lines":["x"]},{"start":{"row":10,"column":2},"end":{"row":10,"column":3},"action":"insert","lines":["p"]},{"start":{"row":10,"column":3},"end":{"row":10,"column":4},"action":"insert","lines":["o"]},{"start":{"row":10,"column":4},"end":{"row":10,"column":5},"action":"insert","lines":["e"]},{"start":{"row":10,"column":5},"end":{"row":10,"column":6},"action":"insert","lines":["r"]},{"start":{"row":10,"column":6},"end":{"row":10,"column":7},"action":"insert","lines":["t"]}],[{"start":{"row":10,"column":7},"end":{"row":10,"column":8},"action":"insert","lines":[" "],"id":5}],[{"start":{"row":10,"column":7},"end":{"row":10,"column":8},"action":"remove","lines":[" "],"id":6},{"start":{"row":10,"column":6},"end":{"row":10,"column":7},"action":"remove","lines":["t"]},{"start":{"row":10,"column":5},"end":{"row":10,"column":6},"action":"remove","lines":["r"]},{"start":{"row":10,"column":4},"end":{"row":10,"column":5},"action":"remove","lines":["e"]}],[{"start":{"row":10,"column":4},"end":{"row":10,"column":5},"action":"insert","lines":["r"],"id":7},{"start":{"row":10,"column":5},"end":{"row":10,"column":6},"action":"insert","lines":["t"]}],[{"start":{"row":10,"column":6},"end":{"row":10,"column":7},"action":"insert","lines":[" "],"id":8}],[{"start":{"row":10,"column":7},"end":{"row":10,"column":8},"action":"insert","lines":["x"],"id":9},{"start":{"row":10,"column":8},"end":{"row":10,"column":9},"action":"insert","lines":["o"]},{"start":{"row":10,"column":9},"end":{"row":10,"column":10},"action":"insert","lines":["n"]},{"start":{"row":10,"column":10},"end":{"row":10,"column":11},"action":"insert","lines":["s"]}],[{"start":{"row":10,"column":10},"end":{"row":10,"column":11},"action":"remove","lines":["s"],"id":10},{"start":{"row":10,"column":9},"end":{"row":10,"column":10},"action":"remove","lines":["n"]},{"start":{"row":10,"column":8},"end":{"row":10,"column":9},"action":"remove","lines":["o"]}],[{"start":{"row":10,"column":8},"end":{"row":10,"column":9},"action":"insert","lines":["d"],"id":11}],[{"start":{"row":10,"column":8},"end":{"row":10,"column":9},"action":"remove","lines":["d"],"id":12},{"start":{"row":10,"column":7},"end":{"row":10,"column":8},"action":"remove","lines":["x"]}],[{"start":{"row":10,"column":7},"end":{"row":10,"column":8},"action":"insert","lines":["d"],"id":13},{"start":{"row":10,"column":8},"end":{"row":10,"column":9},"action":"insert","lines":["e"]},{"start":{"row":10,"column":9},"end":{"row":10,"column":10},"action":"insert","lines":["f"]},{"start":{"row":10,"column":10},"end":{"row":10,"column":11},"action":"insert","lines":["a"]}],[{"start":{"row":10,"column":11},"end":{"row":10,"column":12},"action":"insert","lines":["\\"],"id":14}],[{"start":{"row":10,"column":12},"end":{"row":10,"column":13},"action":"insert","lines":[" "],"id":15}],[{"start":{"row":10,"column":12},"end":{"row":10,"column":13},"action":"remove","lines":[" "],"id":16},{"start":{"row":10,"column":11},"end":{"row":10,"column":12},"action":"remove","lines":["\\"]}],[{"start":{"row":10,"column":11},"end":{"row":10,"column":12},"action":"insert","lines":["u"],"id":17},{"start":{"row":10,"column":12},"end":{"row":10,"column":13},"action":"insert","lines":["l"]},{"start":{"row":10,"column":13},"end":{"row":10,"column":14},"action":"insert","lines":["t"]}],[{"start":{"row":10,"column":14},"end":{"row":10,"column":15},"action":"insert","lines":[" "],"id":18},{"start":{"row":10,"column":15},"end":{"row":10,"column":16},"action":"insert","lines":["c"]},{"start":{"row":10,"column":16},"end":{"row":10,"column":17},"action":"insert","lines":["o"]},{"start":{"row":10,"column":17},"end":{"row":10,"column":18},"action":"insert","lines":["n"]},{"start":{"row":10,"column":18},"end":{"row":10,"column":19},"action":"insert","lines":["s"]},{"start":{"row":10,"column":19},"end":{"row":10,"column":20},"action":"insert","lines":["t"]},{"start":{"row":10,"column":20},"end":{"row":10,"column":21},"action":"insert","lines":[" "]}],[{"start":{"row":10,"column":21},"end":{"row":10,"column":22},"action":"insert","lines":["M"],"id":19},{"start":{"row":10,"column":22},"end":{"row":10,"column":23},"action":"insert","lines":["a"]},{"start":{"row":10,"column":23},"end":{"row":10,"column":24},"action":"insert","lines":["p"]}],[{"start":{"row":10,"column":24},"end":{"row":10,"column":25},"action":"insert","lines":[" "],"id":20},{"start":{"row":10,"column":25},"end":{"row":10,"column":26},"action":"insert","lines":["="]}],[{"start":{"row":10,"column":26},"end":{"row":10,"column":27},"action":"insert","lines":[" "],"id":21}],[{"start":{"row":10,"column":59},"end":{"row":10,"column":60},"action":"insert","lines":[";"],"id":22}],[{"start":{"row":10,"column":0},"end":{"row":10,"column":15},"action":"remove","lines":["export default "],"id":23},{"start":{"row":10,"column":65},"end":{"row":10,"column":80},"action":"insert","lines":["export default "]}],[{"start":{"row":10,"column":65},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":24}],[{"start":{"row":11,"column":15},"end":{"row":11,"column":16},"action":"insert","lines":["M"],"id":25},{"start":{"row":11,"column":16},"end":{"row":11,"column":17},"action":"insert","lines":["a"]},{"start":{"row":11,"column":17},"end":{"row":11,"column":18},"action":"insert","lines":["p"]},{"start":{"row":11,"column":18},"end":{"row":11,"column":19},"action":"insert","lines":[";"]}],[{"start":{"row":0,"column":53},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":26},{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"insert","lines":["i"]},{"start":{"row":1,"column":1},"end":{"row":1,"column":2},"action":"insert","lines":["m"]},{"start":{"row":1,"column":2},"end":{"row":1,"column":3},"action":"insert","lines":["p"]},{"start":{"row":1,"column":3},"end":{"row":1,"column":4},"action":"insert","lines":["o"]},{"start":{"row":1,"column":4},"end":{"row":1,"column":5},"action":"insert","lines":["e"]},{"start":{"row":1,"column":5},"end":{"row":1,"column":6},"action":"insert","lines":["r"]},{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"insert","lines":["t"]}],[{"start":{"row":1,"column":7},"end":{"row":1,"column":8},"action":"insert","lines":[" "],"id":27}],[{"start":{"row":1,"column":7},"end":{"row":1,"column":8},"action":"remove","lines":[" "],"id":28},{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"remove","lines":["t"]},{"start":{"row":1,"column":5},"end":{"row":1,"column":6},"action":"remove","lines":["r"]},{"start":{"row":1,"column":4},"end":{"row":1,"column":5},"action":"remove","lines":["e"]}],[{"start":{"row":1,"column":4},"end":{"row":1,"column":5},"action":"insert","lines":["r"],"id":29},{"start":{"row":1,"column":5},"end":{"row":1,"column":6},"action":"insert","lines":["t"]}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":6},"action":"remove","lines":["import"],"id":30},{"start":{"row":1,"column":0},"end":{"row":1,"column":48},"action":"insert","lines":["import React, {Component, Fragment} from \"react\""]}],[{"start":{"row":11,"column":41},"end":{"row":11,"column":42},"action":"insert","lines":["="],"id":31},{"start":{"row":11,"column":42},"end":{"row":11,"column":43},"action":"insert","lines":["{"]},{"start":{"row":11,"column":43},"end":{"row":11,"column":44},"action":"insert","lines":["}"]}],[{"start":{"row":11,"column":42},"end":{"row":11,"column":44},"action":"remove","lines":["{}"],"id":32},{"start":{"row":11,"column":41},"end":{"row":11,"column":42},"action":"remove","lines":["="]}],[{"start":{"row":11,"column":8},"end":{"row":11,"column":9},"action":"remove","lines":["p"],"id":33},{"start":{"row":11,"column":7},"end":{"row":11,"column":8},"action":"remove","lines":["a"]},{"start":{"row":11,"column":6},"end":{"row":11,"column":7},"action":"remove","lines":["M"]},{"start":{"row":11,"column":5},"end":{"row":11,"column":6},"action":"remove","lines":[" "]},{"start":{"row":11,"column":4},"end":{"row":11,"column":5},"action":"remove","lines":["t"]},{"start":{"row":11,"column":3},"end":{"row":11,"column":4},"action":"remove","lines":["s"]},{"start":{"row":11,"column":2},"end":{"row":11,"column":3},"action":"remove","lines":["n"]},{"start":{"row":11,"column":1},"end":{"row":11,"column":2},"action":"remove","lines":["o"]},{"start":{"row":11,"column":0},"end":{"row":11,"column":1},"action":"remove","lines":["c"]}],[{"start":{"row":11,"column":0},"end":{"row":11,"column":1},"action":"insert","lines":["c"],"id":34},{"start":{"row":11,"column":1},"end":{"row":11,"column":2},"action":"insert","lines":["l"]},{"start":{"row":11,"column":2},"end":{"row":11,"column":3},"action":"insert","lines":["a"]},{"start":{"row":11,"column":3},"end":{"row":11,"column":4},"action":"insert","lines":["s"]}],[{"start":{"row":11,"column":4},"end":{"row":11,"column":5},"action":"insert","lines":[" "],"id":35}],[{"start":{"row":11,"column":4},"end":{"row":11,"column":5},"action":"remove","lines":[" "],"id":36}],[{"start":{"row":11,"column":4},"end":{"row":11,"column":5},"action":"insert","lines":["s"],"id":37}],[{"start":{"row":11,"column":5},"end":{"row":11,"column":6},"action":"insert","lines":[" "],"id":38},{"start":{"row":11,"column":6},"end":{"row":11,"column":7},"action":"insert","lines":["M"]},{"start":{"row":11,"column":7},"end":{"row":11,"column":8},"action":"insert","lines":["a"]},{"start":{"row":11,"column":8},"end":{"row":11,"column":9},"action":"insert","lines":["o"]}],[{"start":{"row":11,"column":9},"end":{"row":11,"column":10},"action":"insert","lines":[" "],"id":39}],[{"start":{"row":11,"column":9},"end":{"row":11,"column":10},"action":"remove","lines":[" "],"id":40},{"start":{"row":11,"column":8},"end":{"row":11,"column":9},"action":"remove","lines":["o"]}],[{"start":{"row":11,"column":8},"end":{"row":11,"column":10},"action":"insert","lines":["[]"],"id":41}],[{"start":{"row":11,"column":8},"end":{"row":11,"column":10},"action":"remove","lines":["[]"],"id":42}],[{"start":{"row":11,"column":8},"end":{"row":11,"column":9},"action":"insert","lines":["p"],"id":43}],[{"start":{"row":11,"column":9},"end":{"row":11,"column":10},"action":"insert","lines":[" "],"id":44},{"start":{"row":11,"column":10},"end":{"row":11,"column":11},"action":"insert","lines":["e"]},{"start":{"row":11,"column":11},"end":{"row":11,"column":12},"action":"insert","lines":["x"]}],[{"start":{"row":11,"column":10},"end":{"row":11,"column":12},"action":"remove","lines":["ex"],"id":45},{"start":{"row":11,"column":10},"end":{"row":11,"column":17},"action":"insert","lines":["extends"]}],[{"start":{"row":11,"column":17},"end":{"row":11,"column":18},"action":"insert","lines":[" "],"id":46},{"start":{"row":11,"column":18},"end":{"row":11,"column":19},"action":"insert","lines":["C"]},{"start":{"row":11,"column":19},"end":{"row":11,"column":20},"action":"insert","lines":["o"]},{"start":{"row":11,"column":20},"end":{"row":11,"column":21},"action":"insert","lines":["m"]}],[{"start":{"row":11,"column":18},"end":{"row":11,"column":21},"action":"remove","lines":["Com"],"id":47},{"start":{"row":11,"column":18},"end":{"row":11,"column":21},"action":"insert","lines":["Com"]}],[{"start":{"row":11,"column":21},"end":{"row":11,"column":22},"action":"insert","lines":["p"],"id":48}],[{"start":{"row":11,"column":18},"end":{"row":11,"column":22},"action":"remove","lines":["Comp"],"id":49},{"start":{"row":11,"column":18},"end":{"row":11,"column":27},"action":"insert","lines":["Component"]}],[{"start":{"row":11,"column":27},"end":{"row":11,"column":28},"action":"insert","lines":[" "],"id":50},{"start":{"row":11,"column":28},"end":{"row":11,"column":29},"action":"insert","lines":["{"]}],[{"start":{"row":11,"column":29},"end":{"row":11,"column":30},"action":"remove","lines":[" "],"id":51},{"start":{"row":11,"column":29},"end":{"row":12,"column":0},"action":"insert","lines":["",""]},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":12,"column":59},"end":{"row":13,"column":0},"action":"insert","lines":["",""],"id":52},{"start":{"row":13,"column":0},"end":{"row":13,"column":4},"action":"insert","lines":["    "]},{"start":{"row":13,"column":4},"end":{"row":13,"column":5},"action":"insert","lines":["}"]},{"start":{"row":13,"column":0},"end":{"row":13,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":11,"column":29},"end":{"row":12,"column":0},"action":"insert","lines":["",""],"id":53},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":12,"column":4},"end":{"row":12,"column":5},"action":"insert","lines":["r"],"id":54},{"start":{"row":12,"column":5},"end":{"row":12,"column":6},"action":"insert","lines":["e"]},{"start":{"row":12,"column":6},"end":{"row":12,"column":7},"action":"insert","lines":["n"]},{"start":{"row":12,"column":7},"end":{"row":12,"column":8},"action":"insert","lines":["d"]},{"start":{"row":12,"column":8},"end":{"row":12,"column":9},"action":"insert","lines":["e"]},{"start":{"row":12,"column":9},"end":{"row":12,"column":10},"action":"insert","lines":["r"]}],[{"start":{"row":12,"column":10},"end":{"row":12,"column":12},"action":"insert","lines":["()"],"id":55}],[{"start":{"row":12,"column":12},"end":{"row":12,"column":13},"action":"insert","lines":["{"],"id":56}],[{"start":{"row":12,"column":13},"end":{"row":14,"column":5},"action":"insert","lines":["","        ","    }"],"id":57}],[{"start":{"row":15,"column":6},"end":{"row":15,"column":59},"action":"remove","lines":["<MyMapComponent isMarkerShown />;// Map with a Marker"],"id":58},{"start":{"row":13,"column":8},"end":{"row":13,"column":61},"action":"insert","lines":["<MyMapComponent isMarkerShown />;// Map with a Marker"]}],[{"start":{"row":15,"column":5},"end":{"row":15,"column":6},"action":"remove","lines":[" "],"id":59},{"start":{"row":15,"column":4},"end":{"row":15,"column":5},"action":"remove","lines":["="]},{"start":{"row":15,"column":0},"end":{"row":15,"column":4},"action":"remove","lines":["    "]},{"start":{"row":14,"column":5},"end":{"row":15,"column":0},"action":"remove","lines":["",""]},{"start":{"row":14,"column":4},"end":{"row":14,"column":5},"action":"remove","lines":["}"]}],[{"start":{"row":14,"column":4},"end":{"row":14,"column":5},"action":"insert","lines":["}"],"id":60}],[{"start":{"row":12,"column":12},"end":{"row":12,"column":13},"action":"remove","lines":["{"],"id":61}],[{"start":{"row":12,"column":12},"end":{"row":12,"column":13},"action":"insert","lines":["{"],"id":62}],[{"start":{"row":13,"column":8},"end":{"row":13,"column":9},"action":"insert","lines":["r"],"id":63},{"start":{"row":13,"column":9},"end":{"row":13,"column":10},"action":"insert","lines":["e"]},{"start":{"row":13,"column":10},"end":{"row":13,"column":11},"action":"insert","lines":["t"]},{"start":{"row":13,"column":11},"end":{"row":13,"column":12},"action":"insert","lines":["u"]},{"start":{"row":13,"column":12},"end":{"row":13,"column":13},"action":"insert","lines":["r"]},{"start":{"row":13,"column":13},"end":{"row":13,"column":14},"action":"insert","lines":["n"]},{"start":{"row":13,"column":14},"end":{"row":13,"column":15},"action":"insert","lines":[" "]}],[{"start":{"row":0,"column":0},"end":{"row":16,"column":19},"action":"remove","lines":["import { GoogleMap, Marker } from \"react-google-maps\"","import React, {Component, Fragment} from \"react\"","","const MyMapComponent = (props) =>","  <GoogleMap","    defaultZoom={8}","    defaultCenter={{ lat: -34.397, lng: 150.644 }}","  >","    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}","  </GoogleMap>","","class Map extends Component {","    render(){","        return <MyMapComponent isMarkerShown />;// Map with a Marker","    }","}","export default Map;"],"id":64},{"start":{"row":0,"column":0},"end":{"row":74,"column":11},"action":"insert","lines":["const fetch = require(\"isomorphic-fetch\");","const { compose, withProps, withHandlers } = require(\"recompose\");","const {","  withScriptjs,","  withGoogleMap,","  GoogleMap,","  Marker,","} = require(\"react-google-maps\");","const { MarkerClusterer } = require(\"react-google-maps/lib/components/addons/MarkerClusterer\");","","const MapWithAMarkerClusterer = compose(","  withProps({","    googleMapURL: \"https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places\",","    loadingElement: <div style={{ height: `100%` }} />,","    containerElement: <div style={{ height: `400px` }} />,","    mapElement: <div style={{ height: `100%` }} />,","  }),","  withHandlers({","    onMarkerClustererClick: () => (markerClusterer) => {","      const clickedMarkers = markerClusterer.getMarkers()","      console.log(`Current clicked markers length: ${clickedMarkers.length}`)","      console.log(clickedMarkers)","    },","  }),","  withScriptjs,","  withGoogleMap",")(props =>","  <GoogleMap","    defaultZoom={3}","    defaultCenter={{ lat: 25.0391667, lng: 121.525 }}","  >","    <MarkerClusterer","      onClick={props.onMarkerClustererClick}","      averageCenter","      enableRetinaIcons","      gridSize={60}","    >","      {props.markers.map(marker => (","        <Marker","          key={marker.photo_id}","          position={{ lat: marker.latitude, lng: marker.longitude }}","        />","      ))}","    </MarkerClusterer>","  </GoogleMap>",");","","class DemoApp extends React.PureComponent {","  componentWillMount() {","    this.setState({ markers: [] })","  }","","  componentDidMount() {","    const url = [","      // Length issue","      `https://gist.githubusercontent.com`,","      `/farrrr/dfda7dd7fccfec5474d3`,","      `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`","    ].join(\"\")","","    fetch(url)","      .then(res => res.json())","      .then(data => {","        this.setState({ markers: data.photos });","      });","  }","","  render() {","    return (","      <MapWithAMarkerClusterer markers={this.state.markers} />","    )","  }","}","","<DemoApp />"]}],[{"start":{"row":74,"column":10},"end":{"row":74,"column":11},"action":"remove","lines":[">"],"id":65},{"start":{"row":74,"column":9},"end":{"row":74,"column":10},"action":"remove","lines":["/"]},{"start":{"row":74,"column":8},"end":{"row":74,"column":9},"action":"remove","lines":[" "]},{"start":{"row":74,"column":7},"end":{"row":74,"column":8},"action":"remove","lines":["p"]},{"start":{"row":74,"column":6},"end":{"row":74,"column":7},"action":"remove","lines":["p"]},{"start":{"row":74,"column":5},"end":{"row":74,"column":6},"action":"remove","lines":["A"]},{"start":{"row":74,"column":4},"end":{"row":74,"column":5},"action":"remove","lines":["o"]},{"start":{"row":74,"column":3},"end":{"row":74,"column":4},"action":"remove","lines":["m"]},{"start":{"row":74,"column":2},"end":{"row":74,"column":3},"action":"remove","lines":["e"]},{"start":{"row":74,"column":1},"end":{"row":74,"column":2},"action":"remove","lines":["D"]}],[{"start":{"row":74,"column":0},"end":{"row":74,"column":1},"action":"remove","lines":["<"],"id":66}],[{"start":{"row":74,"column":0},"end":{"row":74,"column":1},"action":"insert","lines":["e"],"id":67},{"start":{"row":74,"column":1},"end":{"row":74,"column":2},"action":"insert","lines":["x"]},{"start":{"row":74,"column":2},"end":{"row":74,"column":3},"action":"insert","lines":["p"]},{"start":{"row":74,"column":3},"end":{"row":74,"column":4},"action":"insert","lines":["o"]},{"start":{"row":74,"column":4},"end":{"row":74,"column":5},"action":"insert","lines":["e"]},{"start":{"row":74,"column":5},"end":{"row":74,"column":6},"action":"insert","lines":["r"]},{"start":{"row":74,"column":6},"end":{"row":74,"column":7},"action":"insert","lines":["t"]}],[{"start":{"row":74,"column":7},"end":{"row":74,"column":8},"action":"insert","lines":[" "],"id":68}],[{"start":{"row":74,"column":7},"end":{"row":74,"column":8},"action":"remove","lines":[" "],"id":69},{"start":{"row":74,"column":6},"end":{"row":74,"column":7},"action":"remove","lines":["t"]},{"start":{"row":74,"column":5},"end":{"row":74,"column":6},"action":"remove","lines":["r"]},{"start":{"row":74,"column":4},"end":{"row":74,"column":5},"action":"remove","lines":["e"]}],[{"start":{"row":74,"column":4},"end":{"row":74,"column":5},"action":"insert","lines":["r"],"id":70},{"start":{"row":74,"column":5},"end":{"row":74,"column":6},"action":"insert","lines":["t"]}],[{"start":{"row":74,"column":6},"end":{"row":74,"column":7},"action":"insert","lines":[" "],"id":71},{"start":{"row":74,"column":7},"end":{"row":74,"column":8},"action":"insert","lines":["d"]},{"start":{"row":74,"column":8},"end":{"row":74,"column":9},"action":"insert","lines":["e"]},{"start":{"row":74,"column":9},"end":{"row":74,"column":10},"action":"insert","lines":["e"]}],[{"start":{"row":74,"column":9},"end":{"row":74,"column":10},"action":"remove","lines":["e"],"id":72}],[{"start":{"row":74,"column":9},"end":{"row":74,"column":10},"action":"insert","lines":["f"],"id":73},{"start":{"row":74,"column":10},"end":{"row":74,"column":11},"action":"insert","lines":["a"]},{"start":{"row":74,"column":11},"end":{"row":74,"column":12},"action":"insert","lines":["u"]},{"start":{"row":74,"column":12},"end":{"row":74,"column":13},"action":"insert","lines":["l"]},{"start":{"row":74,"column":13},"end":{"row":74,"column":14},"action":"insert","lines":["t"]},{"start":{"row":74,"column":14},"end":{"row":74,"column":15},"action":"insert","lines":[" "]}],[{"start":{"row":74,"column":15},"end":{"row":74,"column":16},"action":"insert","lines":["D"],"id":74},{"start":{"row":74,"column":16},"end":{"row":74,"column":17},"action":"insert","lines":["e"]},{"start":{"row":74,"column":17},"end":{"row":74,"column":18},"action":"insert","lines":["m"]}],[{"start":{"row":74,"column":15},"end":{"row":74,"column":18},"action":"remove","lines":["Dem"],"id":75},{"start":{"row":74,"column":15},"end":{"row":74,"column":24},"action":"insert","lines":["DemoApp()"]}],[{"start":{"row":74,"column":22},"end":{"row":74,"column":24},"action":"remove","lines":["()"],"id":76}],[{"start":{"row":74,"column":22},"end":{"row":74,"column":23},"action":"insert","lines":[";"],"id":77}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":78}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":48},"action":"insert","lines":["import React, {Component, Fragment} from \"react\""],"id":79}],[{"start":{"row":0,"column":48},"end":{"row":0,"column":49},"action":"insert","lines":[";"],"id":81}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":49},"end":{"row":0,"column":49},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1542484388286,"hash":"5f20fbf4a533f23dd30e79f4da24727c4ca35a06"}