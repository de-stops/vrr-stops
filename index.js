const exportStops = require("efa-export-stops-by-coordinates");

const ENDPOINT_BASE_URL_TEMPLATE = "http://efa.vrr.de/vrrstd/XSLT_COORD_REQUEST?&jsonp=&boundingBox=&boundingBoxLU={minx}%3A{miny}%3AWGS84%5BDD.DDDDD%5D&boundingBoxRL={maxx}%3A{maxy}%3AWGS84%5BDD.DDDDD%5D&coordOutputFormat=WGS84%5BGGZHTXX%5D&type_1=STOP&outputFormat=json&inclFilter=1";

const DISTRICT_CODES = [
	"05111",
	"05112",
	"05113",
	"05114",
	"05116",
	"05117",
	"05119",
	"05120",
	"05122",
	"05124",
	"05154",
	"05158",
	"05162",
	"05166",
	"05170",
	"05512",
	"05513",
	"05562",
	"05911",
	"05913",
	"05914",
	"05916",
	"05954"
];

exportStops(ENDPOINT_BASE_URL_TEMPLATE, 5, 47, 15, 56, DISTRICT_CODES);