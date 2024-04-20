import Phaser from 'phaser'

export const phaserEvents = new Phaser.Events.EventEmitter()

export enum Event {
  PLAYER_JOINED = 'employ-joined',
  PLAYER_UPDATED = 'employ-updated',
  PLAYER_LEFT = 'employ-left',
  PLAYER_DISCONNECTED = 'employ-disconnected',
  MY_PLAYER_READY = 'my-employ-ready',
  MY_PLAYER_NAME_CHANGE = 'my-employ-name-change',
  MY_PLAYER_TEXTURE_CHANGE = 'my-employ-texture-change',
  MY_PLAYER_VIDEO_CONNECTED = 'my-employ-video-connected',
  ITEM_USER_ADDED = 'item-user-added',
  ITEM_USER_REMOVED = 'item-user-removed',
  UPDATE_DIALOG_BUBBLE = 'update-dialog-bubble',
}
