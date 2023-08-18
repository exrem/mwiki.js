import { EventEmitter } from 'node:events'
import type { BotOptions, Project } from '../'
import { GenerateEndpoint } from '../functions'

export class Bot extends EventEmitter {
    private options!: BotOptions

    constructor (options: BotOptions) {
        super ()

        this.options = options
    }
    
    public get endpoint(): string { return GenerateEndpoint (this.options.project) }
    public get password(): string { return this.options.password }
    public get project(): Project { return this.options.project }
    public get username(): string { return this.options.username }

    public login (): void {
        fetch ('')
    }
}