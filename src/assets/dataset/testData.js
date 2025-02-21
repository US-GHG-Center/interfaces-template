export const testData = [
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T18:01:00Z',
    bbox: [
      -104.05592607423101, 31.603935693136833, -103.94719869425685,
      31.697130590257547,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T18:01:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T18:01:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T18:01:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -104.05592607423101, 31.603935693136833, -103.94719869425685,
          31.697130590257547,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [6, 7],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.11519252942615393,
              min: 0.021999548698559218,
              count: 11,
              buckets: [2, 3, 2, 1, 1, 0, 2, 2, 1, 2],
            },
            statistics: {
              mean: 0.0651174719845713,
              stddev: 0.02977607649044455,
              maximum: 0.11519252942615393,
              minimum: 0.021999548698559218,
              valid_percent: 38.095238095238095,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-104.05592607423101, 31.603935693136833],
              [-103.94719869425685, 31.603935693136833],
              [-103.94719869425685, 31.697130590257547],
              [-104.05592607423101, 31.697130590257547],
              [-104.05592607423101, 31.603935693136833],
            ],
          ],
        },
        'proj:transform': [
          0.015532482853451768, 0, -104.05592607423101, 0,
          -0.015532482853452479, 31.697130590257547, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T18:01:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-104.05592607423101, 31.603935693136833],
          [-103.94719869425685, 31.603935693136833],
          [-103.94719869425685, 31.697130590257547],
          [-104.05592607423101, 31.697130590257547],
          [-104.05592607423101, 31.603935693136833],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2023-07-26T18:01:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:56:00Z',
    bbox: [
      -104.05104787058914, 31.59114634063836, -103.94137575810493,
      31.685151008481988,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:56:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:56:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:56:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -104.05104787058914, 31.59114634063836, -103.94137575810493,
          31.685151008481988,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [6, 7],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.12692748631530149,
              min: -0.015079360299272038,
              count: 11,
              buckets: [1, 2, 2, 1, 4, 1, 3, 2, 1, 1],
            },
            statistics: {
              mean: 0.052690981725179734,
              stddev: 0.03744786923831551,
              maximum: 0.12692748631530149,
              minimum: -0.015079360299272038,
              valid_percent: 42.857142857142854,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-104.05104787058914, 31.59114634063836],
              [-103.94137575810493, 31.59114634063836],
              [-103.94137575810493, 31.685151008481988],
              [-104.05104787058914, 31.685151008481988],
              [-104.05104787058914, 31.59114634063836],
            ],
          ],
        },
        'proj:transform': [
          0.015667444640603396, 0, -104.05104787058914, 0,
          -0.015667444640604343, 31.685151008481988, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:56:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-104.05104787058914, 31.59114634063836],
          [-103.94137575810493, 31.59114634063836],
          [-103.94137575810493, 31.685151008481988],
          [-104.05104787058914, 31.685151008481988],
          [-104.05104787058914, 31.59114634063836],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2023-07-26T17:56:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:51:00Z',
    bbox: [
      -104.05104787058914, 31.606424968827277, -103.9250862071416,
      31.685151008481988,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:51:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:51:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:51:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -104.05104787058914, 31.606424968827277, -103.9250862071416,
          31.685151008481988,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [5, 8],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.11242578810729337,
              min: -0.026331971150975145,
              count: 11,
              buckets: [1, 1, 0, 2, 4, 7, 2, 5, 1, 1],
            },
            statistics: {
              mean: 0.05114644276164349,
              stddev: 0.029825939989325808,
              maximum: 0.11242578810729337,
              minimum: -0.026331971150975145,
              valid_percent: 60,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-104.05104787058914, 31.606424968827277],
              [-103.9250862071416, 31.606424968827277],
              [-103.9250862071416, 31.685151008481988],
              [-104.05104787058914, 31.685151008481988],
              [-104.05104787058914, 31.606424968827277],
            ],
          ],
        },
        'proj:transform': [
          0.015745207930941824, 0, -104.05104787058914, 0,
          -0.015745207930942584, 31.685151008481988, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:51:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-104.05104787058914, 31.606424968827277],
          [-103.9250862071416, 31.606424968827277],
          [-103.9250862071416, 31.685151008481988],
          [-104.05104787058914, 31.685151008481988],
          [-104.05104787058914, 31.606424968827277],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2023-07-26T17:51:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:46:00Z',
    bbox: [
      -104.04617387587328, 31.610423471418034, -103.92067284963908,
      31.673173984535133,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:46:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:46:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:46:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -104.04617387587328, 31.610423471418034, -103.92067284963908,
          31.673173984535133,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [4, 8],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.10316773581034665,
              min: -0.000048315428240595926,
              count: 11,
              buckets: [1, 3, 2, 2, 0, 2, 3, 2, 2, 2],
            },
            statistics: {
              mean: 0.05252885671351501,
              stddev: 0.029969455635682773,
              maximum: 0.10316773581034665,
              minimum: -0.000048315428240595926,
              valid_percent: 59.375,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-104.04617387587328, 31.610423471418034],
              [-103.92067284963908, 31.610423471418034],
              [-103.92067284963908, 31.673173984535133],
              [-104.04617387587328, 31.673173984535133],
              [-104.04617387587328, 31.610423471418034],
            ],
          ],
        },
        'proj:transform': [
          0.01568762827927474, 0, -104.04617387587328, 0, -0.015687628279274907,
          31.673173984535133, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:46:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-104.04617387587328, 31.610423471418034],
          [-103.92067284963908, 31.610423471418034],
          [-103.92067284963908, 31.673173984535133],
          [-104.04617387587328, 31.673173984535133],
          [-104.04617387587328, 31.610423471418034],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2023-07-26T17:46:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:41:00Z',
    bbox: [
      -104.01914881105787, 31.59328179517803, -103.89329257140044,
      31.671941944963933,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:41:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:41:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:41:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -104.01914881105787, 31.59328179517803, -103.89329257140044,
          31.671941944963933,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [5, 8],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.11590730154387274,
              min: -0.0388001065278864,
              count: 11,
              buckets: [1, 2, 5, 1, 1, 5, 5, 1, 0, 1],
            },
            statistics: {
              mean: 0.03243018964711595,
              stddev: 0.035322089706014644,
              maximum: 0.11590730154387274,
              minimum: -0.0388001065278864,
              valid_percent: 55.00000000000001,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-104.01914881105787, 31.59328179517803],
              [-103.89329257140044, 31.59328179517803],
              [-103.89329257140044, 31.671941944963933],
              [-104.01914881105787, 31.671941944963933],
              [-104.01914881105787, 31.59328179517803],
            ],
          ],
        },
        'proj:transform': [
          0.01573202995717996, 0, -104.01914881105787, 0, -0.015732029957180593,
          31.671941944963933, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:41:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-104.01914881105787, 31.59328179517803],
          [-103.89329257140044, 31.59328179517803],
          [-103.89329257140044, 31.671941944963933],
          [-104.01914881105787, 31.671941944963933],
          [-104.01914881105787, 31.59328179517803],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2023-07-26T17:41:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:36:00Z',
    bbox: [
      -104.04130408499732, 31.599182480307636, -103.90176575457642,
      31.661199516050267,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:36:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:36:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:36:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -104.04130408499732, 31.599182480307636, -103.90176575457642,
          31.661199516050267,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [4, 9],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.09658469095016221,
              min: 0.005769189311310131,
              count: 11,
              buckets: [1, 1, 3, 2, 5, 0, 3, 2, 4, 1],
            },
            statistics: {
              mean: 0.05417844618740142,
              stddev: 0.02443385960211523,
              maximum: 0.09658469095016221,
              minimum: 0.005769189311310131,
              valid_percent: 61.111111111111114,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-104.04130408499732, 31.599182480307636],
              [-103.90176575457642, 31.599182480307636],
              [-103.90176575457642, 31.661199516050267],
              [-104.04130408499732, 31.661199516050267],
              [-104.04130408499732, 31.599182480307636],
            ],
          ],
        },
        'proj:transform': [
          0.015504258935656878, 0, -104.04130408499732, 0,
          -0.015504258935658063, 31.661199516050267, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:36:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-104.04130408499732, 31.599182480307636],
          [-103.90176575457642, 31.599182480307636],
          [-103.90176575457642, 31.661199516050267],
          [-104.04130408499732, 31.661199516050267],
          [-104.04130408499732, 31.599182480307636],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2023-07-26T17:36:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:31:00Z',
    bbox: [
      -104.03265987880567, 31.578253053764687, -103.89120280627394,
      31.67255776878585,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:31:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:31:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:31:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -104.03265987880567, 31.578253053764687, -103.89120280627394,
          31.67255776878585,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [6, 9],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.1135471262661375,
              min: -0.019508596479056436,
              count: 11,
              buckets: [2, 2, 3, 1, 3, 4, 4, 3, 3, 2],
            },
            statistics: {
              mean: 0.049313856413914836,
              stddev: 0.03722517501147092,
              maximum: 0.1135471262661375,
              minimum: -0.019508596479056436,
              valid_percent: 50,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-104.03265987880567, 31.578253053764687],
              [-103.89120280627394, 31.578253053764687],
              [-103.89120280627394, 31.67255776878585],
              [-104.03265987880567, 31.67255776878585],
              [-104.03265987880567, 31.578253053764687],
            ],
          ],
        },
        'proj:transform': [
          0.01571745250352663, 0, -104.03265987880567, 0, -0.01571745250352734,
          31.67255776878585, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:31:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-104.03265987880567, 31.578253053764687],
          [-103.89120280627394, 31.578253053764687],
          [-103.89120280627394, 31.67255776878585],
          [-104.03265987880567, 31.67255776878585],
          [-104.03265987880567, 31.578253053764687],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2023-07-26T17:31:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:26:00Z',
    bbox: [
      -104.00942585037525, 31.569566917368654, -103.86825102957273,
      31.64799737337005,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:26:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:26:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:26:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -104.00942585037525, 31.569566917368654, -103.86825102957273,
          31.64799737337005,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [5, 9],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.09705207419404785,
              min: -0.021228054451253586,
              count: 11,
              buckets: [3, 2, 3, 2, 4, 1, 1, 3, 4, 3],
            },
            statistics: {
              mean: 0.0388949845394367,
              stddev: 0.03674522418421221,
              maximum: 0.09705207419404785,
              minimum: -0.021228054451253586,
              valid_percent: 57.77777777777777,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-104.00942585037525, 31.569566917368654],
              [-103.86825102957273, 31.569566917368654],
              [-103.86825102957273, 31.64799737337005],
              [-104.00942585037525, 31.64799737337005],
              [-104.00942585037525, 31.569566917368654],
            ],
          ],
        },
        'proj:transform': [
          0.01568609120027986, 0, -104.00942585037525, 0, -0.015686091200278973,
          31.64799737337005, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:26:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-104.00942585037525, 31.569566917368654],
          [-103.86825102957273, 31.569566917368654],
          [-103.86825102957273, 31.64799737337005],
          [-104.00942585037525, 31.64799737337005],
          [-104.00942585037525, 31.569566917368654],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2023-07-26T17:26:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:21:00Z',
    bbox: [
      -103.96408288632831, 31.54004468666176, -103.83855865718573,
      31.6341878585187,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:21:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:21:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:21:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -103.96408288632831, 31.54004468666176, -103.83855865718573,
          31.6341878585187,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [6, 8],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.13920986367953597,
              min: -0.0021770076471010202,
              count: 11,
              buckets: [3, 2, 5, 4, 3, 4, 2, 0, 1, 1],
            },
            statistics: {
              mean: 0.05179251218729869,
              stddev: 0.03413918272586909,
              maximum: 0.13920986367953597,
              minimum: -0.0021770076471010202,
              valid_percent: 52.083333333333336,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-103.96408288632831, 31.54004468666176],
              [-103.83855865718573, 31.54004468666176],
              [-103.83855865718573, 31.6341878585187],
              [-103.96408288632831, 31.6341878585187],
              [-103.96408288632831, 31.54004468666176],
            ],
          ],
        },
        'proj:transform': [
          0.015690528642823307, 0, -103.96408288632831, 0,
          -0.015690528642823408, 31.6341878585187, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:21:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-103.96408288632831, 31.54004468666176],
          [-103.83855865718573, 31.54004468666176],
          [-103.83855865718573, 31.6341878585187],
          [-103.96408288632831, 31.6341878585187],
          [-103.96408288632831, 31.54004468666176],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2023-07-26T17:21:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:16:00Z',
    bbox: [
      -103.96892879676483, 31.552006966541782, -103.82770680064493,
      31.646154963955045,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:16:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:16:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:16:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -103.96892879676483, 31.552006966541782, -103.82770680064493,
          31.646154963955045,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [6, 9],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.1085098745618094,
              min: -0.004144495264162162,
              count: 11,
              buckets: [6, 4, 2, 5, 4, 4, 2, 0, 0, 2],
            },
            statistics: {
              mean: 0.035904090140998705,
              stddev: 0.029251447782546135,
              maximum: 0.1085098745618094,
              minimum: -0.004144495264162162,
              valid_percent: 53.70370370370371,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-103.96892879676483, 31.552006966541782],
              [-103.82770680064493, 31.552006966541782],
              [-103.82770680064493, 31.646154963955045],
              [-103.96892879676483, 31.646154963955045],
              [-103.96892879676483, 31.552006966541782],
            ],
          ],
        },
        'proj:transform': [
          0.01569133290221103, 0, -103.96892879676483, 0, -0.01569133290221032,
          31.646154963955045, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:16:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-103.96892879676483, 31.552006966541782],
          [-103.82770680064493, 31.552006966541782],
          [-103.82770680064493, 31.646154963955045],
          [-103.96892879676483, 31.646154963955045],
          [-103.96892879676483, 31.552006966541782],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2023-07-26T17:16:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:11:00Z',
    bbox: [
      -103.96892879676483, 31.552006966541782, -103.82770680064493,
      31.646154963955045,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:11:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:11:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:11:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -103.96892879676483, 31.552006966541782, -103.82770680064493,
          31.646154963955045,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [6, 9],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.11543888216281153,
              min: -0.02733522831019597,
              count: 11,
              buckets: [2, 2, 5, 3, 3, 1, 3, 2, 1, 6],
            },
            statistics: {
              mean: 0.04626898335846078,
              stddev: 0.044083883432407746,
              maximum: 0.11543888216281153,
              minimum: -0.02733522831019597,
              valid_percent: 51.85185185185185,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-103.96892879676483, 31.552006966541782],
              [-103.82770680064493, 31.552006966541782],
              [-103.82770680064493, 31.646154963955045],
              [-103.96892879676483, 31.646154963955045],
              [-103.96892879676483, 31.552006966541782],
            ],
          ],
        },
        'proj:transform': [
          0.01569133290221103, 0, -103.96892879676483, 0, -0.01569133290221032,
          31.646154963955045, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:11:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-103.96892879676483, 31.552006966541782],
          [-103.82770680064493, 31.552006966541782],
          [-103.82770680064493, 31.646154963955045],
          [-103.96892879676483, 31.646154963955045],
          [-103.96892879676483, 31.552006966541782],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2023-07-26T17:11:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:06:00Z',
    bbox: [
      -103.95543561019277, 31.551726174841733, -103.8303483657296,
      31.645541608189095,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:06:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:06:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:06:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -103.95543561019277, 31.551726174841733, -103.8303483657296,
          31.645541608189095,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [6, 8],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.12318322834325238,
              min: -0.016614646844446967,
              count: 11,
              buckets: [2, 1, 2, 8, 5, 0, 1, 2, 4, 3],
            },
            statistics: {
              mean: 0.054723780364899284,
              stddev: 0.03940202961689362,
              maximum: 0.12318322834325238,
              minimum: -0.016614646844446967,
              valid_percent: 58.333333333333336,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-103.95543561019277, 31.551726174841733],
              [-103.8303483657296, 31.551726174841733],
              [-103.8303483657296, 31.645541608189095],
              [-103.95543561019277, 31.645541608189095],
              [-103.95543561019277, 31.551726174841733],
            ],
          ],
        },
        'proj:transform': [
          0.015635905557894198, 0, -103.95543561019277, 0,
          -0.015635905557893893, 31.645541608189095, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:06:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-103.95543561019277, 31.551726174841733],
          [-103.8303483657296, 31.551726174841733],
          [-103.8303483657296, 31.645541608189095],
          [-103.95543561019277, 31.645541608189095],
          [-103.95543561019277, 31.551726174841733],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2023-07-26T17:06:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:01:00Z',
    bbox: [
      -103.95059279115405, 31.539482191817594, -103.80945364858205,
      31.63357495353226,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:01:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:01:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:01:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -103.95059279115405, 31.539482191817594, -103.80945364858205,
          31.63357495353226,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [6, 9],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.1597880319317674,
              min: -0.03040546538105375,
              count: 11,
              buckets: [2, 1, 2, 7, 4, 4, 3, 1, 0, 2],
            },
            statistics: {
              mean: 0.055232432736210896,
              stddev: 0.04423248914965847,
              maximum: 0.1597880319317674,
              minimum: -0.03040546538105375,
              valid_percent: 48.148148148148145,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-103.95059279115405, 31.539482191817594],
              [-103.80945364858205, 31.539482191817594],
              [-103.80945364858205, 31.63357495353226],
              [-103.95059279115405, 31.63357495353226],
              [-103.95059279115405, 31.539482191817594],
            ],
          ],
        },
        'proj:transform': [
          0.015682126952444975, 0, -103.95059279115405, 0,
          -0.015682126952444263, 31.63357495353226, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T17:01:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-103.95059279115405, 31.539482191817594],
          [-103.80945364858205, 31.539482191817594],
          [-103.80945364858205, 31.63357495353226],
          [-103.95059279115405, 31.63357495353226],
          [-103.95059279115405, 31.539482191817594],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2023-07-26T17:01:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T16:56:00Z',
    bbox: [
      -103.93227004111138, 31.527314087789723, -103.82297123465446,
      31.620998779038505,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T16:56:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T16:56:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T16:56:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -103.93227004111138, 31.527314087789723, -103.82297123465446,
          31.620998779038505,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [6, 7],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.16110568225464345,
              min: 0.005512529325669702,
              count: 11,
              buckets: [4, 3, 4, 3, 1, 2, 1, 3, 0, 2],
            },
            statistics: {
              mean: 0.06676959707449545,
              stddev: 0.04467644098464394,
              maximum: 0.16110568225464345,
              minimum: 0.005512529325669702,
              valid_percent: 54.761904761904766,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-103.93227004111138, 31.527314087789723],
              [-103.82297123465446, 31.527314087789723],
              [-103.82297123465446, 31.620998779038505],
              [-103.93227004111138, 31.620998779038505],
              [-103.93227004111138, 31.527314087789723],
            ],
          ],
        },
        'proj:transform': [
          0.015614115208130386, 0, -103.93227004111138, 0,
          -0.015614115208130386, 31.620998779038505, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T16:56:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-103.93227004111138, 31.527314087789723],
          [-103.82297123465446, 31.527314087789723],
          [-103.82297123465446, 31.620998779038505],
          [-103.93227004111138, 31.620998779038505],
          [-103.93227004111138, 31.527314087789723],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2023-07-26T16:56:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T16:51:00Z',
    bbox: [
      -103.91878884485045, 31.526681382489773, -103.79384788477273,
      31.62038710254806,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T16:51:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T16:51:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T16:51:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -103.91878884485045, 31.526681382489773, -103.79384788477273,
          31.62038710254806,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [6, 8],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.12838375236434352,
              min: 0.005418600912592664,
              count: 11,
              buckets: [3, 3, 6, 4, 4, 4, 2, 1, 0, 2],
            },
            statistics: {
              mean: 0.05452362404386387,
              stddev: 0.029285901088417214,
              maximum: 0.12838375236434352,
              minimum: 0.005418600912592664,
              valid_percent: 60.416666666666664,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-103.91878884485045, 31.526681382489773],
              [-103.79384788477273, 31.526681382489773],
              [-103.79384788477273, 31.62038710254806],
              [-103.91878884485045, 31.62038710254806],
              [-103.91878884485045, 31.526681382489773],
            ],
          ],
        },
        'proj:transform': [
          0.015617620009714577, 0, -103.91878884485045, 0,
          -0.015617620009714983, 31.62038710254806, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T16:51:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-103.91878884485045, 31.526681382489773],
          [-103.79384788477273, 31.526681382489773],
          [-103.79384788477273, 31.62038710254806],
          [-103.91878884485045, 31.62038710254806],
          [-103.91878884485045, 31.526681382489773],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2023-07-26T16:51:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T16:46:00Z',
    bbox: [
      -103.91878884485045, 31.526372261351085, -103.777766583055,
      31.62038710254806,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T16:46:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T16:46:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T16:46:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -103.91878884485045, 31.526372261351085, -103.777766583055,
          31.62038710254806,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [6, 9],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.159520692588425,
              min: -0.02888731924435417,
              count: 11,
              buckets: [1, 2, 2, 8, 9, 2, 3, 2, 2, 1],
            },
            statistics: {
              mean: 0.05793336415285584,
              stddev: 0.04068847376983092,
              maximum: 0.159520692588425,
              minimum: -0.02888731924435417,
              valid_percent: 59.25925925925925,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-103.91878884485045, 31.526372261351085],
              [-103.777766583055, 31.526372261351085],
              [-103.777766583055, 31.62038710254806],
              [-103.91878884485045, 31.62038710254806],
              [-103.91878884485045, 31.526372261351085],
            ],
          ],
        },
        'proj:transform': [
          0.0156691401994955, 0, -103.91878884485045, 0, -0.015669140199496213,
          31.62038710254806, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T16:46:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-103.91878884485045, 31.526372261351085],
          [-103.777766583055, 31.526372261351085],
          [-103.777766583055, 31.62038710254806],
          [-103.91878884485045, 31.62038710254806],
          [-103.91878884485045, 31.526372261351085],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2023-07-26T16:46:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T16:41:00Z',
    bbox: [
      -103.92362132450705, 31.52296244590822, -103.76735294436004,
      31.63235031201113,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T16:41:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T16:41:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T16:41:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -103.92362132450705, 31.52296244590822, -103.76735294436004,
          31.63235031201113,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [7, 10],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.12305288251751556,
              min: -0.030035955193100428,
              count: 11,
              buckets: [2, 4, 3, 6, 11, 4, 5, 1, 1, 1],
            },
            statistics: {
              mean: 0.03698624686582838,
              stddev: 0.03273340308375956,
              maximum: 0.12305288251751556,
              minimum: -0.030035955193100428,
              valid_percent: 54.285714285714285,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-103.92362132450705, 31.52296244590822],
              [-103.76735294436004, 31.52296244590822],
              [-103.76735294436004, 31.63235031201113],
              [-103.92362132450705, 31.63235031201113],
              [-103.92362132450705, 31.52296244590822],
            ],
          ],
        },
        'proj:transform': [
          0.015626838014701622, 0, -103.92362132450705, 0,
          -0.015626838014701622, 31.63235031201113, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T16:41:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-103.92362132450705, 31.52296244590822],
          [-103.76735294436004, 31.52296244590822],
          [-103.76735294436004, 31.63235031201113],
          [-103.92362132450705, 31.63235031201113],
          [-103.92362132450705, 31.52296244590822],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2023-07-26T16:41:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T16:36:00Z',
    bbox: [
      -103.87738108778977, 31.536302022849984, -103.799062424605,
      31.58329322076085,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T16:36:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T16:36:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T16:36:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -103.87738108778977, 31.536302022849984, -103.799062424605,
          31.58329322076085,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [3, 5],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.07300545309991482,
              min: 0.026619306576566443,
              count: 11,
              buckets: [1, 1, 0, 0, 0, 0, 0, 0, 2, 2],
            },
            statistics: {
              mean: 0.056273513215519606,
              stddev: 0.01843529527268905,
              maximum: 0.07300545309991482,
              minimum: 0.026619306576566443,
              valid_percent: 40,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-103.87738108778977, 31.536302022849984],
              [-103.799062424605, 31.536302022849984],
              [-103.799062424605, 31.58329322076085],
              [-103.87738108778977, 31.58329322076085],
              [-103.87738108778977, 31.536302022849984],
            ],
          ],
        },
        'proj:transform': [
          0.01566373263695553, 0, -103.87738108778977, 0, -0.01566373263695553,
          31.58329322076085, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Texas_Permian_PB-1_2023-07-26T16:36:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-103.87738108778977, 31.536302022849984],
          [-103.799062424605, 31.536302022849984],
          [-103.799062424605, 31.58329322076085],
          [-103.87738108778977, 31.58329322076085],
          [-103.87738108778977, 31.536302022849984],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2023-07-26T16:36:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T16:11:00Z',
    bbox: [
      -87.32886825851303, 40.92569115419526, -87.07839711616047,
      41.073027120285005,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T16:11:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T16:11:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T16:11:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.32886825851303, 40.92569115419526, -87.07839711616047,
          41.073027120285005,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [10, 17],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.3559447910025953,
              min: -0.09443488552548107,
              count: 11,
              buckets: [2, 9, 18, 26, 17, 18, 12, 15, 1, 3],
            },
            statistics: {
              mean: 0.11178007224490963,
              stddev: 0.0934151465530762,
              maximum: 0.3559447910025953,
              minimum: -0.09443488552548107,
              valid_percent: 71.17647058823529,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.32886825851303, 40.92569115419526],
              [-87.07839711616047, 40.92569115419526],
              [-87.07839711616047, 41.073027120285005],
              [-87.32886825851303, 41.073027120285005],
              [-87.32886825851303, 40.92569115419526],
            ],
          ],
        },
        'proj:transform': [
          0.014733596608973443, 0, -87.32886825851303, 0, -0.014733596608973838,
          41.073027120285005, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T16:11:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.32886825851303, 40.92569115419526],
          [-87.07839711616047, 40.92569115419526],
          [-87.07839711616047, 41.073027120285005],
          [-87.32886825851303, 41.073027120285005],
          [-87.32886825851303, 40.92569115419526],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T16:11:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T16:06:00Z',
    bbox: [
      -87.34495582278618, 40.943057999460976, -87.02726161800756,
      41.08746445617853,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T16:06:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T16:06:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T16:06:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.34495582278618, 40.943057999460976, -87.02726161800756,
          41.08746445617853,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [10, 22],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.3729047690650451,
              min: -0.07268920482764415,
              count: 11,
              buckets: [7, 14, 14, 21, 22, 22, 7, 16, 7, 3],
            },
            statistics: {
              mean: 0.1312790515096842,
              stddev: 0.1022062830606368,
              maximum: 0.3729047690650451,
              minimum: -0.07268920482764415,
              valid_percent: 60.45454545454545,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.34495582278618, 40.943057999460976],
              [-87.02726161800756, 40.943057999460976],
              [-87.02726161800756, 41.08746445617853],
              [-87.34495582278618, 41.08746445617853],
              [-87.34495582278618, 40.943057999460976],
            ],
          ],
        },
        'proj:transform': [
          0.014440645671755414, 0, -87.34495582278618, 0, -0.014440645671755526,
          41.08746445617853, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T16:06:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.34495582278618, 40.943057999460976],
          [-87.02726161800756, 40.943057999460976],
          [-87.02726161800756, 41.08746445617853],
          [-87.34495582278618, 41.08746445617853],
          [-87.34495582278618, 40.943057999460976],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T16:06:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T16:01:00Z',
    bbox: [
      -87.65145306366738, 40.615328948169, -87.48886998896482,
      40.71879090479789,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T16:01:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T16:01:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T16:01:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.65145306366738, 40.615328948169, -87.48886998896482,
          40.71879090479789,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [7, 11],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.32275853640479163,
              min: -0.10267138409123985,
              count: 11,
              buckets: [3, 4, 5, 9, 13, 6, 3, 1, 4, 2],
            },
            statistics: {
              mean: 0.0865745995294559,
              stddev: 0.09908990218580992,
              maximum: 0.32275853640479163,
              minimum: -0.10267138409123985,
              valid_percent: 64.93506493506493,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.65145306366738, 40.615328948169],
              [-87.48886998896482, 40.615328948169],
              [-87.48886998896482, 40.71879090479789],
              [-87.65145306366738, 40.71879090479789],
              [-87.65145306366738, 40.615328948169],
            ],
          ],
        },
        'proj:transform': [
          0.014780279518413408, 0, -87.65145306366738, 0, -0.014780279518413172,
          40.71879090479789, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T16:01:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.65145306366738, 40.615328948169],
          [-87.48886998896482, 40.615328948169],
          [-87.48886998896482, 40.71879090479789],
          [-87.65145306366738, 40.71879090479789],
          [-87.65145306366738, 40.615328948169],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T16:01:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T16:01:00Z',
    bbox: [
      -87.3059030058868, 40.92250011705437, -87.06745164891625,
      41.08643542497164,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T16:01:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T16:01:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T16:01:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.3059030058868, 40.92250011705437, -87.06745164891625,
          41.08643542497164,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [11, 16],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.4529428638626238,
              min: -0.1488541085600636,
              count: 11,
              buckets: [3, 6, 17, 25, 19, 24, 15, 10, 3, 2],
            },
            statistics: {
              mean: 0.13177904000978943,
              stddev: 0.11744885519949833,
              maximum: 0.4529428638626238,
              minimum: -0.1488541085600636,
              valid_percent: 70.45454545454545,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.3059030058868, 40.92250011705437],
              [-87.06745164891625, 40.92250011705437],
              [-87.06745164891625, 41.08643542497164],
              [-87.3059030058868, 41.08643542497164],
              [-87.3059030058868, 40.92250011705437],
            ],
          ],
        },
        'proj:transform': [
          0.014903209810660201, 0, -87.3059030058868, 0, -0.01490320981066091,
          41.08643542497164, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T16:01:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.3059030058868, 40.92250011705437],
          [-87.06745164891625, 40.92250011705437],
          [-87.06745164891625, 41.08643542497164],
          [-87.3059030058868, 41.08643542497164],
          [-87.3059030058868, 40.92250011705437],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T16:01:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:56:00Z',
    bbox: [
      -87.64836504874799, 40.6006736396015, -87.4995954730922,
      40.70481234256055,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:56:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:56:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:56:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.64836504874799, 40.6006736396015, -87.4995954730922,
          40.70481234256055,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [7, 10],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.2284732898619667,
              min: -0.015368309761470356,
              count: 11,
              buckets: [2, 6, 4, 14, 3, 6, 4, 1, 3, 2],
            },
            statistics: {
              mean: 0.09117418451832252,
              stddev: 0.0577629719544552,
              maximum: 0.2284732898619667,
              minimum: -0.015368309761470356,
              valid_percent: 64.28571428571429,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.64836504874799, 40.6006736396015],
              [-87.4995954730922, 40.6006736396015],
              [-87.4995954730922, 40.70481234256055],
              [-87.64836504874799, 40.70481234256055],
              [-87.64836504874799, 40.6006736396015],
            ],
          ],
        },
        'proj:transform': [
          0.014876957565579434, 0, -87.64836504874799, 0, -0.014876957565578644,
          40.70481234256055, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:56:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.64836504874799, 40.6006736396015],
          [-87.4995954730922, 40.6006736396015],
          [-87.4995954730922, 40.70481234256055],
          [-87.64836504874799, 40.70481234256055],
          [-87.64836504874799, 40.6006736396015],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T15:56:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:56:00Z',
    bbox: [
      -87.29288769492237, 40.942293456881174, -86.96214831904685,
      41.08609318552271,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:56:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:56:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:56:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.29288769492237, 40.942293456881174, -86.96214831904685,
          41.08609318552271,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [10, 23],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.4841496699905332,
              min: -0.09758140243802696,
              count: 11,
              buckets: [4, 16, 31, 24, 23, 17, 13, 5, 4, 2],
            },
            statistics: {
              mean: 0.13604452187552663,
              stddev: 0.11610721801957115,
              maximum: 0.4841496699905332,
              minimum: -0.09758140243802696,
              valid_percent: 60.43478260869565,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.29288769492237, 40.942293456881174],
              [-86.96214831904685, 40.942293456881174],
              [-86.96214831904685, 41.08609318552271],
              [-87.29288769492237, 41.08609318552271],
              [-87.29288769492237, 40.942293456881174],
            ],
          ],
        },
        'proj:transform': [
          0.01437997286415344, 0, -87.29288769492237, 0, -0.014379972864153009,
          41.08609318552271, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:56:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.29288769492237, 40.942293456881174],
          [-86.96214831904685, 40.942293456881174],
          [-86.96214831904685, 41.08609318552271],
          [-87.29288769492237, 41.08609318552271],
          [-87.29288769492237, 40.942293456881174],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T15:56:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:51:00Z',
    bbox: [
      -87.65145306366738, 40.58575205144044, -87.44450373622246,
      40.71879090479789,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:51:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:51:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:51:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.65145306366738, 40.58575205144044, -87.44450373622246,
          40.71879090479789,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [9, 14],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.24520213353307685,
              min: -0.022928969457806536,
              count: 11,
              buckets: [3, 14, 10, 10, 9, 9, 7, 2, 3, 5],
            },
            statistics: {
              mean: 0.08911134988579135,
              stddev: 0.06948442159049098,
              maximum: 0.24520213353307685,
              minimum: -0.022928969457806536,
              valid_percent: 57.14285714285714,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.65145306366738, 40.58575205144044],
              [-87.44450373622246, 40.58575205144044],
              [-87.44450373622246, 40.71879090479789],
              [-87.65145306366738, 40.71879090479789],
              [-87.65145306366738, 40.58575205144044],
            ],
          ],
        },
        'proj:transform': [
          0.014782094817494321, 0, -87.65145306366738, 0, -0.014782094817494595,
          40.71879090479789, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:51:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.65145306366738, 40.58575205144044],
          [-87.44450373622246, 40.58575205144044],
          [-87.44450373622246, 40.71879090479789],
          [-87.65145306366738, 40.71879090479789],
          [-87.65145306366738, 40.58575205144044],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T15:51:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:51:00Z',
    bbox: [
      -87.26686050632316, 40.94165759951293, -86.93623030169411,
      41.08540986239512,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:51:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:51:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:51:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.26686050632316, 40.94165759951293, -86.93623030169411,
          41.08540986239512,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [10, 23],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.40427062253428336,
              min: -0.05495643998988951,
              count: 11,
              buckets: [6, 21, 28, 26, 21, 13, 11, 6, 3, 4],
            },
            statistics: {
              mean: 0.12374975248110372,
              stddev: 0.09891094144698565,
              maximum: 0.40427062253428336,
              minimum: -0.05495643998988951,
              valid_percent: 60.43478260869565,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.26686050632316, 40.94165759951293],
              [-86.93623030169411, 40.94165759951293],
              [-86.93623030169411, 41.08540986239512],
              [-87.26686050632316, 41.08540986239512],
              [-87.26686050632316, 40.94165759951293],
            ],
          ],
        },
        'proj:transform': [
          0.0143752262882192, 0, -87.26686050632316, 0, -0.014375226288219127,
          41.08540986239512, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:51:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.26686050632316, 40.94165759951293],
          [-86.93623030169411, 40.94165759951293],
          [-86.93623030169411, 41.08540986239512],
          [-87.26686050632316, 41.08540986239512],
          [-87.26686050632316, 40.94165759951293],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T15:51:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:46:00Z',
    bbox: [
      -87.65454428902166, 40.55281870138852, -87.42960015469657,
      40.73277400884859,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:46:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:46:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:46:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.65454428902166, 40.55281870138852, -87.42960015469657,
          40.73277400884859,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [12, 15],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.33761161556105773,
              min: -0.0418093247457063,
              count: 11,
              buckets: [7, 11, 13, 14, 18, 9, 5, 2, 1, 1],
            },
            statistics: {
              mean: 0.09605210746265026,
              stddev: 0.07644028791362743,
              maximum: 0.33761161556105773,
              minimum: -0.0418093247457063,
              valid_percent: 45,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.65454428902166, 40.55281870138852],
              [-87.42960015469657, 40.55281870138852],
              [-87.42960015469657, 40.73277400884859],
              [-87.65454428902166, 40.73277400884859],
              [-87.65454428902166, 40.55281870138852],
            ],
          ],
        },
        'proj:transform': [
          0.014996275621672541, 0, -87.65454428902166, 0, -0.014996275621672727,
          40.73277400884859, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:46:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.65454428902166, 40.55281870138852],
          [-87.42960015469657, 40.55281870138852],
          [-87.42960015469657, 40.73277400884859],
          [-87.65454428902166, 40.73277400884859],
          [-87.65454428902166, 40.55281870138852],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T15:46:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:46:00Z',
    bbox: [
      -87.26686050632316, 40.956133673794355, -86.9652160662547,
      41.08540986239512,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:46:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:46:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:46:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.26686050632316, 40.956133673794355, -86.9652160662547,
          41.08540986239512,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [9, 21],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.48468913575778816,
              min: -0.049971227491510395,
              count: 11,
              buckets: [6, 19, 28, 25, 20, 9, 7, 4, 4, 3],
            },
            statistics: {
              mean: 0.14494300248813752,
              stddev: 0.1128227812265938,
              maximum: 0.48468913575778816,
              minimum: -0.049971227491510395,
              valid_percent: 66.13756613756614,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.26686050632316, 40.956133673794355],
              [-86.9652160662547, 40.956133673794355],
              [-86.9652160662547, 41.08540986239512],
              [-87.26686050632316, 41.08540986239512],
              [-87.26686050632316, 40.956133673794355],
            ],
          ],
        },
        'proj:transform': [
          0.01436402095564091, 0, -87.26686050632316, 0, -0.014364020955640378,
          41.08540986239512, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:46:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.26686050632316, 40.956133673794355],
          [-86.9652160662547, 40.956133673794355],
          [-86.9652160662547, 41.08540986239512],
          [-87.26686050632316, 41.08540986239512],
          [-87.26686050632316, 40.956133673794355],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T15:46:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:41:00Z',
    bbox: [
      -87.65145306366738, 40.585035988836914, -87.45825151839041,
      40.71879090479789,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:41:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:41:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:41:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.65145306366738, 40.585035988836914, -87.45825151839041,
          40.71879090479789,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [9, 13],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.38083648747811605,
              min: -0.013091544532265319,
              count: 11,
              buckets: [8, 12, 15, 14, 13, 3, 1, 3, 4, 2],
            },
            statistics: {
              mean: 0.12666206467821753,
              stddev: 0.09032243202970106,
              maximum: 0.38083648747811605,
              minimum: -0.013091544532265319,
              valid_percent: 64.1025641025641,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.65145306366738, 40.585035988836914],
              [-87.45825151839041, 40.585035988836914],
              [-87.45825151839041, 40.71879090479789],
              [-87.65145306366738, 40.71879090479789],
              [-87.65145306366738, 40.585035988836914],
            ],
          ],
        },
        'proj:transform': [
          0.014861657328997543, 0, -87.65145306366738, 0, -0.014861657328997246,
          40.71879090479789, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:41:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.65145306366738, 40.585035988836914],
          [-87.45825151839041, 40.585035988836914],
          [-87.45825151839041, 40.71879090479789],
          [-87.65145306366738, 40.71879090479789],
          [-87.65145306366738, 40.585035988836914],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T15:41:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:41:00Z',
    bbox: [
      -87.23087265887068, 40.96872707549123, -86.94252376348595,
      41.09848407841436,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:41:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:41:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:41:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.23087265887068, 40.96872707549123, -86.94252376348595,
          41.09848407841436,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [9, 20],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.44847179976979157,
              min: -0.057431372371383994,
              count: 11,
              buckets: [4, 17, 25, 27, 16, 16, 5, 4, 1, 3],
            },
            statistics: {
              mean: 0.13209862517626056,
              stddev: 0.09824537387325256,
              maximum: 0.44847179976979157,
              minimum: -0.057431372371383994,
              valid_percent: 65.55555555555556,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.23087265887068, 40.96872707549123],
              [-86.94252376348595, 40.96872707549123],
              [-86.94252376348595, 41.09848407841436],
              [-87.23087265887068, 41.09848407841436],
              [-87.23087265887068, 40.96872707549123],
            ],
          ],
        },
        'proj:transform': [
          0.014417444769236454, 0, -87.23087265887068, 0, -0.014417444769236454,
          41.09848407841436, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:41:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.23087265887068, 40.96872707549123],
          [-86.94252376348595, 40.96872707549123],
          [-86.94252376348595, 41.09848407841436],
          [-87.23087265887068, 41.09848407841436],
          [-87.23087265887068, 40.96872707549123],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T15:41:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:36:00Z',
    bbox: [
      -87.65145306366738, 40.587734717443794, -87.40390248755408,
      40.71879090479789,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:36:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:36:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:36:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.65145306366738, 40.587734717443794, -87.40390248755408,
          40.71879090479789,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [9, 17],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.3233610103755524,
              min: 0.0006817064121821814,
              count: 11,
              buckets: [7, 15, 21, 10, 17, 14, 3, 1, 4, 3],
            },
            statistics: {
              mean: 0.12207195353621336,
              stddev: 0.07135609496971944,
              maximum: 0.3233610103755524,
              minimum: 0.0006817064121821814,
              valid_percent: 62.091503267973856,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.65145306366738, 40.587734717443794],
              [-87.40390248755408, 40.587734717443794],
              [-87.40390248755408, 40.71879090479789],
              [-87.65145306366738, 40.71879090479789],
              [-87.65145306366738, 40.587734717443794],
            ],
          ],
        },
        'proj:transform': [
          0.014561798594900033, 0, -87.65145306366738, 0, -0.014561798594900033,
          40.71879090479789, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:36:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.65145306366738, 40.587734717443794],
          [-87.40390248755408, 40.587734717443794],
          [-87.40390248755408, 40.71879090479789],
          [-87.65145306366738, 40.71879090479789],
          [-87.65145306366738, 40.587734717443794],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T15:36:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:36:00Z',
    bbox: [
      -87.21786074172573, 40.9522251555551, -86.94061519754587,
      41.09814386301818,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:36:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:36:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:36:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.21786074172573, 40.9522251555551, -86.94061519754587,
          41.09814386301818,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [10, 19],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.49789771244582137,
              min: -0.10346065167057894,
              count: 11,
              buckets: [4, 12, 23, 30, 17, 17, 6, 3, 2, 2],
            },
            statistics: {
              mean: 0.1275018572179077,
              stddev: 0.11168385685653538,
              maximum: 0.49789771244582137,
              minimum: -0.10346065167057894,
              valid_percent: 61.05263157894737,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.21786074172573, 40.9522251555551],
              [-86.94061519754587, 40.9522251555551],
              [-86.94061519754587, 41.09814386301818],
              [-87.21786074172573, 41.09814386301818],
              [-87.21786074172573, 40.9522251555551],
            ],
          ],
        },
        'proj:transform': [
          0.014591870746308189, 0, -87.21786074172573, 0, -0.014591870746308189,
          41.09814386301818, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:36:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.21786074172573, 40.9522251555551],
          [-86.94061519754587, 40.9522251555551],
          [-86.94061519754587, 41.09814386301818],
          [-87.21786074172573, 41.09814386301818],
          [-87.21786074172573, 40.9522251555551],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T15:36:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:31:00Z',
    bbox: [
      -87.65454428902166, 40.586596812819465, -87.39142533616923,
      40.73277400884859,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:31:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:31:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:31:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.65454428902166, 40.586596812819465, -87.39142533616923,
          40.73277400884859,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [10, 18],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.27088655587529653,
              min: -0.07847360678108517,
              count: 11,
              buckets: [2, 5, 12, 17, 11, 12, 17, 14, 10, 4],
            },
            statistics: {
              mean: 0.1065279215146114,
              stddev: 0.0797071028662409,
              maximum: 0.27088655587529653,
              minimum: -0.07847360678108517,
              valid_percent: 57.77777777777777,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.65454428902166, 40.586596812819465],
              [-87.39142533616923, 40.586596812819465],
              [-87.39142533616923, 40.73277400884859],
              [-87.65454428902166, 40.73277400884859],
              [-87.65454428902166, 40.586596812819465],
            ],
          ],
        },
        'proj:transform': [
          0.014617719602912537, 0, -87.65454428902166, 0, -0.014617719602912397,
          40.73277400884859, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:31:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.65454428902166, 40.586596812819465],
          [-87.39142533616923, 40.586596812819465],
          [-87.39142533616923, 40.73277400884859],
          [-87.65454428902166, 40.73277400884859],
          [-87.65454428902166, 40.586596812819465],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T15:31:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:31:00Z',
    bbox: [
      -87.20181249524045, 40.96743261426895, -86.96926114085795,
      41.0837082914602,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:31:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:31:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:31:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.20181249524045, 40.96743261426895, -86.96926114085795,
          41.0837082914602,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [8, 16],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.49605425726855656,
              min: -0.10791748467623069,
              count: 11,
              buckets: [4, 7, 24, 17, 14, 11, 8, 5, 0, 3],
            },
            statistics: {
              mean: 0.13542593295171096,
              stddev: 0.1228049734853806,
              maximum: 0.49605425726855656,
              minimum: -0.10791748467623069,
              valid_percent: 72.65625,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.20181249524045, 40.96743261426895],
              [-86.96926114085795, 40.96743261426895],
              [-86.96926114085795, 41.0837082914602],
              [-87.20181249524045, 41.0837082914602],
              [-87.20181249524045, 40.96743261426895],
            ],
          ],
        },
        'proj:transform': [
          0.014534459648906288, 0, -87.20181249524045, 0, -0.014534459648905746,
          41.0837082914602, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:31:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.20181249524045, 40.96743261426895],
          [-86.96926114085795, 40.96743261426895],
          [-86.96926114085795, 41.0837082914602],
          [-87.20181249524045, 41.0837082914602],
          [-87.20181249524045, 40.96743261426895],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T15:31:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:26:00Z',
    bbox: [
      -87.64467093544016, 40.61698014006277, -87.35704012679464,
      40.74641400395325,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:26:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:26:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:26:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.64467093544016, 40.61698014006277, -87.35704012679464,
          40.74641400395325,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [9, 20],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.3235196777167651,
              min: -0.10895111317797099,
              count: 11,
              buckets: [4, 3, 13, 21, 17, 20, 11, 8, 5, 7],
            },
            statistics: {
              mean: 0.10586744161842604,
              stddev: 0.09781423512964374,
              maximum: 0.3235196777167651,
              minimum: -0.10895111317797099,
              valid_percent: 60.55555555555555,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.64467093544016, 40.61698014006277],
              [-87.35704012679464, 40.61698014006277],
              [-87.35704012679464, 40.74641400395325],
              [-87.64467093544016, 40.74641400395325],
              [-87.64467093544016, 40.61698014006277],
            ],
          ],
        },
        'proj:transform': [
          0.014381540432275505, 0, -87.64467093544016, 0, -0.01438154043227513,
          40.74641400395325, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:26:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.64467093544016, 40.61698014006277],
          [-87.35704012679464, 40.61698014006277],
          [-87.35704012679464, 40.74641400395325],
          [-87.64467093544016, 40.74641400395325],
          [-87.64467093544016, 40.61698014006277],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T15:26:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:26:00Z',
    bbox: [
      -87.18880630328184, 40.95372097787209, -86.90069929567619,
      41.083369131294624,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:26:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:26:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:26:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.18880630328184, 40.95372097787209, -86.90069929567619,
          41.083369131294624,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [9, 20],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.4221153501769836,
              min: -0.0983551096319657,
              count: 11,
              buckets: [3, 6, 23, 25, 17, 18, 4, 9, 5, 2],
            },
            statistics: {
              mean: 0.12780827784632784,
              stddev: 0.10457783875985824,
              maximum: 0.4221153501769836,
              minimum: -0.0983551096319657,
              valid_percent: 62.22222222222222,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.18880630328184, 40.95372097787209],
              [-86.90069929567619, 40.95372097787209],
              [-86.90069929567619, 41.083369131294624],
              [-87.18880630328184, 41.083369131294624],
              [-87.18880630328184, 40.95372097787209],
            ],
          ],
        },
        'proj:transform': [
          0.014405350380282076, 0, -87.18880630328184, 0, -0.014405350380282123,
          41.083369131294624, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:26:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.18880630328184, 40.95372097787209],
          [-86.90069929567619, 40.95372097787209],
          [-86.90069929567619, 41.083369131294624],
          [-87.18880630328184, 41.083369131294624],
          [-87.18880630328184, 40.95372097787209],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T15:26:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:21:00Z',
    bbox: [
      -87.61565458793278, 40.60069915421427, -87.36814611988576,
      40.73173304906269,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:21:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:21:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:21:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.61565458793278, 40.60069915421427, -87.36814611988576,
          40.73173304906269,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [9, 17],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.3260725362831325,
              min: -0.10849544312342684,
              count: 11,
              buckets: [4, 3, 11, 14, 19, 16, 16, 5, 5, 2],
            },
            statistics: {
              mean: 0.10172532651394986,
              stddev: 0.09068306654608894,
              maximum: 0.3260725362831325,
              minimum: -0.10849544312342684,
              valid_percent: 62.091503267973856,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.61565458793278, 40.60069915421427],
              [-87.36814611988576, 40.60069915421427],
              [-87.36814611988576, 40.73173304906269],
              [-87.61565458793278, 40.73173304906269],
              [-87.61565458793278, 40.60069915421427],
            ],
          ],
        },
        'proj:transform': [
          0.01455932164982432, 0, -87.61565458793278, 0, -0.01455932164982432,
          40.73173304906269, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:21:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.61565458793278, 40.60069915421427],
          [-87.36814611988576, 40.60069915421427],
          [-87.36814611988576, 40.73173304906269],
          [-87.61565458793278, 40.73173304906269],
          [-87.61565458793278, 40.60069915421427],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T15:21:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:21:00Z',
    bbox: [
      -87.1658244315844, 40.965444509594505, -86.9177333438602,
      41.096786850154366,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:21:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:21:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:21:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.1658244315844, 40.965444509594505, -86.9177333438602,
          41.096786850154366,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [9, 17],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.5020655344922546,
              min: -0.10700128407874654,
              count: 11,
              buckets: [4, 4, 18, 27, 17, 17, 6, 4, 2, 3],
            },
            statistics: {
              mean: 0.14992785294080535,
              stddev: 0.11551352446040847,
              maximum: 0.5020655344922546,
              minimum: -0.10700128407874654,
              valid_percent: 66.66666666666666,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.1658244315844, 40.965444509594505],
              [-86.9177333438602, 40.965444509594505],
              [-86.9177333438602, 41.096786850154366],
              [-87.1658244315844, 41.096786850154366],
              [-87.1658244315844, 40.965444509594505],
            ],
          ],
        },
        'proj:transform': [
          0.014593593395540339, 0, -87.1658244315844, 0, -0.014593593395540339,
          41.096786850154366, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:21:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.1658244315844, 40.965444509594505],
          [-86.9177333438602, 40.965444509594505],
          [-86.9177333438602, 41.096786850154366],
          [-87.1658244315844, 41.096786850154366],
          [-87.1658244315844, 40.965444509594505],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T15:21:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:16:00Z',
    bbox: [
      -87.58973393839364, 40.617545414093534, -87.29180809019,
      40.73104097531396,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:16:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:16:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:16:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.58973393839364, 40.617545414093534, -87.29180809019,
          40.73104097531396,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [8, 21],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.4099962604073281,
              min: -0.12675586309077752,
              count: 11,
              buckets: [2, 5, 9, 20, 24, 20, 9, 3, 4, 1],
            },
            statistics: {
              mean: 0.11768060502434426,
              stddev: 0.0974248587919736,
              maximum: 0.4099962604073281,
              minimum: -0.12675586309077752,
              valid_percent: 57.738095238095234,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.58973393839364, 40.617545414093534],
              [-87.29180809019, 40.617545414093534],
              [-87.29180809019, 40.73104097531396],
              [-87.58973393839364, 40.73104097531396],
              [-87.58973393839364, 40.617545414093534],
            ],
          ],
        },
        'proj:transform': [
          0.014186945152553676, 0, -87.58973393839364, 0, -0.01418694515255327,
          40.73104097531396, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:16:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.58973393839364, 40.617545414093534],
          [-87.29180809019, 40.617545414093534],
          [-87.29180809019, 40.73104097531396],
          [-87.58973393839364, 40.73104097531396],
          [-87.58973393839364, 40.617545414093534],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T15:16:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:16:00Z',
    bbox: [
      -87.1658244315844, 40.96604273429909, -86.90433619987384,
      41.096786850154366,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:16:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:16:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:16:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.1658244315844, 40.96604273429909, -86.90433619987384,
          41.096786850154366,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [9, 18],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.4448841465184342,
              min: -0.1194070955228883,
              count: 11,
              buckets: [2, 11, 23, 24, 18, 14, 5, 7, 4, 3],
            },
            statistics: {
              mean: 0.117571486337363,
              stddev: 0.11612068789714686,
              maximum: 0.4448841465184342,
              minimum: -0.1194070955228883,
              valid_percent: 68.51851851851852,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.1658244315844, 40.96604273429909],
              [-86.90433619987384, 40.96604273429909],
              [-86.90433619987384, 41.096786850154366],
              [-87.1658244315844, 41.096786850154366],
              [-87.1658244315844, 40.96604273429909],
            ],
          ],
        },
        'proj:transform': [
          0.014527123983919624, 0, -87.1658244315844, 0, -0.014527123983920198,
          41.096786850154366, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:16:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.1658244315844, 40.96604273429909],
          [-86.90433619987384, 40.96604273429909],
          [-86.90433619987384, 41.096786850154366],
          [-87.1658244315844, 41.096786850154366],
          [-87.1658244315844, 40.96604273429909],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T15:16:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:11:00Z',
    bbox: [
      -87.59589208945306, 40.614650132308505, -87.29271969109313,
      40.75901794105133,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:11:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:11:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:11:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.59589208945306, 40.614650132308505, -87.29271969109313,
          40.75901794105133,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [10, 21],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.2976045432650497,
              min: -0.015603860988883441,
              count: 11,
              buckets: [10, 12, 22, 21, 15, 11, 11, 5, 3, 2],
            },
            statistics: {
              mean: 0.10684842464585087,
              stddev: 0.06852372587611258,
              maximum: 0.2976045432650497,
              minimum: -0.015603860988883441,
              valid_percent: 53.333333333333336,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.59589208945306, 40.614650132308505],
              [-87.29271969109313, 40.614650132308505],
              [-87.29271969109313, 40.75901794105133],
              [-87.59589208945306, 40.75901794105133],
              [-87.59589208945306, 40.614650132308505],
            ],
          ],
        },
        'proj:transform': [
          0.014436780874282818, 0, -87.59589208945306, 0, -0.01443678087428266,
          40.75901794105133, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:11:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.59589208945306, 40.614650132308505],
          [-87.29271969109313, 40.614650132308505],
          [-87.29271969109313, 40.75901794105133],
          [-87.59589208945306, 40.75901794105133],
          [-87.59589208945306, 40.614650132308505],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T15:11:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:11:00Z',
    bbox: [
      -87.14283646862927, 40.97946457201289, -86.8813463272041,
      41.110209642725465,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:11:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:11:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:11:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.14283646862927, 40.97946457201289, -86.8813463272041,
          41.110209642725465,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [9, 18],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.31071425255314244,
              min: -0.07568787329892501,
              count: 11,
              buckets: [5, 6, 19, 18, 13, 7, 9, 8, 12, 11],
            },
            statistics: {
              mean: 0.12013315327169828,
              stddev: 0.10372162815378333,
              maximum: 0.31071425255314244,
              minimum: -0.07568787329892501,
              valid_percent: 66.66666666666666,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.14283646862927, 40.97946457201289],
              [-86.8813463272041, 40.97946457201289],
              [-86.8813463272041, 41.110209642725465],
              [-87.14283646862927, 41.110209642725465],
              [-87.14283646862927, 40.97946457201289],
            ],
          ],
        },
        'proj:transform': [
          0.014527230079175812, 0, -87.14283646862927, 0, -0.014527230079175446,
          41.110209642725465, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:11:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.14283646862927, 40.97946457201289],
          [-86.8813463272041, 40.97946457201289],
          [-86.8813463272041, 41.110209642725465],
          [-87.14283646862927, 41.110209642725465],
          [-87.14283646862927, 40.97946457201289],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T15:11:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:06:00Z',
    bbox: [
      -87.56996251445192, 40.62994499518331, -87.25614170586947,
      40.75832623505794,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:06:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:06:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:06:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.56996251445192, 40.62994499518331, -87.25614170586947,
          40.75832623505794,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [9, 22],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.42202927396670165,
              min: -0.13200531205218213,
              count: 11,
              buckets: [3, 5, 17, 16, 25, 11, 8, 1, 4, 3],
            },
            statistics: {
              mean: 0.1047586909641751,
              stddev: 0.11065301453903849,
              maximum: 0.42202927396670165,
              minimum: -0.13200531205218213,
              valid_percent: 46.96969696969697,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.56996251445192, 40.62994499518331],
              [-87.25614170586947, 40.62994499518331],
              [-87.25614170586947, 40.75832623505794],
              [-87.56996251445192, 40.75832623505794],
              [-87.56996251445192, 40.62994499518331],
            ],
          ],
        },
        'proj:transform': [
          0.014264582208292879, 0, -87.56996251445192, 0, -0.014264582208292964,
          40.75832623505794, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:06:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.56996251445192, 40.62994499518331],
          [-87.25614170586947, 40.62994499518331],
          [-87.25614170586947, 40.75832623505794],
          [-87.56996251445192, 40.75832623505794],
          [-87.56996251445192, 40.62994499518331],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T15:06:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:06:00Z',
    bbox: [
      -87.12982903139832, 40.977918622702745, -86.8952455413239,
      41.10987183586961,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:06:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:06:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:06:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.12982903139832, 40.977918622702745, -86.8952455413239,
          41.10987183586961,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [9, 16],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.3832453324882952,
              min: -0.13111570357049032,
              count: 11,
              buckets: [5, 3, 11, 11, 18, 12, 14, 6, 5, 3],
            },
            statistics: {
              mean: 0.11901559362151705,
              stddev: 0.11327018286040076,
              maximum: 0.3832453324882952,
              minimum: -0.13111570357049032,
              valid_percent: 61.111111111111114,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.12982903139832, 40.977918622702745],
              [-86.8952455413239, 40.977918622702745],
              [-86.8952455413239, 41.10987183586961],
              [-87.12982903139832, 41.10987183586961],
              [-87.12982903139832, 40.977918622702745],
            ],
          ],
        },
        'proj:transform': [
          0.014661468129651212, 0, -87.12982903139832, 0, -0.014661468129651745,
          41.10987183586961, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:06:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.12982903139832, 40.977918622702745],
          [-86.8952455413239, 40.977918622702745],
          [-86.8952455413239, 41.10987183586961],
          [-87.12982903139832, 41.10987183586961],
          [-87.12982903139832, 40.977918622702745],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T15:06:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:01:00Z',
    bbox: [
      -87.54403757698087, 40.595838608928936, -87.27927812893255,
      40.75763604940291,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:01:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:01:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:01:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.54403757698087, 40.595838608928936, -87.27927812893255,
          40.75763604940291,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [11, 18],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.3671076777043313,
              min: -0.13097015445853308,
              count: 11,
              buckets: [1, 2, 15, 21, 26, 17, 12, 7, 5, 4],
            },
            statistics: {
              mean: 0.11336646761050036,
              stddev: 0.09687257122780168,
              maximum: 0.3671076777043313,
              minimum: -0.13097015445853308,
              valid_percent: 55.55555555555556,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.54403757698087, 40.595838608928936],
              [-87.27927812893255, 40.595838608928936],
              [-87.27927812893255, 40.75763604940291],
              [-87.54403757698087, 40.75763604940291],
              [-87.54403757698087, 40.595838608928936],
            ],
          ],
        },
        'proj:transform': [
          0.014708858224906862, 0, -87.54403757698087, 0, -0.014708858224906862,
          40.75763604940291, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T15:01:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.54403757698087, 40.595838608928936],
          [-87.27927812893255, 40.595838608928936],
          [-87.27927812893255, 40.75763604940291],
          [-87.54403757698087, 40.75763604940291],
          [-87.54403757698087, 40.595838608928936],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T15:01:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:01:00Z',
    bbox: [
      -87.10381754017278, 40.97908162663679, -86.82912873650125,
      41.10919737574436,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:01:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:01:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:01:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.10381754017278, 40.97908162663679, -86.82912873650125,
          41.10919737574436,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [9, 19],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.4010350531563967,
              min: -0.06270057908239735,
              count: 11,
              buckets: [10, 12, 25, 12, 8, 10, 5, 4, 8, 4],
            },
            statistics: {
              mean: 0.11961271999899456,
              stddev: 0.1190372160030431,
              maximum: 0.4010350531563967,
              minimum: -0.06270057908239735,
              valid_percent: 57.30994152046783,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.10381754017278, 40.97908162663679],
              [-86.82912873650125, 40.97908162663679],
              [-86.82912873650125, 41.10919737574436],
              [-87.10381754017278, 41.10919737574436],
              [-87.10381754017278, 40.97908162663679],
            ],
          ],
        },
        'proj:transform': [
          0.014457305456396341, 0, -87.10381754017278, 0, -0.014457305456396341,
          41.10919737574436, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T15:01:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.10381754017278, 40.97908162663679],
          [-86.82912873650125, 40.97908162663679],
          [-86.82912873650125, 41.10919737574436],
          [-87.10381754017278, 41.10919737574436],
          [-87.10381754017278, 40.97908162663679],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T15:01:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T14:56:00Z',
    bbox: [
      -87.51811726556485, 40.61216250404502, -87.22854750724228,
      40.7569473832063,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T14:56:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T14:56:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T14:56:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.51811726556485, 40.61216250404502, -87.22854750724228,
          40.7569473832063,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [10, 20],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.3847866071630075,
              min: -0.09772056453303472,
              count: 11,
              buckets: [5, 5, 16, 31, 31, 9, 12, 4, 1, 1],
            },
            statistics: {
              mean: 0.10088704639131682,
              stddev: 0.08309464692901493,
              maximum: 0.3847866071630075,
              minimum: -0.09772056453303472,
              valid_percent: 57.49999999999999,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.51811726556485, 40.61216250404502],
              [-87.22854750724228, 40.61216250404502],
              [-87.22854750724228, 40.7569473832063],
              [-87.51811726556485, 40.7569473832063],
              [-87.51811726556485, 40.61216250404502],
            ],
          ],
        },
        'proj:transform': [
          0.014478487916128893, 0, -87.51811726556485, 0, -0.014478487916128479,
          40.7569473832063, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T14:56:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.51811726556485, 40.61216250404502],
          [-87.22854750724228, 40.61216250404502],
          [-87.22854750724228, 40.7569473832063],
          [-87.51811726556485, 40.7569473832063],
          [-87.51811726556485, 40.61216250404502],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T14:56:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T14:56:00Z',
    bbox: [
      -87.11682272239142, 40.994400268387245, -86.85777089571033,
      41.109534413578835,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T14:56:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T14:56:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T14:56:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.11682272239142, 40.994400268387245, -86.85777089571033,
          41.109534413578835,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [8, 18],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.4112143094517199,
              min: -0.09418058828395995,
              count: 11,
              buckets: [10, 6, 16, 14, 14, 13, 7, 4, 5, 5],
            },
            statistics: {
              mean: 0.12317043626742548,
              stddev: 0.12519918058398885,
              maximum: 0.4112143094517199,
              minimum: -0.09418058828395995,
              valid_percent: 65.27777777777779,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.11682272239142, 40.994400268387245],
              [-86.85777089571033, 40.994400268387245],
              [-86.85777089571033, 41.109534413578835],
              [-87.11682272239142, 41.109534413578835],
              [-87.11682272239142, 40.994400268387245],
            ],
          ],
        },
        'proj:transform': [
          0.014391768148949028, 0, -87.11682272239142, 0, -0.014391768148948967,
          41.109534413578835, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T14:56:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.11682272239142, 40.994400268387245],
          [-86.85777089571033, 40.994400268387245],
          [-86.85777089571033, 41.109534413578835],
          [-87.11682272239142, 41.109534413578835],
          [-87.11682272239142, 40.994400268387245],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T14:56:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T14:51:00Z',
    bbox: [
      -87.52118077833185, 40.62610650121639, -87.23151183813653,
      40.770940971314054,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T14:51:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T14:51:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T14:51:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.52118077833185, 40.62610650121639, -87.23151183813653,
          40.770940971314054,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [10, 20],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.3783904386965007,
              min: -0.05727892698545621,
              count: 11,
              buckets: [7, 21, 23, 24, 16, 14, 3, 6, 0, 2],
            },
            statistics: {
              mean: 0.09594976267709013,
              stddev: 0.08479653119289669,
              maximum: 0.3783904386965007,
              minimum: -0.05727892698545621,
              valid_percent: 57.99999999999999,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.52118077833185, 40.62610650121639],
              [-87.23151183813653, 40.62610650121639],
              [-87.23151183813653, 40.770940971314054],
              [-87.52118077833185, 40.770940971314054],
              [-87.52118077833185, 40.62610650121639],
            ],
          ],
        },
        'proj:transform': [
          0.014483447009766337, 0, -87.52118077833185, 0, -0.014483447009766337,
          40.770940971314054, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-2_2020-06-15T14:51:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.52118077833185, 40.62610650121639],
          [-87.23151183813653, 40.62610650121639],
          [-87.23151183813653, 40.770940971314054],
          [-87.52118077833185, 40.770940971314054],
          [-87.52118077833185, 40.62610650121639],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T14:51:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
  {
    id: 'goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T14:51:00Z',
    bbox: [
      -87.07480439743549, 40.97771063006553, -86.85596143159171,
      41.09442687851555,
    ],
    type: 'Feature',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
      },
      {
        rel: 'root',
        type: 'application/json',
        href: 'https://earth.gov/ghgcenter/api/stac/',
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T14:51:00Z',
      },
      {
        title: 'Map of Item',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T14:51:00Z/map?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        type: 'text/html',
      },
    ],
    assets: {
      rad: {
        href: 's3://ghgc-data-store/goes-ch4plume-v1/GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T14:51:00Z.tif',
        type: 'image/tiff; application=geotiff',
        roles: ['data', 'layer'],
        title: 'Methane Column Enhancement',
        'proj:bbox': [
          -87.07480439743549, 40.97771063006553, -86.85596143159171,
          41.09442687851555,
        ],
        'proj:wkt2':
          'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]',
        'proj:shape': [8, 15],
        description: 'Sample of methane plumes from point sources',
        'raster:bands': [
          {
            scale: 1,
            nodata: 0,
            offset: 0,
            sampling: 'area',
            data_type: 'float64',
            histogram: {
              max: 0.4389127999133261,
              min: -0.10231651956987263,
              count: 11,
              buckets: [3, 10, 12, 19, 11, 9, 6, 2, 4, 7],
            },
            statistics: {
              mean: 0.13422399366490093,
              stddev: 0.1347804025840289,
              maximum: 0.4389127999133261,
              minimum: -0.10231651956987263,
              valid_percent: 69.16666666666667,
            },
          },
        ],
        'proj:geometry': {
          type: 'Polygon',
          coordinates: [
            [
              [-87.07480439743549, 40.97771063006553],
              [-86.85596143159171, 40.97771063006553],
              [-86.85596143159171, 41.09442687851555],
              [-87.07480439743549, 41.09442687851555],
              [-87.07480439743549, 40.97771063006553],
            ],
          ],
        },
        'proj:transform': [
          0.01458953105625227, 0, -87.07480439743549, 0, -0.01458953105625227,
          41.09442687851555, 0, 0, 1,
        ],
      },
      rendered_preview: {
        title: 'Rendered preview',
        href: 'https://earth.gov/ghgcenter/api/raster/collections/goes-ch4plume-v1/items/goes-ch4plume-v1-GOES-CH4_USA_Indiana_Indiana_IN-1_2020-06-15T14:51:00Z/preview.png?assets=rad&rescale=0.0%2C0.4&colormap_name=plasma',
        rel: 'preview',
        roles: ['overview'],
        type: 'image/png',
      },
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-87.07480439743549, 40.97771063006553],
          [-86.85596143159171, 40.97771063006553],
          [-86.85596143159171, 41.09442687851555],
          [-87.07480439743549, 41.09442687851555],
          [-87.07480439743549, 40.97771063006553],
        ],
      ],
    },
    collection: 'goes-ch4plume-v1',
    properties: {
      datetime: '2020-06-15T14:51:00+00:00',
    },
    stac_version: '1.0.0',
    stac_extensions: [
      'https://stac-extensions.github.io/raster/v1.1.0/schema.json',
      'https://stac-extensions.github.io/projection/v1.1.0/schema.json',
    ],
  },
];
export const testMetadata = {
  id: 'goes-ch4plume-v1',
  type: 'Collection',
  links: [
    {
      rel: 'items',
      type: 'application/geo+json',
      href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1/items',
    },
    {
      rel: 'parent',
      type: 'application/json',
      href: 'https://earth.gov/ghgcenter/api/stac/',
    },
    {
      rel: 'root',
      type: 'application/json',
      href: 'https://earth.gov/ghgcenter/api/stac/',
    },
    {
      rel: 'self',
      type: 'application/json',
      href: 'https://earth.gov/ghgcenter/api/stac/collections/goes-ch4plume-v1',
    },
  ],
  title:
    'Geostationary Satellite Observations of Extreme and Transient Methane Emissions from Oil and Gas Infrastructure',
  extent: {
    spatial: {
      bbox: [
        [
          -104.72692922440127, 25.251622016105113, -86.82596069124111,
          41.12229053684302,
        ],
      ],
    },
    temporal: {
      interval: [['2019-04-07 16:16:00+00', '2023-07-26 18:01:00+00']],
    },
  },
  license: 'CC-BY-4.0',
  renders: {
    rad: {
      assets: ['rad'],
      rescale: [[0, 0.4]],
      colormap_name: 'plasma',
    },
    dashboard: {
      assets: ['rad'],
      rescale: [[0, 0.4]],
      colormap_name: 'plasma',
    },
  },
  summaries: {
    datetime: ['2019-04-07T16:16:00Z', '2023-07-26T18:01:00Z'],
  },
  description:
    'A sample of methane plumes from point sources observed since 2019 by the U.S. Geostationary Operational Environmental Satellites (GOES) over North and South America',
  item_assets: {
    rad: {
      type: 'image/tiff; application=geotiff; profile=cloud-optimized',
      roles: ['data', 'layer'],
      title: 'Methane Column Enhancement',
      description: 'Sample of methane plumes from point sources.',
    },
  },
  stac_version: '1.0.0',
  stac_extensions: [
    'https://stac-extensions.github.io/render/v1.0.0/schema.json',
    'https://stac-extensions.github.io/item-assets/v1.0.0/schema.json',
  ],
  'dashboard:is_periodic': true,
  'dashboard:time_density': 'daily',
};
