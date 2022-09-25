import { Device, IndexedProperty, PropertyName } from "eufy-security-client-fork"

export interface DevicePropertiesSchema0 {
    name: string;
    model: string;
    serialNumber: string;
    hardwareVersion: string;
    softwareVersion: string;
    type: number;
    stationSerialNumber: string;
    battery: number;
    batteryTemperature: number;
    batteryLow: boolean;
    batteryIsCharging: boolean;
    lastChargingDays: number;
    lastChargingTotalEvents: number;
    lastChargingRecordedEvents: number;
    lastChargingFalseEvents: number;
    batteryUsageLastWeek: number;
    wifiRssi: number;
    wifiSignalLevel: number;
    enabled: boolean;
    antitheftDetection: boolean;
    autoNightvision: boolean;
    nightvision: boolean;
    statusLed: boolean;
    motionDetection: boolean;
    motionDetectionType: number;
    motionDetectionSensitivity: number;
    motionZone: string;
    motionDetectionRange: boolean;
    motionDetectionRangeStandardSensitivity: number;
    motionDetectionRangeAdvancedLeftSensitivity: number;
    motionDetectionRangeAdvancedMiddleSensitivity: number;
    motionDetectionRangeAdvancedRightSensitivity: number;
    motionDetectionTestMode: boolean;
    motionDetected: boolean;
    motionTracking: boolean;
    motionTrackingSensitivity: number;
    motionAutoCruise: boolean;
    motionOutOfViewDetection: boolean;
    personDetected: boolean;
    personName: string;
    rtspStream: boolean;
    rtspStreamUrl: string;
    watermark: number;
    pictureUrl: string;
    state: number;
    petDetection: boolean;
    petDetected: boolean;
    soundDetection: boolean;
    soundDetectionType: number;
    soundDetectionSensitivity: number;
    soundDetected: boolean;
    cryingDetected: boolean;
    sensorOpen: boolean;
    sensorChangeTime: number;
    motionSensorPirEvent: number;
    locked: boolean;
    ringing: boolean;
    lockStatus: number;
    light: boolean;
    microphone: boolean;
    speaker: boolean;
    speakerVolume: number;
    ringtoneVolume: number;
    audioRecording: boolean;
    powerSource: number;
    powerWorkingMode: number;
    chargingStatus: number;
    recordingEndClipMotionStops: boolean;
    recordingClipLength: number;
    recordingRetriggerInterval: number;
    videoStreamingQuality: number;
    videoRecordingQuality: number;
    videoWdr: boolean;
    lightSettingsEnable: boolean;
    lightSettingsBrightnessManual: number;
    lightSettingsColorTemperatureManual: number;
    lightSettingsBrightnessMotion: number;
    lightSettingsColorTemperatureMotion: number;
    lightSettingsBrightnessSchedule: number;
    lightSettingsColorTemperatureSchedule: number;
    lightSettingsMotionTriggered: boolean;
    lightSettingsMotionActivationMode: number;
    lightSettingsMotionTriggeredDistance: number;
    lightSettingsMotionTriggeredTimer: number;
    chimeIndoor: boolean;
    chimeHomebase: boolean;
    chimeHomebaseRingtoneVolume: number;
    chimeHomebaseRingtoneType: number;
    notificationType: number;
    rotationSpeed: number;
    imageMirrored: boolean;
    notificationPerson: boolean;
    notificationPet: boolean;
    notificationAllOtherMotion: boolean;
    notificationCrying: boolean;
    notificationAllSound: boolean;
    notificationIntervalTime: boolean;
    notificationRing: boolean;
    notificationMotion: boolean;
    notificationRadarDetector: boolean;
    continuousRecording: boolean;
    continuousRecordingType: number;
    chirpVolume: number;
    chirpTone: number;
    videoHdr: boolean;
    videoDistortionCorrection: boolean;
    videoRingRecord: number;
    videoNightvisionImageAdjustment: boolean;
    videoColorNightvision: boolean;
    autoCalibration: boolean;
    autoLock: boolean;
    autoLockTimer: number;
    autoLockSchedule: boolean;
    autoLockScheduleStartTime: string;
    autoLockScheduleEndTime: string;
    oneTouchLocking: boolean;
    wrongTryProtection: boolean;
    wrongTryAttempts: number;
    wrongTryLockdownTime: number;
    scramblePasscode: boolean;
    sound: number;
    notification: boolean;
    notificationUnlocked: boolean;
    notificationLocked: boolean;
    loiteringDetection: boolean;
    loiteringDetectionRange: number;
    loiteringDetectionLength: number;
    motionDetectionSensitivityMode: number;
    motionDetectionSensitivityStandard: number;
    motionDetectionSensitivityAdvancedA: number;
    motionDetectionSensitivityAdvancedB: number;
    motionDetectionSensitivityAdvancedC: number;
    motionDetectionSensitivityAdvancedD: number;
    motionDetectionSensitivityAdvancedE: number;
    motionDetectionSensitivityAdvancedF: number;
    motionDetectionSensitivityAdvancedG: number;
    motionDetectionSensitivityAdvancedH: number;
    loiteringCustomResponsePhoneNotification: boolean;
    loiteringCustomResponseAutoVoiceResponse: boolean;
    loiteringCustomResponseAutoVoiceResponseVoice: number;
    loiteringCustomResponseHomeBaseNotification: boolean;
    loiteringCustomResponseTimeFrom: string;
    loiteringCustomResponseTimeTo: string;
    deliveryGuard: boolean;
    deliveryGuardPackageGuarding: boolean;
    deliveryGuardPackageGuardingVoiceResponseVoice: number;
    deliveryGuardPackageGuardingActivatedTimeFrom: string;
    deliveryGuardPackageGuardingActivatedTimeTo: string;
    deliveryGuardUncollectedPackageAlert: boolean;
    deliveryGuardUncollectedPackageAlertTimeToCheck: string;
    deliveryGuardPackageLiveCheckAssistance: boolean;
    dualCamWatchViewMode: number;
    ringAutoResponse: boolean;
    ringAutoResponseVoiceResponse: boolean;
    ringAutoResponseVoiceResponseVoice: number;
    ringAutoResponseTimeFrom: string;
    ringAutoResponseTimeTo: string;
    defaultAngle: boolean;
    defaultAngleIdleTime: number;
    soundDetectionRoundLook: boolean;
    packageDelivered: boolean;
    packageStranded: boolean;
    packageTaken: boolean;
    someoneLoitering: boolean;
    radarMotionDetected: boolean;
    leftOpenAlarm: boolean;
    leftOpenAlarmDuration: number;
    dualUnlock: boolean;
    powerSave: boolean;
    interiorBrightness: number;
    interiorBrightnessDuration: number;
    tamperAlarm: number;
    remoteUnlock: boolean;
    remoteUnlockMasterPIN: boolean;
    alarmVolume: number;
    promptVolume: number;
    notificationUnlockByKey: boolean;
    notificationUnlockByPIN: boolean;
    notificationUnlockByFingerprint: boolean;
    notificationUnlockByApp: boolean;
    notificationDualUnlock: boolean;
    notificationDualLock: boolean;
    notificationWrongTryProtect: boolean;
    notificationJammed: boolean;
    jammedAlert: boolean;
    "911Alert": boolean;
    "911AlertEvent": boolean;
    shakeAlert: boolean;
    shakeAlertEvent: boolean;
    lowBatteryAlert: boolean;
    longTimeNotCloseAlert: boolean;
    wrongTryProtectAlert: boolean;
    videoTypeStoreToNAS: number;
    snooze: boolean;
    snoozeTime: number;
}

