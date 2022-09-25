import { SmartSafeAlarm911Event, SmartSafeShakeAlarmEvent } from "eufy-security-cliet-fork";

import { JSONValue, OutgoingBaseEvent } from "../outgoing_message";

export enum DeviceEvent {
    deviceAdded = "device added",
    deviceRemoved = "device removed",
    motionDetected = "motion detected",
    personDetected = "person detected",
    cryingDetected = "crying detected",
    soundDetected = "sound detected",
    petDetected = "pet detected",
    rings = "rings",
    sensorOpen = "sensor open",
    gotRtspUrl = "got rtsp url",
    commandResult = "command result",
    propertyChanged = "property changed",
    livestreamStarted = "livestream started",
    livestreamStopped = "livestream stopped",
    livestreamVideoData = "livestream video data",
    livestreamAudioData = "livestream audio data",
    downloadStarted = "download started",
    downloadFinished = "download finished",
    downloadVideoData = "download video data",
    downloadAudioData = "download audio data",
    rtspLivestreamStarted = "rtsp livestream started",
    rtspLivestreamStopped = "rtsp livestream stopped",
    locked = "locked",
    packageDelivered = "package delivered",
    packageStranded = "package stranded",
    packageTaken = "package taken",
    someoneLoitering = "someone loitering",
    radarMotionDetected = "radar motion detected",
    alarm911 = "alarm 911",
    shakeAlarm = "shake alarm",
    wrongTryProtectAlarm = "wrong try-protect alarm",
    LongTimeNotClose = "long time not close",
    lowBattery = "low battery",
    jammed = "jammed",
    talkbackStarted = "talkback started",
    talkbackStopped = "talkback stopped",
}

export interface OutgoingEventDeviceBase extends OutgoingBaseEvent {
    source: "device";
    event: DeviceEvent;
    serialNumber: string;
}

export interface OutgoingEventDeviceAdded extends OutgoingBaseEvent {
    source: "device";
    event: DeviceEvent.deviceAdded;
    device: JSONValue;
}

export interface OutgoingEventDeviceRemoved extends OutgoingBaseEvent {
    source: "device";
    event: DeviceEvent.deviceRemoved;
    device: JSONValue;
}

export interface OutgoingEventDeviceMotionDetected extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.motionDetected;
    serialNumber: string;
    state: boolean;
}

export interface OutgoingEventDevicePersonDetected extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.personDetected;
    serialNumber: string;
    state: boolean;
    person: string;
}

export interface OutgoingEventDeviceCryingDetected extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.cryingDetected;
    state: boolean;
    serialNumber: string;
}

export interface OutgoingEventDeviceSoundDetected extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.soundDetected;
    state: boolean;
    serialNumber: string;
}

export interface OutgoingEventDevicePetDetected extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.petDetected;
    state: boolean;
    serialNumber: string;
}

export interface OutgoingEventDeviceRings extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.rings;
    state: boolean;
    serialNumber: string;
}

export interface OutgoingEventDeviceSensorOpen extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.sensorOpen;
    state: boolean;
    serialNumber: string;
}

export interface OutgoingEventDeviceGotRtspUrl extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.gotRtspUrl;
    serialNumber: string;
    rtspUrl: string;
}

export interface OutgoingEventDeviceCommandResult extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.commandResult;
    serialNumber: string;
    propertyName: string;
    command: string;
    returnCode: number;
    returnCodeName: string;
}

export interface OutgoingEventDevicePropertyChanged extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.propertyChanged;
    serialNumber: string;
    name: string;
    value: JSONValue;
    timestamp: number;
}

export interface OutgoingEventDeviceLivestreamStarted extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.livestreamStarted;
    serialNumber: string;
}

export interface OutgoingEventDeviceLivestreamStopped extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.livestreamStopped;
    serialNumber: string;
}

export interface OutgoingEventDeviceLivestreamVideoData extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.livestreamVideoData;
    serialNumber: string;
    buffer: JSONValue,
    metadata: { 
        videoCodec: string;
        videoFPS: number;
        videoHeight: number;
        videoWidth: number;
    }
}

export interface OutgoingEventDeviceLivestreamAudioData extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.livestreamAudioData;
    serialNumber: string;
    buffer: JSONValue,
    metadata: { 
        audioCodec: string;
    }
}

export interface OutgoingEventDeviceDownloadStarted extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.downloadStarted;
    serialNumber: string;
}

export interface OutgoingEventDeviceDownloadFinished extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.downloadFinished;
    serialNumber: string;
}

