export namespace TNvidiaSMI {
  export type XMLRoot = {
    "?xml": string;
    nvidia_smi_log: NvidiaSmiLog;
  };

  export type NvidiaSmiLog = {
    timestamp: string;
    driver_version: number;
    cuda_version: number;
    attached_gpus: number;
    gpu: GPU | GPU[];
  };

  export type GPU = {
    product_name: string;
    product_brand: string;
    product_architecture: string;
    display_mode: string;
    display_active: string;
    persistence_mode: AddressingMode;
    addressing_mode: AddressingMode;
    mig_mode: MigMode;
    mig_devices: string;
    accounting_mode: string;
    accounting_mode_buffer_size: number;
    driver_model: DriverModel;
    serial: number;
    uuid: string;
    minor_number: AddressingMode;
    vbios_version: string;
    multigpu_board: string;
    board_id: number;
    board_part_number: string;
    gpu_part_number: string;
    gpu_fru_part_number: AddressingMode;
    gpu_module_id: number;
    inforom_version: InforomVersion;
    inforom_bbx_flush: InforomBbxFlush;
    gpu_operation_mode: GPUOperationMode;
    gsp_firmware_version: AddressingMode;
    c2c_mode: AddressingMode;
    gpu_virtualization_mode: GPUVirtualizationMode;
    gpu_reset_status: GPUResetStatus;
    ibmnpu: Ibmnpu;
    pci: PCI;
    fan_speed: string;
    performance_state: string;
    clocks_event_reasons: ClocksEventReasons;
    fb_memory_usage: MemoryUsage;
    bar1_memory_usage: MemoryUsage;
    cc_protected_memory_usage: MemoryUsage;
    compute_mode: string;
    utilization: Utilization;
    encoder_stats: Stats;
    fbc_stats: Stats;
    ecc_mode: ECCMode;
    ecc_errors: ECCErrors;
    retired_pages: RetiredPages;
    remapped_rows: AddressingMode;
    temperature: Temperature;
    supported_gpu_target_temp: SupportedGPUTargetTemp;
    gpu_power_readings: PowerReadings;
    gpu_memory_power_readings: GPUMemoryPowerReadings;
    module_power_readings: PowerReadings;
    clocks: Clocks;
    applications_clocks: ApplicationsClocks;
    default_applications_clocks: ApplicationsClocks;
    deferred_clocks: DeferredClocks;
    max_clocks: Clocks;
    max_customer_boost_clocks: MaxCustomerBoostClocks;
    clock_policy: ClockPolicy;
    voltage: Voltage;
    fabric: Fabric;
    supported_clocks: SupportedClocks;
    processes: Processes;
    accounted_processes: string;
  };

  export type AddressingMode = "N/A";

  export type ApplicationsClocks = {
    graphics_clock: AddressingMode;
    mem_clock: AddressingMode;
  };

  export type MemoryUsage = {
    total: string;
    used: string;
    free: string;
    reserved?: string;
  };

  export type ClockPolicy = {
    auto_boost: AddressingMode;
    auto_boost_default: AddressingMode;
  };

  export type Clocks = {
    graphics_clock: string;
    sm_clock: string;
    mem_clock: string;
    video_clock: string;
  };

  export type ClocksEventReasons = {
    clocks_event_reason_gpu_idle: string;
    clocks_event_reason_applications_clocks_setting: string;
    clocks_event_reason_sw_power_cap: string;
    clocks_event_reason_hw_slowdown: string;
    clocks_event_reason_hw_thermal_slowdown: string;
    clocks_event_reason_hw_power_brake_slowdown: string;
    clocks_event_reason_sync_boost: string;
    clocks_event_reason_sw_thermal_slowdown: string;
    clocks_event_reason_display_clocks_setting: string;
  };

  export type DeferredClocks = {
    mem_clock: AddressingMode;
  };

  export type DriverModel = {
    current_dm: string;
    pending_dm: string;
  };

  export type ECCErrors = {
    volatile: Aggregate;
    aggregate: Aggregate;
  };

  export type Aggregate = {
    sram_correctable: AddressingMode;
    sram_uncorrectable: AddressingMode;
    dram_correctable: AddressingMode;
    dram_uncorrectable: AddressingMode;
  };