export type DeviceProperties = 
  | DevicePropertiesSchema0;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const dumpDeviceProperties = (device: Device, schemaVersion: number): DeviceProperties => {
    const base: DevicePropertiesSchema0 = {
        name: device.getPropertyValue(PropertyName.Name) as string,
        model: device.getPropertyValue(PropertyName.Model) as string,
        serialNumber: device.getPropertyValue(PropertyName.SerialNumber) as string,
        hardwareVersion: device.getPropertyValue(PropertyName.HardwareVersion) as string,
        softwareVersion: device.getPropertyValue(PropertyName.SoftwareVersion) as string,
        type: device.getPropertyValue(PropertyName.Type) as number,
        stationSerialNumber: device.getPropertyValue(PropertyName.DeviceStationSN) as string,
        battery: device.getPropertyValue(PropertyName.DeviceBattery) as number,
        batteryTemperature: device.getPropertyValue(PropertyName.DeviceBatteryTemp) as number,
        batteryLow: device.getPropertyValue(PropertyName.DeviceBatteryLow) as boolean,
        batteryIsCharging: device.getPropertyValue(PropertyName.DeviceBatteryIsCharging) as boolean,
        lastChargingDays: device.getPropertyValue(PropertyName.DeviceLastChargingDays) as number,
        lastChargingTotalEvents: device.getPropertyValue(PropertyName.DeviceLastChargingTotalEvents) as number,
        lastChargingRecordedEvents: device.getPropertyValue(PropertyName.DeviceLastChargingRecordedEvents) as number,
        lastChargingFalseEvents: device.getPropertyValue(PropertyName.DeviceLastChargingFalseEvents) as number,
        batteryUsageLastWeek: device.getPropertyValue(PropertyName.DeviceBatteryUsageLastWeek) as number,
        wifiRssi: device.getPropertyValue(PropertyName.DeviceWifiRSSI) as number,
        wifiSignalLevel: device.getPropertyValue(PropertyName.DeviceWifiSignalLevel) as number,
        enabled: device.getPropertyValue(PropertyName.DeviceEnabled) as boolean,
        antitheftDetection: device.getPropertyValue(PropertyName.DeviceAntitheftDetection) as boolean,
        autoNightvision: device.getPropertyValue(PropertyName.DeviceAutoNightvision) as boolean,
        nightvision: device.getPropertyValue(PropertyName.DeviceNightvision) as boolean,
        statusLed: device.getPropertyValue(PropertyName.DeviceStatusLed) as boolean,
        motionDetection: device.getPropertyValue(PropertyName.DeviceMotionDetection) as boolean,
        motionDetectionType: device.getPropertyValue(PropertyName.DeviceMotionDetectionType) as number,
        motionDetectionSensitivity: device.getPropertyValue(PropertyName.DeviceMotionDetectionSensitivity) as number,
        motionZone: device.getPropertyValue(PropertyName.DeviceMotionZone) as string,
        motionDetectionRange: device.getPropertyValue(PropertyName.DeviceMotionDetectionRange) as boolean,
        motionDetectionRangeStandardSensitivity: device.getPropertyValue(PropertyName.DeviceMotionDetectionRangeStandardSensitivity) as number,
        motionDetectionRangeAdvancedLeftSensitivity: device.getPropertyValue(PropertyName.DeviceMotionDetectionRangeAdvancedLeftSensitivity) as number,
        motionDetectionRangeAdvancedMiddleSensitivity: device.getPropertyValue(PropertyName.DeviceMotionDetectionRangeAdvancedMiddleSensitivity) as number,
        motionDetectionRangeAdvancedRightSensitivity: device.getPropertyValue(PropertyName.DeviceMotionDetectionRangeAdvancedRightSensitivity) as number,
        motionDetectionTestMode: device.getPropertyValue(PropertyName.DeviceMotionDetectionTestMode) as boolean,
        motionDetected: device.getPropertyValue(PropertyName.DeviceMotionDetected) as boolean,
        motionTracking: device.getPropertyValue(PropertyName.DeviceMotionTracking) as boolean,
        motionTrackingSensitivity: device.getPropertyValue(PropertyName.DeviceMotionTrackingSensitivity) as number,
        motionAutoCruise: device.getPropertyValue(PropertyName.DeviceMotionAutoCruise) as boolean,
        motionOutOfViewDetection: device.getPropertyValue(PropertyName.DeviceMotionOutOfViewDetection) as boolean,
        personDetected: device.getPropertyValue(PropertyName.DevicePersonDetected) as boolean,
        personName: device.getPropertyValue(PropertyName.DevicePersonName) as string,
        rtspStream: device.getPropertyValue(PropertyName.DeviceRTSPStream) as boolean,
        rtspStreamUrl: device.getPropertyValue(PropertyName.DeviceRTSPStreamUrl) as string,
        watermark: device.getPropertyValue(PropertyName.DeviceWatermark) as number,
        pictureUrl: device.getPropertyValue(PropertyName.DevicePictureUrl) as string,
        state: device.getPropertyValue(PropertyName.DeviceState) as number,
        petDetection: device.getPropertyValue(PropertyName.DevicePetDetection) as boolean,
        petDetected: device.getPropertyValue(PropertyName.DevicePetDetected) as boolean,
        soundDetection: device.getPropertyValue(PropertyName.DeviceSoundDetection) as boolean,
        soundDetectionType: device.getPropertyValue(PropertyName.DeviceSoundDetectionType) as number,
        soundDetectionSensitivity: device.getPropertyValue(PropertyName.DeviceSoundDetectionSensitivity) as number,
        soundDetected: device.getPropertyValue(PropertyName.DeviceSoundDetected) as boolean,
        cryingDetected: device.getPropertyValue(PropertyName.DeviceCryingDetected) as boolean,
        sensorOpen: device.getPropertyValue(PropertyName.DeviceSensorOpen) as boolean,
        sensorChangeTime: device.getPropertyValue(PropertyName.DeviceSensorChangeTime) as number,
        motionSensorPirEvent: device.getPropertyValue(PropertyName.DeviceMotionSensorPIREvent) as number,
        locked: device.getPropertyValue(PropertyName.DeviceLocked) as boolean,
        ringing: device.getPropertyValue(PropertyName.DeviceRinging) as boolean,
        lockStatus: device.getPropertyValue(PropertyName.DeviceLockStatus) as number,
        light: device.getPropertyValue(PropertyName.DeviceLight) as boolean,
        microphone: device.getPropertyValue(PropertyName.DeviceMicrophone) as boolean,
        speaker: device.getPropertyValue(PropertyName.DeviceSpeaker) as boolean,
        speakerVolume: device.getPropertyValue(PropertyName.DeviceSpeakerVolume) as number,
        ringtoneVolume: device.getPropertyValue(PropertyName.DeviceRingtoneVolume) as number,
        audioRecording: device.getPropertyValue(PropertyName.DeviceAudioRecording) as boolean,
        powerSource: device.getPropertyValue(PropertyName.DevicePowerSource) as number,
        powerWorkingMode: device.getPropertyValue(PropertyName.DevicePowerWorkingMode) as number,
        chargingStatus: device.getPropertyValue(PropertyName.DeviceChargingStatus) as number,
        recordingEndClipMotionStops: device.getPropertyValue(PropertyName.DeviceRecordingEndClipMotionStops) as boolean,
        recordingClipLength: device.getPropertyValue(PropertyName.DeviceRecordingClipLength) as number,
        recordingRetriggerInterval: device.getPropertyValue(PropertyName.DeviceRecordingRetriggerInterval) as number,
        videoStreamingQuality: device.getPropertyValue(PropertyName.DeviceVideoStreamingQuality) as number,
        videoRecordingQuality: device.getPropertyValue(PropertyName.DeviceVideoRecordingQuality) as number,
        videoWdr: device.getPropertyValue(PropertyName.DeviceVideoWDR) as boolean,
        lightSettingsEnable: device.getPropertyValue(PropertyName.DeviceLightSettingsEnable) as boolean,
        lightSettingsBrightnessManual: device.getPropertyValue(PropertyName.DeviceLightSettingsBrightnessManual) as number,
        lightSettingsColorTemperatureManual: device.getPropertyValue(PropertyName.DeviceLightSettingsColorTemperatureManual) as number,
        lightSettingsBrightnessMotion: device.getPropertyValue(PropertyName.DeviceLightSettingsBrightnessMotion) as number,
        lightSettingsColorTemperatureMotion: device.getPropertyValue(PropertyName.DeviceLightSettingsColorTemperatureMotion) as number,
        lightSettingsBrightnessSchedule: device.getPropertyValue(PropertyName.DeviceLightSettingsBrightnessSchedule) as number,
        lightSettingsColorTemperatureSchedule: device.getPropertyValue(PropertyName.DeviceLightSettingsColorTemperatureSchedule) as number,
        lightSettingsMotionTriggered: device.getPropertyValue(PropertyName.DeviceLightSettingsMotionTriggered) as boolean,
        lightSettingsMotionActivationMode: device.getPropertyValue(PropertyName.DeviceLightSettingsMotionActivationMode) as number,
        lightSettingsMotionTriggeredDistance: device.getPropertyValue(PropertyName.DeviceLightSettingsMotionTriggeredDistance) as number,
        lightSettingsMotionTriggeredTimer: device.getPropertyValue(PropertyName.DeviceLightSettingsMotionTriggeredTimer) as number,
        chimeIndoor: device.getPropertyValue(PropertyName.DeviceChimeIndoor) as boolean,
        chimeHomebase: device.getPropertyValue(PropertyName.DeviceChimeHomebase) as boolean,
        chimeHomebaseRingtoneVolume: device.getPropertyValue(PropertyName.DeviceChimeHomebaseRingtoneVolume) as number,
        chimeHomebaseRingtoneType: device.getPropertyValue(PropertyName.DeviceChimeHomebaseRingtoneType) as number,
        notificationType: device.getPropertyValue(PropertyName.DeviceNotificationType) as number,
        rotationSpeed: device.getPropertyValue(PropertyName.DeviceRotationSpeed) as number,
        imageMirrored: device.getPropertyValue(PropertyName.DeviceImageMirrored) as boolean,
        notificationPerson: device.getPropertyValue(PropertyName.DeviceNotificationPerson) as boolean,
        notificationPet: device.getPropertyValue(PropertyName.DeviceNotificationPet) as boolean,
        notificationAllOtherMotion: device.getPropertyValue(PropertyName.DeviceNotificationAllOtherMotion) as boolean,
        notificationCrying: device.getPropertyValue(PropertyName.DeviceNotificationCrying) as boolean,
        notificationAllSound: device.getPropertyValue(PropertyName.DeviceNotificationAllSound) as boolean,
        notificationIntervalTime: device.getPropertyValue(PropertyName.DeviceNotificationIntervalTime) as boolean,
        notificationRing: device.getPropertyValue(PropertyName.DeviceNotificationRing) as boolean,
        notificationMotion: device.getPropertyValue(PropertyName.DeviceNotificationMotion) as boolean,
        notificationRadarDetector: device.getPropertyValue(PropertyName.DeviceNotificationRadarDetector) as boolean,
        continuousRecording: device.getPropertyValue(PropertyName.DeviceContinuousRecording) as boolean,
        continuousRecordingType: device.getPropertyValue(PropertyName.DeviceContinuousRecordingType) as number,
        chirpVolume: device.getPropertyValue(PropertyName.DeviceChirpVolume) as number,
        chirpTone: device.getPropertyValue(PropertyName.DeviceChirpTone) as number,
        videoHdr: device.getPropertyValue(PropertyName.DeviceVideoHDR) as boolean,
        videoDistortionCorrection: device.getPropertyValue(PropertyName.DeviceVideoDistortionCorrection) as boolean,
        videoRingRecord: device.getPropertyValue(PropertyName.DeviceVideoRingRecord) as number,
        videoNightvisionImageAdjustment: device.getPropertyValue(PropertyName.DeviceVideoNightvisionImageAdjustment) as boolean,
        videoColorNightvision: device.getPropertyValue(PropertyName.DeviceVideoColorNightvision) as boolean,
        autoCalibration: device.getPropertyValue(PropertyName.DeviceAutoCalibration) as boolean,
        autoLock: device.getPropertyValue(PropertyName.DeviceAutoLock) as boolean,
        autoLockTimer: device.getPropertyValue(PropertyName.DeviceAutoLockTimer) as number,
        autoLockSchedule: device.getPropertyValue(PropertyName.DeviceAutoLockSchedule) as boolean,
        autoLockScheduleStartTime: device.getPropertyValue(PropertyName.DeviceAutoLockScheduleStartTime) as string,
        autoLockScheduleEndTime: device.getPropertyValue(PropertyName.DeviceAutoLockScheduleEndTime) as string,
        oneTouchLocking: device.getPropertyValue(PropertyName.DeviceOneTouchLocking) as boolean,
        wrongTryProtection: device.getPropertyValue(PropertyName.DeviceWrongTryProtection) as boolean,
        wrongTryAttempts: device.getPropertyValue(PropertyName.DeviceWrongTryAttempts) as number,
        wrongTryLockdownTime: device.getPropertyValue(PropertyName.DeviceWrongTryLockdownTime) as number,
        scramblePasscode: device.getPropertyValue(PropertyName.DeviceScramblePasscode) as boolean,
        sound: device.getPropertyValue(PropertyName.DeviceSound) as number,
        notification: device.getPropertyValue(PropertyName.DeviceNotification) as boolean,
        notificationUnlocked: device.getPropertyValue(PropertyName.DeviceNotificationUnlocked) as boolean,
        notificationLocked: device.getPropertyValue(PropertyName.DeviceNotificationLocked) as boolean,
        loiteringDetection: device.getPropertyValue(PropertyName.DeviceLoiteringDetection) as boolean,
        loiteringDetectionRange: device.getPropertyValue(PropertyName.DeviceLoiteringDetectionRange) as number,
        loiteringDetectionLength: device.getPropertyValue(PropertyName.DeviceLoiteringDetectionLength) as number,
        motionDetectionSensitivityMode: device.getPropertyValue(PropertyName.DeviceMotionDetectionSensitivityMode) as number,
        motionDetectionSensitivityStandard: device.getPropertyValue(PropertyName.DeviceMotionDetectionSensitivityStandard) as number,
        motionDetectionSensitivityAdvancedA: device.getPropertyValue(PropertyName.DeviceMotionDetectionSensitivityAdvancedA) as number,
        motionDetectionSensitivityAdvancedB: device.getPropertyValue(PropertyName.DeviceMotionDetectionSensitivityAdvancedB) as number,
        motionDetectionSensitivityAdvancedC: device.getPropertyValue(PropertyName.DeviceMotionDetectionSensitivityAdvancedC) as number,
        motionDetectionSensitivityAdvancedD: device.getPropertyValue(PropertyName.DeviceMotionDetectionSensitivityAdvancedD) as number,
        motionDetectionSensitivityAdvancedE: device.getPropertyValue(PropertyName.DeviceMotionDetectionSensitivityAdvancedE) as number,
        motionDetectionSensitivityAdvancedF: device.getPropertyValue(PropertyName.DeviceMotionDetectionSensitivityAdvancedF) as number,
        motionDetectionSensitivityAdvancedG: device.getPropertyValue(PropertyName.DeviceMotionDetectionSensitivityAdvancedG) as number,
        motionDetectionSensitivityAdvancedH: device.getPropertyValue(PropertyName.DeviceMotionDetectionSensitivityAdvancedH) as number,
        loiteringCustomResponsePhoneNotification: device.getPropertyValue(PropertyName.DeviceLoiteringCustomResponsePhoneNotification) as boolean,
        loiteringCustomResponseAutoVoiceResponse: device.getPropertyValue(PropertyName.DeviceLoiteringCustomResponseAutoVoiceResponse) as boolean,
        loiteringCustomResponseAutoVoiceResponseVoice: device.getPropertyValue(PropertyName.DeviceLoiteringCustomResponseAutoVoiceResponseVoice) as number,
        loiteringCustomResponseHomeBaseNotification: device.getPropertyValue(PropertyName.DeviceLoiteringCustomResponseHomeBaseNotification) as boolean,
        loiteringCustomResponseTimeFrom: device.getPropertyValue(PropertyName.DeviceLoiteringCustomResponseTimeFrom) as string,
        loiteringCustomResponseTimeTo: device.getPropertyValue(PropertyName.DeviceLoiteringCustomResponseTimeTo) as string,
        deliveryGuard: device.getPropertyValue(PropertyName.DeviceDeliveryGuard) as boolean,
        deliveryGuardPackageGuarding: device.getPropertyValue(PropertyName.DeviceDeliveryGuardPackageGuarding) as boolean,
        deliveryGuardPackageGuardingVoiceResponseVoice: device.getPropertyValue(PropertyName.DeviceDeliveryGuardPackageGuardingVoiceResponseVoice) as number,
        deliveryGuardPackageGuardingActivatedTimeFrom: device.getPropertyValue(PropertyName.DeviceDeliveryGuardPackageGuardingActivatedTimeFrom) as string,
        deliveryGuardPackageGuardingActivatedTimeTo: device.getPropertyValue(PropertyName.DeviceDeliveryGuardPackageGuardingActivatedTimeTo) as string,
        deliveryGuardUncollectedPackageAlert: device.getPropertyValue(PropertyName.DeviceDeliveryGuardUncollectedPackageAlert) as boolean,
        deliveryGuardUncollectedPackageAlertTimeToCheck: device.getPropertyValue(PropertyName.DeviceDeliveryGuardUncollectedPackageAlertTimeToCheck) as string,
        deliveryGuardPackageLiveCheckAssistance: device.getPropertyValue(PropertyName.DeviceDeliveryGuardPackageLiveCheckAssistance) as boolean,
        dualCamWatchViewMode: device.getPropertyValue(PropertyName.DeviceDualCamWatchViewMode) as number,
        ringAutoResponse: device.getPropertyValue(PropertyName.DeviceRingAutoResponse) as boolean,
        ringAutoResponseVoiceResponse: device.getPropertyValue(PropertyName.DeviceRingAutoResponseVoiceResponse) as boolean,
        ringAutoResponseVoiceResponseVoice: device.getPropertyValue(PropertyName.DeviceRingAutoResponseVoiceResponseVoice) as number,
        ringAutoResponseTimeFrom: device.getPropertyValue(PropertyName.DeviceRingAutoResponseTimeFrom) as string,
        ringAutoResponseTimeTo: device.getPropertyValue(PropertyName.DeviceRingAutoResponseTimeTo) as string,
        defaultAngle: device.getPropertyValue(PropertyName.DeviceDefaultAngle) as boolean,
        defaultAngleIdleTime: device.getPropertyValue(PropertyName.DeviceDefaultAngleIdleTime) as number,
        soundDetectionRoundLook: device.getPropertyValue(PropertyName.DeviceSoundDetectionRoundLook) as boolean,
        packageDelivered: device.getPropertyValue(PropertyName.DevicePackageDelivered) as boolean,
        packageStranded: device.getPropertyValue(PropertyName.DevicePackageStranded) as boolean,
        packageTaken: device.getPropertyValue(PropertyName.DevicePackageTaken) as boolean,
        someoneLoitering: device.getPropertyValue(PropertyName.DeviceSomeoneLoitering) as boolean,
        radarMotionDetected: device.getPropertyValue(PropertyName.DeviceRadarMotionDetected) as boolean,
        leftOpenAlarm: device.getPropertyValue(PropertyName.DeviceLeftOpenAlarm) as boolean,
        leftOpenAlarmDuration: device.getPropertyValue(PropertyName.DeviceLeftOpenAlarmDuration) as number,
        dualUnlock: device.getPropertyValue(PropertyName.DeviceDualUnlock) as boolean,
        powerSave: device.getPropertyValue(PropertyName.DevicePowerSave) as boolean,
        interiorBrightness: device.getPropertyValue(PropertyName.DeviceInteriorBrightness) as number,
        interiorBrightnessDuration: device.getPropertyValue(PropertyName.DeviceInteriorBrightnessDuration) as number,
        tamperAlarm: device.getPropertyValue(PropertyName.DeviceTamperAlarm) as number,
        remoteUnlock: device.getPropertyValue(PropertyName.DeviceRemoteUnlock) as boolean,
        remoteUnlockMasterPIN: device.getPropertyValue(PropertyName.DeviceRemoteUnlockMasterPIN) as boolean,
        alarmVolume: device.getPropertyValue(PropertyName.DeviceAlarmVolume) as number,
        promptVolume: device.getPropertyValue(PropertyName.DevicePromptVolume) as number,
        notificationUnlockByKey: device.getPropertyValue(PropertyName.DeviceNotificationUnlockByKey) as boolean,
        notificationUnlockByPIN: device.getPropertyValue(PropertyName.DeviceNotificationUnlockByPIN) as boolean,
        notificationUnlockByFingerprint: device.getPropertyValue(PropertyName.DeviceNotificationUnlockByFingerprint) as boolean,
        notificationUnlockByApp: device.getPropertyValue(PropertyName.DeviceNotificationUnlockByApp) as boolean,
        notificationDualUnlock: device.getPropertyValue(PropertyName.DeviceNotificationDualUnlock) as boolean,
        notificationDualLock: device.getPropertyValue(PropertyName.DeviceNotificationDualLock) as boolean,
        notificationWrongTryProtect: device.getPropertyValue(PropertyName.DeviceNotificationWrongTryProtect) as boolean,
        notificationJammed: device.getPropertyValue(PropertyName.DeviceNotificationJammed) as boolean,
        jammedAlert: device.getPropertyValue(PropertyName.DeviceJammedAlert) as boolean,
        "911Alert": device.getPropertyValue(PropertyName.Device911Alert) as boolean,
        "911AlertEvent": device.getPropertyValue(PropertyName.Device911AlertEvent) as boolean,
        shakeAlert: device.getPropertyValue(PropertyName.DeviceShakeAlert) as boolean,
        shakeAlertEvent: device.getPropertyValue(PropertyName.DeviceShakeAlertEvent) as boolean,
        lowBatteryAlert: device.getPropertyValue(PropertyName.DeviceLowBatteryAlert) as boolean,
        longTimeNotCloseAlert: device.getPropertyValue(PropertyName.DeviceLongTimeNotCloseAlert) as boolean,
        wrongTryProtectAlert: device.getPropertyValue(PropertyName.DeviceWrongTryProtectAlert) as boolean,
        videoTypeStoreToNAS: device.getPropertyValue(PropertyName.DeviceVideoTypeStoreToNAS) as number,
        snooze: device.getPropertyValue(PropertyName.DeviceSnooze) as boolean,
        snoozeTime: device.getPropertyValue(PropertyName.DeviceSnoozeTime) as number,
    }

    return base;
}

export const dumpDevicePropertiesMetadata = (device: Device, schemaVersion: number): IndexedProperty => {
    const properties = dumpDeviceProperties(device, schemaVersion);
    const metadata = device.getPropertiesMetadata();

    const result: IndexedProperty = {};

    Object.keys(metadata).forEach((property) => {
        if (Object.keys(properties).includes(property))
            result[property] = metadata[property];
    });

    return result;
}
