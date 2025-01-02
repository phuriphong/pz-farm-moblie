const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger"); 
// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
//#region  MongoDB Connection
// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://sa:NaBDdP48LxqIHqxT@pz-smartfarm-app.zj6ak.mongodb.net/pz-smart-farm';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB successfully');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});
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
 // สร้างโมเดลจาก Schema
 const Garden = mongoose.model('Garden', gardenSchema);
 const Tree = mongoose.model('Tree', treeSchema);
 const Measurement = mongoose.model('Measurement', measurementSchema);
//#endregion  MongoDB Connection
// Constants
const MEASUREMENT_THRESHOLDS = {
  soilMoisture: { min: 20, max: 80 },
  soilPH: { min: 6, max: 7.5 },
  nitrogen: 5,
  phosphorus: 5,
  potassium: 5
};
//#region Helper Functions
const generateAlert = (measurements) => {
  const alerts = [];
  const { soilMoisture, soilPH, nitrogen, phosphorus, potassium } = measurements;

  if (soilMoisture < MEASUREMENT_THRESHOLDS.soilMoisture.min) alerts.push('ดินแห้งเกินไป');
  else if (soilMoisture > MEASUREMENT_THRESHOLDS.soilMoisture.max) alerts.push('ดินชุ่มเกินไป');

  if (soilPH < MEASUREMENT_THRESHOLDS.soilPH.min) alerts.push('ค่า pH ต่ำเกินไป');
  else if (soilPH > MEASUREMENT_THRESHOLDS.soilPH.max) alerts.push('ค่า pH สูงเกินไป');

  if (nitrogen < MEASUREMENT_THRESHOLDS.nitrogen) alerts.push('ไนโตรเจนต่ำ');
  if (phosphorus < MEASUREMENT_THRESHOLDS.phosphorus) alerts.push('ฟอสฟอรัสต่ำ');
  if (potassium < MEASUREMENT_THRESHOLDS.potassium) alerts.push('โพแทสเซียมต่ำ');

  return alerts.join(' | ');
};

const generateTreeId = async () => {
  const lastTree = await Tree.findOne().sort({ treeId: -1 });
  if (!lastTree || !lastTree.treeId) return 'T00001';
  
  const lastNum = parseInt(lastTree.treeId.substring(1), 10);
  return `T${(lastNum + 1).toString().padStart(5, '0')}`;
};
// Helper Functions
// Error Handler Middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
};
//#endregion

