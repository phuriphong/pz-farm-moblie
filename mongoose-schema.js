const mongoose = require("mongoose");
// Schema Definitions
const gardenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    }
  },
  area: {
    type: Number,
    required: true,
    min: 0
  },
  owner: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});
const treeSchema = new mongoose.Schema({
  gardenId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Garden',
    required: true
  },
  species: {
    type: String,
    required: true,
    trim: true
  },
  plantedDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['Healthy', 'Sick', 'Dead'],
    default: 'Healthy'
  },
  height: {
    type: Number,
    min: 0
  },
  diameter: {
    type: Number,
    min: 0
  },
  treeId: {
    type: String,
    unique: true
  },
  treeName: String,
  treeType: String,
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  latitude: Number,
  longitude: Number,
  tree_focus: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const measurementSchema = new mongoose.Schema({
  treeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tree',
    required: true
  },
  chipId: String,
  timestamp: {
    type: Date,
    default: Date.now
  },
  measurements: {
    soilMoisture: {
      type: Number,
      min: 0,
      max: 100
    },
    soilPH: {
      type: Number,
      min: 0,
      max: 14
    },
    airTemperature: {
      type: Number
    },
    humidity: {
      type: Number,
      min: 0,
      max: 100
    },
    lightIntensity: {
      type: Number,
      min: 0
    },
    leafWetness: {
      type: Number,
      min: 0,
      max: 1
    },
    nitrogen: {
      type: Number,
      min: 0
    },
    phosphorus: {
      type: Number,
      min: 0
    },
    potassium: {
      type: Number,
      min: 0
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Indexes
treeSchema.index({ location: '2dsphere' });
treeSchema.index({ treeId: 1 }, { unique: true });
measurementSchema.index({ treeId: 1, timestamp: -1 });

module.exports = {
    gardenSchema,
    treeSchema,
    measurementSchema
  };