  export type ECCMode = {
    current_ecc: AddressingMode;
    pending_ecc: AddressingMode;
  };

  export type Stats = {
    session_count: number;
    average_fps: number;
    average_latency: number;
  };

  export type Fabric = {
    state: AddressingMode;
    status: AddressingMode;
  };

  export type GPUMemoryPowerReadings = {
    power_draw: AddressingMode;
  };

  export type GPUOperationMode = {
    current_gom: AddressingMode;
    pending_gom: AddressingMode;
  };

  export type PowerReadings = {
    power_state: string;
    power_draw: string;
    current_power_limit: string;
    requested_power_limit: string;
    default_power_limit: string;
    min_power_limit: string;
    max_power_limit: string;
  };

  export type GPUResetStatus = {
    reset_required: string;
    drain_and_reset_recommended: AddressingMode;
  };

  export type GPUVirtualizationMode = {
    virtualization_mode: string;
    host_vgpu_mode: AddressingMode;
  };

  export type Ibmnpu = {
    relaxed_ordering_mode: AddressingMode;
  };

  export type InforomBbxFlush = {
    latest_timestamp: AddressingMode;
    latest_duration: AddressingMode;
  };

  export type InforomVersion = {
    img_version: string;
    oem_object: number;
    ecc_object: AddressingMode;
    pwr_object: AddressingMode;
  };

  export type MaxCustomerBoostClocks = {
    graphics_clock: AddressingMode;
  };

  export type MigMode = {
    current_mig: AddressingMode;
    pending_mig: AddressingMode;
  };

  export type PCI = {
    pci_bus: number;
    pci_device: number;
    pci_domain: number;
    pci_device_id: string;
    pci_bus_id: string;
    pci_sub_system_id: string;
    pci_gpu_link_info: PCIGPULinkInfo;
    pci_bridge_chip: PCIBridgeChip;
    replay_counter: number;
    replay_rollover_counter: number;
    tx_util: string;
    rx_util: string;
    atomic_caps_inbound: AddressingMode;
    atomic_caps_outbound: AddressingMode;
  };

  export type PCIBridgeChip = {
    bridge_chip_type: AddressingMode;
    bridge_chip_fw: AddressingMode;
  };

  export type PCIGPULinkInfo = {
    pcie_gen: PcieGen;
    link_widths: LinkWidths;
  };

  export type LinkWidths = {
    max_link_width: string;
    current_link_width: string;
  };

  export type PcieGen = {
    max_link_gen: number;
    current_link_gen: number;
    device_current_link_gen: number;
    max_device_link_gen: number;
    max_host_link_gen: number;
  };

  export type Processes = {
    process_info: ProcessInfo[];
  };

  export type ProcessInfo = {
    gpu_instance_id: AddressingMode;
    compute_instance_id: AddressingMode;
    pid: number;
    type: Type;
    process_name: string;
    used_memory: AddressingMode;
  };

  export type Type = "C+G" | "C";

  export type RetiredPages = {
    multiple_single_bit_retirement: LEBitRetirement;
    double_bit_retirement: LEBitRetirement;
    pending_blacklist: AddressingMode;
    pending_retirement: AddressingMode;
  };

  export type LEBitRetirement = {
    retired_count: AddressingMode;
    retired_pagelist: AddressingMode;
  };

  export type SupportedClocks = {
    supported_mem_clock: SupportedMemClock[];
  };

  export type SupportedMemClock = {
    value: string;
    supported_graphics_clock: string[];
  };

  export type SupportedGPUTargetTemp = {
    gpu_target_temp_min: string;
    gpu_target_temp_max: string;
  };

  export type Temperature = {
    gpu_temp: string;
    gpu_temp_tlimit: AddressingMode;
    gpu_temp_max_threshold: string;
    gpu_temp_slow_threshold: string;
    gpu_temp_max_gpu_threshold: string;
    gpu_target_temperature: string;
    memory_temp: AddressingMode;
    gpu_temp_max_mem_threshold: AddressingMode;
  };

  export type Utilization = {
    gpu_util: string;
    memory_util: string;
    encoder_util: string;
    decoder_util: string;
    jpeg_util: string;
    ofa_util: string;
  };

  export type Voltage = {
    graphics_volt: AddressingMode;
  };
}
