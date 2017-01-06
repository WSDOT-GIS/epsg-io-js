export interface CoordinateSystem {
  accuracy: number;
  proj4: string;
  code: string;
  name: string;
  area: string;
  bbox: number[];
  trans: number[] | Transformation[]
  wkt: string;
  kind: string;
  default_trans: number;
}

/**
 * A transformation result from epsg.io.
 */
export interface Transformation {
  proj4: string;
  name: string;
  area: string;
  bbox: number[];
  code_trans: number;
  wkt: string;
  accurace: number;
}