//#region Routes
// Garden Routes
app.post('/gardens', async (req, res, next) => {
  try {
    const garden = new Garden(req.body);
    await garden.save();
    res.status(201).json(garden);
  } catch (error) {
    next(error);
  }
});
app.get('/gardens', async (req, res, next) => {
  try {
    const gardens = await Garden.find().sort({ createdAt: -1 });
    const focusedTree = await Tree.findOne({ tree_focus: 1 });
    res.json({ gardens, gardenId: focusedTree?.gardenId });
  } catch (error) {
    next(error);
  }
});
// Tree Routes
app.post('/trees', async (req, res, next) => {
  try {
    const garden = await Garden.findById(req.body.gardenId);
    if (!garden) {
      return res.status(404).json({ error: 'Garden not found' });
    }

    const tree = new Tree({
      ...req.body,
      treeId: await generateTreeId()
    });
    await tree.save();
    res.status(201).json(tree);
  } catch (error) {
    next(error);
  }
});
app.get('/trees', async (req, res, next) => {
  try {
    const trees = await Tree.find()
      .populate('gardenId', 'name owner')
      .sort({ createdAt: -1 })
      .limit(100);
    res.json(trees);
  } catch (error) {
    next(error);
  }
});
app.get('/trees_near', async (req, res, next) => {
  try {
    const { latitude, longitude } = req.query;
    const maxDistance = 1000; // meters

    const trees = await Tree.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [parseFloat(longitude), parseFloat(latitude)]
          },
          $maxDistance: maxDistance
        }
      }
    }).populate('gardenId', 'name owner');
    
    res.json(trees);
  } catch (error) {
    next(error);
  }
});
app.get('/treesbygardenId/:gardenId', async (req, res, next) => {
  try {
    const { gardenId } = req.params;
    const query = gardenId ? { gardenId } : {};
    const trees = await Tree.find(query);
    res.json(trees);
  } catch (error) {
    next(error);
  }
});
// Measurement Routes
app.post('/measurements', async (req, res, next) => {
  try {
    const { timestamp, measurements } = req.body;
    const focusedTree = await Tree.findOne({ tree_focus: 1 });
    
    if (!focusedTree) {
      return res.status(400).json({ message: 'No focused tree found' });
    }

    const measurement = new Measurement({
      treeId: focusedTree._id,
      timestamp: timestamp || new Date(),
      measurements: measurements || {
        soilMoisture: 45,
        soilPH: 6.2,
        airTemperature: 25.5,
        humidity: 60,
        lightIntensity: 1500,
        leafWetness: 0.2
      }
    });

    await measurement.save();
    res.status(201).json(measurement);
  } catch (error) {
    next(error);
  }
});
app.get('/measurements', async (req, res, next) => {
  try {
    const { gardenId, treeId } = req.query;

    if (!gardenId) {
      return res.status(400).json({ message: 'gardenId is required' });
    }

    const treeMatch = { gardenId, ...(treeId && { _id: treeId }) };
    const trees = await Tree.find(treeMatch);

    if (!trees.length) {
      return res.status(404).json({ message: 'No trees found' });
    }

    const treeIds = trees.map(tree => tree._id);
    const measurements = await Measurement.find({ treeId: { $in: treeIds } })
      .populate({
        path: 'treeId',
        select: 'species treeName treeType latitude longitude',
        populate: {
          path: 'gardenId',
          select: 'name location area owner'
        }
      });

    res.json({
      gardenId,
      treeId: treeId || 'All Trees',
      measurements
    });
  } catch (error) {
    next(error);
  }
});
app.get('/abnormal-measurements', async (req, res, next) => {
  try {
    const measurements = await Measurement.find()
      .populate({
        path: 'treeId',
        select: 'species treeName treeType latitude longitude',
        populate: {
          path: 'gardenId',
          select: 'name location area owner'
        }
      })
      .lean();

    const abnormalData = measurements
      .filter(item => {
        const { soilMoisture, soilPH, nitrogen, phosphorus, potassium } = item.measurements;
        return (
          soilMoisture < MEASUREMENT_THRESHOLDS.soilMoisture.min ||
          soilMoisture > MEASUREMENT_THRESHOLDS.soilMoisture.max ||
          soilPH < MEASUREMENT_THRESHOLDS.soilPH.min ||
          soilPH > MEASUREMENT_THRESHOLDS.soilPH.max ||
          nitrogen < MEASUREMENT_THRESHOLDS.nitrogen ||
          phosphorus < MEASUREMENT_THRESHOLDS.phosphorus ||
          potassium < MEASUREMENT_THRESHOLDS.potassium
        );
      })
      .map(item => ({
        ...item,
        alert: generateAlert(item.measurements)
      }));

    res.json({ abnormalData });
  } catch (error) {
    next(error);
  }
});
// Tree Focus Management
app.put('/updateTreeFocus/:treeId', async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    await Tree.updateMany({}, { tree_focus: 0 }, { session });
    
    const updatedTree = await Tree.findOneAndUpdate(
      { treeId: req.params.treeId },
      { tree_focus: 1 },
      { new: true, session }
    );

    if (!updatedTree) {
      await session.abortTransaction();
      return res.status(404).json({ message: 'Tree not found' });
    }

    await session.commitTransaction();
    res.json({ message: 'Tree focus updated successfully', tree: updatedTree });
  } catch (error) {
    await session.abortTransaction();
    next(error);
  } finally {
    session.endSession();
  }
});
// SPA Support
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});
//#end region Routes

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;