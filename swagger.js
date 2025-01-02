// swagger/index.js
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Smart Farm API',
    version: '1.0.0',
    description: 'API documentation for Smart Farm management system',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
  components: {
    schemas: {
      Garden: {
        type: 'object',
        required: ['name', 'location', 'area', 'owner'],
        properties: {
          name: {
            type: 'string',
            description: 'Garden name'
          },
          location: {
            type: 'object',
            properties: {
              latitude: {
                type: 'number',
                description: 'Latitude coordinate'
              },
              longitude: {
                type: 'number',
                description: 'Longitude coordinate'
              }
            }
          },
          area: {
            type: 'number',
            description: 'Garden area in square meters'
          },
          owner: {
            type: 'string',
            description: 'Garden owner name'
          }
        }
      },
      Tree: {
        type: 'object',
        required: ['gardenId', 'species', 'plantedDate', 'location'],
        properties: {
          gardenId: {
            type: 'string',
            description: 'Reference to garden ID'
          },
          species: {
            type: 'string',
            description: 'Tree species'
          },
          plantedDate: {
            type: 'string',
            format: 'date',
            description: 'Date when tree was planted'
          },
          status: {
            type: 'string',
            enum: ['Healthy', 'Sick', 'Dead'],
            description: 'Current tree status'
          },
          height: {
            type: 'number',
            description: 'Tree height in meters'
          },
          diameter: {
            type: 'number',
            description: 'Tree diameter in centimeters'
          },
          treeId: {
            type: 'string',
            description: 'Unique tree identifier'
          },
          location: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                enum: ['Point'],
                description: 'GeoJSON type'
              },
              coordinates: {
                type: 'array',
                items: {
                  type: 'number'
                },
                description: 'GeoJSON coordinates [longitude, latitude]'
              }
            }
          }
        }
      },
      Measurement: {
        type: 'object',
        required: ['treeId', 'measurements'],
        properties: {
          treeId: {
            type: 'string',
            description: 'Reference to tree ID'
          },
          chipId: {
            type: 'string',
            description: 'Sensor chip identifier'
          },
          timestamp: {
            type: 'string',
            format: 'date-time',
            description: 'Measurement timestamp'
          },
          measurements: {
            type: 'object',
            properties: {
              soilMoisture: {
                type: 'number',
                description: 'Soil moisture percentage (0-100)'
              },
              soilPH: {
                type: 'number',
                description: 'Soil pH level (0-14)'
              },
              airTemperature: {
                type: 'number',
                description: 'Air temperature in Celsius'
              },
              humidity: {
                type: 'number',
                description: 'Air humidity percentage (0-100)'
              },
              lightIntensity: {
                type: 'number',
                description: 'Light intensity in lux'
              },
              leafWetness: {
                type: 'number',
                description: 'Leaf wetness level (0-1)'
              },
              nitrogen: {
                type: 'number',
                description: 'Nitrogen level'
              },
              phosphorus: {
                type: 'number',
                description: 'Phosphorus level'
              },
              potassium: {
                type: 'number',
                description: 'Potassium level'
              }
            }
          }
        }
      }
    }
  },
  paths: {
    '/gardens': {
      post: {
        tags: ['Gardens'],
        summary: 'Create a new garden',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Garden'
              }
            }
          }
        },
        responses: {
          201: {
            description: 'Garden created successfully',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Garden'
                }
              }
            }
          },
          400: {
            description: 'Invalid input'
          }
        }
      },
      get: {
        tags: ['Gardens'],
        summary: 'Get all gardens',
        responses: {
          200: {
            description: 'List of gardens with focused tree',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    gardens: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/Garden'
                      }
                    },
                    gardenId: {
                      type: 'string',
                      description: 'ID of garden with focused tree'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    '/trees': {
      post: {
        tags: ['Trees'],
        summary: 'Create a new tree',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Tree'
              }
            }
          }
        },
        responses: {
          201: {
            description: 'Tree created successfully',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Tree'
                }
              }
            }
          },
          404: {
            description: 'Garden not found'
          }
        }
      },
      get: {
        tags: ['Trees'],
        summary: 'Get all trees',
        responses: {
          200: {
            description: 'List of trees with garden information',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Tree'
                  }
                }
              }
            }
          }
        }
      }
    },
    '/trees_near': {
      get: {
        tags: ['Trees'],
        summary: 'Find trees near a location',
        parameters: [
          {
            name: 'latitude',
            in: 'query',
            required: true,
            schema: {
              type: 'number'
            }
          },
          {
            name: 'longitude',
            in: 'query',
            required: true,
            schema: {
              type: 'number'
            }
          }
        ],
        responses: {
          200: {
            description: 'List of nearby trees',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Tree'
                  }
                }
              }
            }
          }
        }
      }
    },
    '/treesbygardenId/{gardenId}': {
      get: {
        tags: ['Trees'],
        summary: 'Get trees by garden ID',
        parameters: [
          {
            name: 'gardenId',
            in: 'path',
            required: true,
            schema: {
              type: 'string'
            }
          }
        ],
        responses: {
          200: {
            description: 'List of trees in the garden',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Tree'
                  }
                }
              }
            }
          }
        }
      }
    },
    '/measurements': {
      post: {
        tags: ['Measurements'],
        summary: 'Create a new measurement for focused tree',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  timestamp: {
                    type: 'string',
                    format: 'date-time'
                  },
                  measurements: {
                    type: 'object',
                    properties: {
                      soilMoisture: { type: 'number' },
                      soilPH: { type: 'number' },
                      airTemperature: { type: 'number' },
                      humidity: { type: 'number' },
                      lightIntensity: { type: 'number' },
                      leafWetness: { type: 'number' }
                    }
                  }
                }
              }
            }
          }
        },
        responses: {
          201: {
            description: 'Measurement created successfully',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Measurement'
                }
              }
            }
          }
        }
      },
      get: {
        tags: ['Measurements'],
        summary: 'Get measurements by garden and tree',
        parameters: [
          {
            name: 'gardenId',
            in: 'query',
            required: true,
            schema: {
              type: 'string'
            }
          },
          {
            name: 'treeId',
            in: 'query',
            schema: {
              type: 'string'
            }
          }
        ],
        responses: {
          200: {
            description: 'List of measurements',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    gardenId: { type: 'string' },
                    treeId: { type: 'string' },
                    measurements: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/Measurement'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    '/abnormal-measurements': {
      get: {
        tags: ['Measurements'],
        summary: 'Get abnormal measurements',
        responses: {
          200: {
            description: 'List of abnormal measurements',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    abnormalData: {
                      type: 'array',
                      items: {
                        allOf: [
                          { $ref: '#/components/schemas/Measurement' },
                          {
                            type: 'object',
                            properties: {
                              alert: {
                                type: 'string',
                                description: 'Alert message for abnormal values'
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    '/updateTreeFocus/{treeId}': {
      put: {
        tags: ['Trees'],
        summary: 'Update tree focus status',
        parameters: [
          {
            name: 'treeId',
            in: 'path',
            required: true,
            schema: {
              type: 'string'
            }
          }
        ],
        responses: {
          200: {
            description: 'Tree focus updated successfully',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string'
                    },
                    tree: {
                      $ref: '#/components/schemas/Tree'
                    }
                  }
                }
              }
            }
          },
          404: {
            description: 'Tree not found'
          }
        }
      }
    }
  }
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // paths to files containing annotations
};

module.exports = swaggerJSDoc(options);