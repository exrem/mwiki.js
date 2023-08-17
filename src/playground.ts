declare class Bot {
    constructor ({ project, username, password }: { project: string, username: string, password: string })

    login(): void

    on(...params: any): void
    parse(...params: any): void
}

export const Bot6421 = new Bot ({
    project: 'azwiki',
    username: 'Bot6421',
    password: '1jb71bot'
})

Bot6421.login()

Bot6421.on ('loggedIn', () => {
    const knyContent = Bot6421.parse ('Demon Slayer: Kimetsu no Yaiba')
})