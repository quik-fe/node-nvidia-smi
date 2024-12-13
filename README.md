# @quik-fe/node-nvidia-smi

Node.js wrapper for the `nvidia-smi` (NVIDIA System Management Interface) command line utility. This package provides a simple way to monitor and query NVIDIA GPU information.

## Prerequisites

- NVIDIA drivers must be installed
- `nvidia-smi` command line tool must be available in your system PATH

## Installation

```bash
npm install @quik-fe/node-nvidia-smi
```

## Usage

```typescript
import { NvidiaSMI } from "@quik-fe/node-nvidia-smi";

// Check if nvidia-smi exists
const exists = await NvidiaSMI.exist();

// Get GPU information
const gpuInfo = await NvidiaSMI.Utils.getGPUInfo();

// Get memory usage
const memoryUsage = await NvidiaSMI.Utils.getMemoryUsage();

// Get driver version
const driverVersion = await NvidiaSMI.Utils.getDriverVersion();
```

## API

### Base Functions

- `NvidiaSMI.exist()`: Check if nvidia-smi is available
- `NvidiaSMI.get_details()`: Get raw XML data from nvidia-smi

### Utility Functions

- `getDriverVersion()`: Get NVIDIA driver version
- `getCudaVersion()`: Get CUDA version
- `getAttachedGPUs()`: Get number of attached GPUs
- `getGPUInfo(uuid?)`: Get GPU information for specific UUID or first GPU
- `getMemoryUsage(uuid?)`: Get memory usage statistics
- `getTemperature(uuid?)`: Get GPU temperature
- `getUtilization(uuid?)`: Get GPU utilization
- `getECCErrors(uuid?)`: Get ECC error information
- `getProcesses(uuid?)`: Get running process information
- `getFanSpeed(uuid?)`: Get fan speed
- `getPowerReadings(uuid?)`: Get power consumption information
- `getClocks(uuid?)`: Get clock speeds
- `getComputeMode(uuid?)`: Get compute mode
- `getPerformanceState(uuid?)`: Get performance state

All utility functions are accessible via `NvidiaSMI.Utils` namespace.


## License

MIT

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
