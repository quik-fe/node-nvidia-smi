import { promisify } from "util";
import { exec } from "child_process";
import { XMLParser } from "fast-xml-parser";
import { TNvidiaSMI } from "./types";
import which from "which";
import filesizeParser from "filesize-parser";

const parser = new XMLParser();
const execAsync = promisify(exec);

export namespace NvidiaSMI {
  let nvidia_smi_exist = null as null | boolean;
  export async function exist() {
    if (typeof nvidia_smi_exist === "boolean") {
      return nvidia_smi_exist;
    }
    try {
      await which("nvidia-smi");
      nvidia_smi_exist = true;
      return true;
    } catch (error) {
      nvidia_smi_exist = false;
      return false;
    }
  }
  export async function assert_exist() {
    if (!(await exist())) {
      throw new Error("nvidia-smi not found");
    }
  }
  export async function get_details() {
    assert_exist();
    try {
      const outXML = await execAsync("nvidia-smi -q -x");
      const json = parser.parse(outXML.stdout);
      return json as TNvidiaSMI.XMLRoot;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  export namespace Utils {
    // 获取驱动版本信息
    export async function getDriverVersion() {
      const details = await NvidiaSMI.get_details();
      if (details) {
        return details.nvidia_smi_log.driver_version;
      }
      return null;
    }

    // 获取 CUDA 版本信息
    export async function getCudaVersion() {
      const details = await NvidiaSMI.get_details();
      if (details) {
        return details.nvidia_smi_log.cuda_version;
      }
      return null;
    }

    // 获取 GPU 数量
    export async function getAttachedGPUs() {
      const details = await NvidiaSMI.get_details();
      if (details) {
        return details.nvidia_smi_log.attached_gpus;
      }
      return 0;
    }

    export async function get_gpus() {
      const details = await NvidiaSMI.get_details();
      const gpus = details?.nvidia_smi_log.gpu || [];
      if (Array.isArray(gpus)) {
        return gpus;
      }
      return [gpus];
    }

    // 获取 GPU 型号和品牌
    export async function getGPUInfo(uuid?: string) {
      const gpus = await get_gpus();
      const gpu = uuid ? gpus.find((gpu) => gpu.uuid === uuid) : gpus[0];
      return gpu ?? null;
    }

    // 获取 GPU 使用的显存信息
    export async function getMemoryUsage(uuid?: string) {
      const gpu = await getGPUInfo(uuid);
      if (gpu) {
        const { total, reserved, used, free } = gpu.fb_memory_usage;
        return {
          total: filesizeParser(total),
          reserved: filesizeParser(reserved ?? "0"),
          used: filesizeParser(used),
          free: filesizeParser(free),
        };
      }
      return null;
    }

    // 获取 GPU 温度信息
    export async function getTemperature(uuid?: string) {
      return (await getGPUInfo(uuid))?.temperature ?? null;
    }

    // 获取 GPU 负载信息
    export async function getUtilization(uuid?: string) {
      return (await getGPUInfo(uuid))?.utilization ?? null;
    }

    // 获取 ECC 错误信息
    export async function getECCErrors(uuid?: string) {
      return (await getGPUInfo(uuid))?.ecc_errors ?? null;
    }

    // 获取 GPU 的进程信息
    export async function getProcesses(uuid?: string) {
      return (await getGPUInfo(uuid))?.encoder_stats ?? null;
    }

    // 获取 GPU 风扇转速
    export async function getFanSpeed(uuid?: string) {
      return (await getGPUInfo(uuid))?.fan_speed ?? null;
    }

    // 获取 GPU 电源信息
    export async function getPowerReadings(uuid?: string) {
      return (await getGPUInfo(uuid))?.gpu_power_readings ?? null;
    }

    // 获取 GPU 时钟信息
    export async function getClocks(uuid?: string) {
      return (await getGPUInfo(uuid))?.clocks ?? null;
    }

    // 获取 GPU 计算模式信息
    export async function getComputeMode(uuid?: string) {
      return (await getGPUInfo(uuid))?.compute_mode ?? null;
    }

    // 获取 GPU 的性能状态
    export async function getPerformanceState(uuid?: string) {
      return (await getGPUInfo(uuid))?.performance_state ?? null;
    }
  }
}
