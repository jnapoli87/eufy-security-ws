import { Voices, CommandName } from "eufy-security-client-fork";

import { DeviceCommand } from "./command";

export interface DeviceResultTypes {
    [DeviceCommand.setStatusLed]: Record<string, never>;
    [DeviceCommand.setAutoNightVision]: Record<string, never>;
    [DeviceCommand.setMotionDetection]: Record<string, never>;
    [DeviceCommand.setSoundDetection]: Record<string, never>;
    [DeviceCommand.setPetDetection]: Record<string, never>;
    [DeviceCommand.setRTSPStream]: Record<string, never>;
    [DeviceCommand.setAntiTheftDetection]: Record<string, never>;
    [DeviceCommand.setWatermark]: Record<string, never>;
    [DeviceCommand.enableDevice]: Record<string, never>;
    [DeviceCommand.lockDevice]: Record<string, never>;
    [DeviceCommand.getPropertiesMetadata]: { serialNumber?: string; properties: Record<string, unknown>; };
    [DeviceCommand.getProperties]: { serialNumber?: string; properties: Record<string, unknown>; };
    [DeviceCommand.setProperty]: { async?: boolean };
    [DeviceCommand.startLivestream]: { async?: boolean };
    [DeviceCommand.stopLivestream]: { async?: boolean };
    [DeviceCommand.isLiveStreaming]: { serialNumber?: string; livestreaming: boolean };
    [DeviceCommand.triggerAlarm]: { async?: boolean };
    [DeviceCommand.resetAlarm]: { async?: boolean };
    [DeviceCommand.panAndTilt]: { async?: boolean };
    [DeviceCommand.quickResponse]: { async?: boolean };
    [DeviceCommand.startDownload]: { async?: boolean };
    [DeviceCommand.cancelDownload]: { async?: boolean };
    [DeviceCommand.isDownloading]: { serialNumber?: string; downloading: boolean };
    [DeviceCommand.getVoices]: { serialNumber?: string; voices: Voices };
    [DeviceCommand.hasProperty]: { serialNumber?: string; exists: boolean };
    [DeviceCommand.hasCommand]: { serialNumber?: string; exists: boolean };
    [DeviceCommand.getCommands]: { serialNumber?: string; commands: Array<CommandName>; };
    [DeviceCommand.startRTSPLivestream]: Record<string, never>;
    [DeviceCommand.stopRTSPLivestream]: Record<string, never>;
    [DeviceCommand.isRTSPLiveStreaming]: { serialNumber?: string; livestreaming: boolean };
    [DeviceCommand.calibrateLock]: { async?: boolean };
    [DeviceCommand.calibrate]: { async?: boolean };
    [DeviceCommand.setDefaultAngle]: { async?: boolean };
    [DeviceCommand.setPrivacyAngle]: { async?: boolean };
    [DeviceCommand.unlock]: { async?: boolean };
    [DeviceCommand.startTalkback]: { async?: boolean };
    [DeviceCommand.stopTalkback]: { async?: boolean };
    [DeviceCommand.talkbackAudioData]: Record<string, never>;
    [DeviceCommand.isTalkbackOngoing]: { serialNumber?: string; talkbackOngoing: boolean };
    [DeviceCommand.snooze]: { async?: boolean };
}
