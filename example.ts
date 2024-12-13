import { NvidiaSMI } from "./src/main";

async function main() {
  const driverVersion = await NvidiaSMI.Utils.getDriverVersion();
  const memoryUsage = await NvidiaSMI.Utils.getMemoryUsage();
  const info = await NvidiaSMI.Utils.getGPUInfo();

  console.log("Driver Version:", driverVersion);
  console.log("Memory Usage:", memoryUsage);
  console.log("info:", info);
}

main();
