import { AlarmEvent, CustomData } from "eufy-security-client-fork";

import { JSONValue, OutgoingBaseEvent } from "../outgoing_message";

export enum StationEvent {
    stationAdded = "station added",
    stationRemoved = "station removed",
    guardModeChanged = "guard mode changed",
    currentModeChanged = "current mode changed",
    commandResult = "command result",
    connected = "connected",
    disconnected = "disconnected",
    connectionError = "connection error",
    propertyChanged = "property changed",
    alarmEvent = "alarm event",
    alarmDelayEvent = "alarm delay event",
    alarmArmedEvent = "alarm armed event",
    alarmArmDelayEvent = "alarm arm delay event",
}

export interface OutgoingEventStationBase extends OutgoingBaseEvent {
    source: "station";
    event: StationEvent;
    serialNumber: string;
}

export interface OutgoingEventStationAdded extends OutgoingBaseEvent {
    source: "station";
    event: StationEvent.stationAdded;
    station: JSONValue;
}

export interface OutgoingEventStationRemoved extends OutgoingBaseEvent {
    source: "station";
    event: StationEvent.stationRemoved;
    station: JSONValue;
}

export interface OutgoingEventStationGuardModeChanged extends OutgoingEventStationBase {
    source: "station";
    event: StationEvent.guardModeChanged;
    serialNumber: string;
    guardMode: number;
    currentMode?: number; // for backward compatibility schemaVersion <= 2
}

export interface OutgoingEventStationCurrentModeChanged extends OutgoingEventStationBase {
    source: "station";
    event: StationEvent.currentModeChanged;
    serialNumber: string;
    currentMode: number;
}

export interface OutgoingEventStationCommandResult extends OutgoingEventStationBase {
    source: "station";
    event: StationEvent.commandResult;
    serialNumber: string;
    command: string;
    returnCode: number;
    returnCodeName: string;
    customData?: CustomData;
}

export interface OutgoingEventStationConnected extends OutgoingEventStationBase {
    source: "station";
    event: StationEvent.connected;
    serialNumber: string;
}

export interface OutgoingEventStationDisconnected extends OutgoingEventStationBase {
    source: "station";
    event: StationEvent.disconnected;
    serialNumber: string;
}

export interface OutgoingEventStationPropertyChanged extends OutgoingEventStationBase {
    source: "station";
    event: StationEvent.propertyChanged;
    serialNumber: string;
    name: string;
    value: JSONValue;
}

export interface OutgoingEventStationAlarmEvent extends OutgoingEventStationBase {
    source: "station";
    event: StationEvent.alarmEvent;
    serialNumber: string;
    alarmEvent: AlarmEvent;
}

export interface OutgoingEventStationAlarmDelayEvent extends OutgoingEventStationBase {
    source: "station";
    event: StationEvent.alarmDelayEvent;
    serialNumber: string;
    alarmDelayEvent: AlarmEvent;
    alarmDelay: number;
}

export interface OutgoingEventStationAlarmArmedEvent extends OutgoingEventStationBase {
    source: "station";
    event: StationEvent.alarmArmedEvent;
    serialNumber: string;
}

export interface OutgoingEventStationAlarmArmDelayEvent extends OutgoingEventStationBase {
    source: "station";
    event: StationEvent.alarmArmDelayEvent;
    serialNumber: string;
    armDelay: number;
}

export interface OutgoingEventStationConnectionError extends OutgoingEventStationBase {
    source: "station";
    event: StationEvent.connectionError;
    serialNumber: string;
}

export type OutgoingEventStation =
  | OutgoingEventStationAdded
  | OutgoingEventStationRemoved
  | OutgoingEventStationGuardModeChanged
  | OutgoingEventStationCurrentModeChanged
  | OutgoingEventStationCommandResult
  | OutgoingEventStationConnected
  | OutgoingEventStationDisconnected
  | OutgoingEventStationPropertyChanged
  | OutgoingEventStationAlarmEvent
  | OutgoingEventStationAlarmDelayEvent
  | OutgoingEventStationAlarmArmedEvent
  | OutgoingEventStationAlarmArmDelayEvent
  | OutgoingEventStationConnectionError;
