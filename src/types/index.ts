export type { BotOptions } from './BotOptions'
export type { Project } from './Project'

/*declare module 'node:events' {
    class EventEmitter {
        public static once<E extends EventEmitter, K extends keyof ClientEvents>(
            eventEmitter: E,
            eventName: E extends Client ? K : string,
        ): Promise<E extends Client ? ClientEvents[K] : any[]>;
        public static on<E extends EventEmitter, K extends keyof ClientEvents>(
            eventEmitter: E,
            eventName: E extends Client ? K : string,
        ): AsyncIterableIterator<E extends Client ? ClientEvents[K] : any>;
    }
}*/