export interface OutgoingEventDeviceDownloadVideoData extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.downloadVideoData;
    serialNumber: string;
    buffer: JSONValue,
    metadata: { 
        videoCodec: string;
        videoFPS: number;
        videoHeight: number;
        videoWidth: number;
    }
}

export interface OutgoingEventDeviceDownloadAudioData extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.downloadAudioData;
    serialNumber: string;
    buffer: JSONValue,
    metadata: { 
        audioCodec: string;
    }
}

export interface OutgoingEventDeviceRTSPLivestreamStarted extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.rtspLivestreamStarted;
    serialNumber: string;
}

export interface OutgoingEventDeviceRTSPLivestreamStopped extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.rtspLivestreamStopped;
    serialNumber: string;
}

export interface OutgoingEventDeviceLocked extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.locked;
    serialNumber: string;
    state: boolean;
}

export interface OutgoingEventDevicePackageDelivered extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.packageDelivered;
    serialNumber: string;
    state: boolean;
}

export interface OutgoingEventDevicePackageStranded extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.packageStranded;
    serialNumber: string;
    state: boolean;
}

export interface OutgoingEventDevicePackageTaken extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.packageTaken;
    serialNumber: string;
    state: boolean;
}

export interface OutgoingEventDeviceSomeoneLoitering extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.someoneLoitering;
    serialNumber: string;
    state: boolean;
}

export interface OutgoingEventDeviceRadarMotionDetected extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.radarMotionDetected;
    serialNumber: string;
    state: boolean;
}

export interface OutgoingEventDeviceAlarm911 extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.alarm911;
    serialNumber: string;
    state: boolean;
    detail: SmartSafeAlarm911Event;
}

export interface OutgoingEventDeviceShakeAlarm extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.shakeAlarm;
    serialNumber: string;
    state: boolean;
    detail: SmartSafeShakeAlarmEvent;
}

export interface OutgoingEventDeviceWrongTryProtectAlarm extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.wrongTryProtectAlarm;
    serialNumber: string;
    state: boolean;
}

export interface OutgoingEventDeviceLongTimeNotClose extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.LongTimeNotClose;
    serialNumber: string;
    state: boolean;
}

export interface OutgoingEventDeviceLowBattery extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.lowBattery;
    serialNumber: string;
    state: boolean;
}

export interface OutgoingEventDeviceJammed extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.jammed;
    serialNumber: string;
    state: boolean;
}

export interface OutgoingEventDeviceTalkbackStarted extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.talkbackStarted;
    serialNumber: string;
}

export interface OutgoingEventDeviceTalkbackStopped extends OutgoingEventDeviceBase {
    source: "device";
    event: DeviceEvent.talkbackStopped;
    serialNumber: string;
}

export type OutgoingEventDevice =
  | OutgoingEventDeviceAdded
  | OutgoingEventDeviceRemoved
  | OutgoingEventDeviceMotionDetected
  | OutgoingEventDevicePersonDetected
  | OutgoingEventDeviceCryingDetected
  | OutgoingEventDeviceSoundDetected
  | OutgoingEventDevicePetDetected
  | OutgoingEventDeviceRings
  | OutgoingEventDeviceSensorOpen
  | OutgoingEventDeviceGotRtspUrl
  | OutgoingEventDeviceCommandResult
  | OutgoingEventDevicePropertyChanged
  | OutgoingEventDeviceLivestreamStarted
  | OutgoingEventDeviceLivestreamStopped
  | OutgoingEventDeviceLivestreamVideoData
  | OutgoingEventDeviceLivestreamAudioData
  | OutgoingEventDeviceDownloadStarted
  | OutgoingEventDeviceDownloadFinished
  | OutgoingEventDeviceDownloadVideoData
  | OutgoingEventDeviceDownloadAudioData
  | OutgoingEventDeviceRTSPLivestreamStarted
  | OutgoingEventDeviceRTSPLivestreamStopped
  | OutgoingEventDeviceLocked
  | OutgoingEventDevicePackageDelivered
  | OutgoingEventDevicePackageStranded
  | OutgoingEventDevicePackageTaken
  | OutgoingEventDeviceSomeoneLoitering
  | OutgoingEventDeviceRadarMotionDetected
  | OutgoingEventDeviceAlarm911
  | OutgoingEventDeviceShakeAlarm
  | OutgoingEventDeviceWrongTryProtectAlarm
  | OutgoingEventDeviceLongTimeNotClose
  | OutgoingEventDeviceLowBattery
  | OutgoingEventDeviceJammed
  | OutgoingEventDeviceTalkbackStarted
  | OutgoingEventDeviceTalkbackStopped;
